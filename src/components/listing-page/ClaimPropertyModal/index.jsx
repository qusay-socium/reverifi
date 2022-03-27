import claimImage from 'assets/images/claim-property.png';
import loadingImage from 'assets/images/loading.gif';
import { ReactComponent as Location } from 'assets/location.svg';
import {
  ImageInputSection,
  InputInterface,
  UploadIcon,
} from 'components/create-listing/ListingImageInput/listingImageInput.styles';
import Button from 'components/shared/Button';
import FilesList from 'components/shared/FilesList';
import Modal from 'components/shared/Modal';
import Toast from 'components/shared/Toast';
import UploadInput from 'components/shared/UploadInput';
import { useShowModal } from 'contexts/ShowModalContext';
import useShowToastBar from 'hooks/use-show-toast-bar';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { addOrUpdateListingClaim, getListingClaim } from 'services/listing';
import { singleFileUpload } from 'services/upload';
import {
  ClaimAddress,
  ClaimImage,
  ClaimInfoContainer,
  ClaimPropertyContainer,
  ClaimUploadContainer,
  DocumentUploadWrapper,
  IsClaimedMessage,
  LoadingImage,
} from './claim-property-modal.styles';

/**
 * Claim Property Modal component
 *
 * @param {Array} listing  listing details
 *
 * @returns {JSX.Element}
 */
function ClaimPropertyModal({ listing }) {
  const { showModal, setShowModal } = useShowModal();
  const [files, setFiles] = useState([]);
  const [uploadError, setUploadError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  /**
   * Handle modal close
   */
  const handleClose = () => {
    setShowModal(!showModal);
  };

  /**
   * handle Add files function
   */
  const handleAddImages = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  /**
   * handle Delete files function
   */
  const handleDeleteImage = () => {
    setFiles([]);
  };

  /**
   * handle submit function
   */
  const handleSubmit = async () => {
    if (files?.length) {
      setLoading(true);

      await singleFileUpload({
        file: files,
        onError: () => {
          setLoading(false);
          setUploadError('Oops, Failed to upload file, Please try that again');
        },
        onSuccess: async ({ data }) => {
          if (data?.publicUrl) {
            await addOrUpdateListingClaim(listing?.id, {
              documentUrl: data?.publicUrl,
            });

            setIsUploaded(true);
          } else {
            setUploadError(
              'Oops, Failed to upload file, Please try that again'
            );
          }

          setLoading(false);
        },
      });
    } else {
      setUploadError('Please upload a document');
    }
  };

  /**
   * fetch claim function
   */
  const fetchClaim = async () => {
    const claim = await getListingClaim(listing?.id);

    if (claim) {
      setIsClaimed(true);
    }
  };

  useEffect(() => {
    if (!isUploaded) {
      fetchClaim();
      setShowModal(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUploaded]);

  /**
   * hook that hide fail toast message after n duration in seconds
   */
  useShowToastBar(uploadError, setUploadError, 3000);

  /**
   * hook that hide success toast message after n duration in seconds
   */
  useShowToastBar(isUploaded, setIsUploaded, 4000);

  return (
    <Modal show={showModal} handleClose={handleClose}>
      <ClaimPropertyContainer>
        <div>
          <ClaimImage src={claimImage} />
        </div>

        {isClaimed ? (
          <IsClaimedMessage>
            You already submitted a request,
            <br />
            Please wait for the review
          </IsClaimedMessage>
        ) : (
          <ClaimInfoContainer>
            <h3>Claim this property</h3>

            <ClaimAddress>
              <Location />
              <p>
                {listing?.address ||
                  `${listing?.zipCode}, ${listing?.city} ${listing?.country}`}
              </p>
            </ClaimAddress>

            <ClaimUploadContainer>
              <p>Upload Closing statement PDF, JPG, PNG.</p>

              <DocumentUploadWrapper>
                <ImageInputSection>
                  <UploadInput
                    acceptedTypes={[
                      'image/png',
                      'image/jpg',
                      'image/jpeg',
                      'image/pdf',
                    ]}
                    multiple
                    onAddFiles={handleAddImages}
                  >
                    <InputInterface>
                      <span>or</span>
                      <UploadIcon />
                      <span>Drag and drop here</span>
                      <span>browse</span>
                    </InputInterface>
                  </UploadInput>
                </ImageInputSection>

                {files?.length > 0 && (
                  <ImageInputSection>
                    <FilesList
                      files={files}
                      onDelete={handleDeleteImage}
                      headerText="Upload files"
                      filesLimit={1}
                    />
                  </ImageInputSection>
                )}
              </DocumentUploadWrapper>

              {loading ? (
                <LoadingImage src={loadingImage} />
              ) : (
                <Button type="button" onClick={handleSubmit}>
                  Submit
                </Button>
              )}

              {isUploaded && (
                <Toast
                  status="success"
                  message="Your request has been sent successfully and waiting for document verification"
                  isPositionFixed
                />
              )}

              {uploadError && (
                <Toast status="fail" message={uploadError} isPositionFixed />
              )}
            </ClaimUploadContainer>
          </ClaimInfoContainer>
        )}
      </ClaimPropertyContainer>
    </Modal>
  );
}

ClaimPropertyModal.propTypes = {
  listing: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ClaimPropertyModal;
