import http from 'utils/http';
import { apiUrl } from 'config/config';

const uploadImage = async ({
  file,
  onError = () => {},
  onSuccess = () => {},
}) => {
  const formData = new FormData();
  formData.append('file', file[0]);

  await http
    .post(`${apiUrl}/upload/image`, formData)
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      onError(error);
    });
};

export default uploadImage;
