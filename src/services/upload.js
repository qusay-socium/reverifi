import { apiUrl } from 'config/config';
import http from 'utils/http';

const singleFileUpload = async ({
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

export default singleFileUpload;
