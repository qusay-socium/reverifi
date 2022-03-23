import { apiUrl } from 'config/config';
import http from 'utils/http';

/**
 * single File Upload service
 *
 * @param {Array} file file array
 * @param {Function} onError on error function
 * @param {Function} onSuccess on success function
 *
 * @returns {String} publicUrl
 */
export const singleFileUpload = async ({
  file,
  onError = () => {},
  onSuccess = () => {},
}) => {
  const formData = new FormData();
  formData.append('file', file[0]);

  await http
    .post(`${apiUrl}/upload/file`, formData)
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      onError(error);
    });
};

/**
 * single File Upload service
 *
 * @param {Array} files files array
 * @param {Function} onError on error function
 * @param {Function} onSuccess on success function
 *
 * @returns {Array} publicUrls
 */
export const multipleFileUpload = async ({
  files,
  onError = () => {},
  onSuccess = () => {},
}) => {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append('files[]', file);
  });

  await http
    .post(`${apiUrl}/upload/multiple-files`, formData)
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      onError(error);
    });
};
