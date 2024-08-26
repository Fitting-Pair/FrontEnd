import { axiosInstance } from './axiosInstance';
import { API_PATH } from '../constants';

const getBodyCheckResult = async imgId => {
	const { data } = await axiosInstance.get(`${API_PATH.RESULT}/${imgId}`);

	return data;
};

export { getBodyCheckResult };
