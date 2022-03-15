import { ReactComponent as NotesIcon } from 'assets/icons/overview.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/transaction-step3-delete.svg';
import { ReactComponent as DownloadIcon } from 'assets/icons/transaction-step3-download.svg';
import { ReactComponent as EyeIcon } from 'assets/icons/transaction-step3-eye.svg';
import { ReactComponent as PrintIcon } from 'assets/icons/transaction-step3-print.svg';
import {
  InputInterface,
  UploadIcon,
} from 'components/create-listing/ListingImageInput/listingImageInput.styles';
import Button from 'components/shared/Button';
import FilesList from 'components/shared/FilesList';
import FormFileInput from 'components/shared/FormFileInput';
import TextAreaInput from 'components/shared/FormTextArea';
import Table from 'components/shared/Table';
import {
  IconContainer,
  TableCell,
  TableRow,
} from 'components/shared/Table/table-styles';
import Tooltip from 'components/shared/Tooltip';
import React, { useState } from 'react';
import { ButtonsContainer } from '../AssignTasksWrapper/assign-tasks-wrapper.styles';
import {
  SectionContainer,
  UploadContainer,
} from './upload-documents-wrapper.styles';

const data = [
  {
    by: 'John Doe',
    date: 'Sep 10, 2021',
    name: 'Certificate of Occupancy',
  },
  {
    by: 'John Doe',
    date: 'Sep 10, 2021',
    name: 'Consumer Information Statement',
  },
  {
    by: 'John Doe',
    date: 'Sep 10, 2021',
    name: 'Lead Based Paint Form',
  },
  {
    by: 'John Doe',
    date: 'Sep 10, 2021',
    name: 'NJ MLS Residential Listing Agreement',
  },
];

/**
 * Upload Documents Wrapper components
 *
 * @return {JSX.Element}
 */
function UploadDocumentsWrapper() {
  const [documents /* setDocuments */] = useState([]);

  /**
   * on add files function
   */
  const onAddFiles = () => {};

  /**
   * on delete files function
   */
  const onDeleteFiles = () => {};

  return (
    <div>
      <UploadContainer>
        <FormFileInput
          acceptedTypes={['image/png', 'image/gif', 'image/jpeg']}
          multiple
          onAddFiles={onAddFiles}
        >
          <InputInterface>
            <UploadIcon />
            <span>Drag and drop your documents here</span>
            <span>or</span>
            <span>browse</span>
          </InputInterface>
        </FormFileInput>

        <FilesList files={documents} onDelete={onDeleteFiles} />
      </UploadContainer>

      <SectionContainer>
        <Table
          headers={['Document Name', 'upload date', 'uploaded by', null]}
          fixedLayout
        >
          {data?.map(({ name, date, by }) => (
            <TableRow key={name}>
              <TableCell>{name}</TableCell>
              <TableCell>{date}</TableCell>
              <TableCell>{by}</TableCell>
              <TableCell iconsCell>
                <IconContainer>
                  <DownloadIcon />
                  <Tooltip
                    text="Download"
                    arrowPosition="top"
                    position={[2, -2]}
                  />
                </IconContainer>
                <IconContainer>
                  <EyeIcon />
                  <Tooltip text="View" arrowPosition="top" position={[2, -1]} />
                </IconContainer>
                <IconContainer>
                  <PrintIcon />
                  <Tooltip
                    text="Print"
                    arrowPosition="top"
                    position={[2, -1]}
                  />
                </IconContainer>
                <IconContainer>
                  <DeleteIcon />
                  <Tooltip
                    text="Delete"
                    arrowPosition="top"
                    position={[2, -1.6]}
                  />
                </IconContainer>
              </TableCell>
            </TableRow>
          ))}
        </Table>

        <TextAreaInput
          name="notes"
          label="Notes"
          rounded={false}
          labelIconElement={<NotesIcon />}
          limit={250}
        />

        <ButtonsContainer>
          <Button type="button" light>
            Back
          </Button>
          <Button type="button">Confirm and Next</Button>
        </ButtonsContainer>
      </SectionContainer>
    </div>
  );
}

export default UploadDocumentsWrapper;
