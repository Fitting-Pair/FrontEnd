import { axiosInstance } from './axiosInstance';
import { API_PATH } from '../constants';

const postImg = async ({ imageFile }) => {
	const { data } = await axiosInstance.post(`${API_PATH.UPLOAD_USER_IMAGE}`, {
		imageFile,
	});
	return data;
};

export { postImg };
