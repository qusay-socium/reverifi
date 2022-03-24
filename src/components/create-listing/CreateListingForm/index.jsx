import { yupResolver } from '@hookform/resolvers/yup';
import loadingImage from 'assets/images/loading.gif';
import FeatureSelection from 'components/create-listing/FeatureSelection';
import FormInputFields from 'components/create-listing/FormInputFields';
import ListingImageInput from 'components/create-listing/ListingImageInput';
import Button from 'components/shared/Button';
import Toast from 'components/shared/Toast';
import { usePointsNotifications } from 'contexts/PointsNotificationContext/PointsNotificationContext';
import { useUser } from 'contexts/UserContext';
import useShowToastBar from 'hooks/use-show-toast-bar';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { addOrUpdateListingImages, getListingsById } from 'services/listing';
import {
  submitListingForm,
  updateListingForm,
} from 'services/listing-create-service';
import { addUserActionType } from 'services/points-service';
import { multipleFileUpload } from 'services/upload';
import { actionTypes } from 'utils/constants';
import { generateLabelValuePairs } from 'utils/helpers';
import listingFormSchema from './create-listing-form-schema';
import {
  CreateListingContainer,
  LoadingImage,
  SubmitSection,
  Wrapper,
} from './create-listing-form.styles';

/**
 * Render new listing form.
 *
 * @return {JSX.Element}
 */
function CreateListingForm({ date }) {
  const navigate = useNavigate();
  const { id: formId } = useParams();
  const [featureIds, setFeatureIds] = useState(new Set());
  const { userInfo, setUserInfo, isLoggedIn } = useUser();
  const [registrationPoints, setRegistrationPoints] = useState(null);
  const { usePointsNotification } = usePointsNotifications();
  const [images, setImages] = useState([]);
  const [uploadImageError, setUploadImageError] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
    control,
  } = useForm({
    defaultValues: {
      overview: '',
    },
    resolver: yupResolver(listingFormSchema),
  });

  useEffect(() => {
    async function fetchData() {
      const response = await getListingsById(formId);
      response.isOwner = !!response.owner;
      response.isAgent = !!response.agent;
      response.lotArea = response.lotArea.sqft;
      response.lotDimensions = response.lotDimensions.sqft;
      response.homeArea = response.homeArea.sqft;
      response.tags = generateLabelValuePairs(response.tags);

      if (response?.features?.length > 0)
        setFeatureIds(new Set(response?.features?.map(({ id }) => id)));

      // fill images
      if (response?.images?.length) {
        setImages(response?.images);
      }

      reset(response);
    }

    if (formId) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formId, reset]);

  const values = watch();

  /**
   * Click handling function that will add or remove the feature id from the array.
   *
   * @param {number} featureId Id of the event invoking element.
   */
  const handleFeatureClick = (featureId) => {
    if (featureIds.has(featureId)) {
      setFeatureIds((prevState) => {
        prevState.delete(featureId);
        return new Set(prevState);
      });
    } else {
      setFeatureIds((prevState) => {
        prevState.add(featureId);
        return new Set(prevState);
      });
    }
  };

  /**
   * Handle form submit
   */
  const submit = async () => {
    if (!isLoggedIn) {
      navigate('/sign-up');
    } else {
      values.features = Array.from(featureIds || []);
      values.homeArea = { sqft: values?.homeArea };
      values.lotArea = { sqft: values?.lotArea };
      values.lotDimensions = { sqft: values?.lotDimensions };
      values.tags = values?.tags?.map((tag) => tag?.value);

      if (!formId) {
        const { id } = await submitListingForm(values);

        const addedUserAction = await addUserActionType({
          actionTypeName: actionTypes?.createNewListing,
        });

        setRegistrationPoints(addedUserAction?.points);
        setUserInfo({
          ...userInfo,
          points: userInfo?.points + addedUserAction?.points,
        });

        // upload images
        if (images?.length) {
          setLoading(true);

          await multipleFileUpload({
            files: images,
            onError: () => {
              setLoading(false);
              setUploadImageError(
                'Oops, Failed uploading images, Please try that again.'
              );
            },
            onSuccess: async ({ data }) => {
              setLoading(false);
              setUploadImageError(false);

              if (data?.publicUrls?.length) {
                await addOrUpdateListingImages(id, {
                  images: data?.publicUrls,
                });

                navigate(`/listing/${id}`);
              } else {
                setUploadImageError(
                  'Oops, Failed uploading images, Please try that again.'
                );
              }
            },
          });
        } else {
          setUploadImageError('Please upload images');
        }
      } else {
        // update data
        await updateListingForm(values, formId);

        // update images
        if (images?.length) {
          setLoading(true);

          // data type is (File)
          const imagesToUpload = images.filter((image) => image.name);

          // data type is (string)
          const imagesNotToUpload = images.filter((image) => !image.name);

          if (imagesToUpload?.length) {
            await multipleFileUpload({
              files: imagesToUpload,
              onError: () => {
                setUploadImageError(
                  'Oops, Failed uploading images, Please try that again.'
                );
                setLoading(false);
              },
              onSuccess: async ({ data }) => {
                setLoading(false);
                setUploadImageError(false);

                if (data?.publicUrls?.length) {
                  await addOrUpdateListingImages(formId, {
                    images: [...data?.publicUrls, ...imagesNotToUpload],
                  });

                  navigate(`/listing/${formId}`);
                } else {
                  setUploadImageError(
                    'Oops, Failed uploading images, Please try that again.'
                  );
                }
              },
            });
          } else if (imagesNotToUpload?.length) {
            await addOrUpdateListingImages(formId, {
              images: imagesNotToUpload,
            });

            navigate(`/listing/${formId}`);
          }
        } else {
          setUploadImageError('Please upload images');
        }
      }
    }
  };

  usePointsNotification(registrationPoints, !!registrationPoints);

  useShowToastBar(uploadImageError, setUploadImageError, 3000);

  return (
    <CreateListingContainer>
      <form onSubmit={handleSubmit(submit)}>
        <Wrapper>
          <h1> {date || 'Create New Listing'} </h1>
          <FormInputFields
            errors={errors}
            register={register}
            setValue={setValue}
            values={values}
            control={control}
          />
        </Wrapper>

        <ListingImageInput images={images} setImages={setImages} />

        <FeatureSelection
          featureIds={featureIds}
          handleFeatureClick={handleFeatureClick}
        />
        <SubmitSection>
          {loading ? (
            <LoadingImage src={loadingImage} />
          ) : (
            <Button type="submit">Save</Button>
          )}
        </SubmitSection>
        {uploadImageError && <Toast status="fail" message={uploadImageError} />}
      </form>
    </CreateListingContainer>
  );
}

CreateListingForm.propTypes = {
  date: PropTypes.string,
};

CreateListingForm.defaultProps = {
  date: null,
};

export default CreateListingForm;
