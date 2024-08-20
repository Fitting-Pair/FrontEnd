import { axiosInstance } from './axiosInstance';
import { API_PATH } from '../constants';

const getBodyCheckResult = imgId => {
	const { data } = axiosInstance.get(`${API_PATH.RESULT}/${imgId}`);

	return data;
};

export { getBodyCheckResult };
