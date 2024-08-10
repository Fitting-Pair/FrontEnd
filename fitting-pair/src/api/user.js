import { axiosInstance } from './axiosInstance';
import { API_PATH } from '../constants';
import { setRefresh } from '../util';
import axios from 'axios';

const signup = async ({ userName, phoneNumber, userHeight, userGender }) => {
	const { data } = await axios.post(
		`${import.meta.env.VITE_API_URL}${API_PATH.AUTH}/${API_PATH.SIGN_UP}`,
		{
			userName,
			phoneNumber,
			height: userHeight,
			gender: userGender,
		},
	);
	return data;
};

const login = async ({ phoneNumber }) => {
	const { data } = await axiosInstance.post(
		`${API_PATH.AUTH}/${API_PATH.LOGIN}`,
		{ phoneNumber },
	);
	return data;
};

const logout = async () => {
	setRefresh('Refresh', localStorage.getItem('refreshToken'));

	const { data } = await axiosInstance.post(
		`${API_PATH.AUTH}/${API_PATH.LOGOUT}`,
	);
	return data;
};

const getAccessToken = async () => {
	const refreshToken = localStorage.getItem('refreshToken');

	try {
		const { data } = await axiosInstance.get(`${API_PATH.REFRESH}`, {
			headers: {
				Refresh: `${refreshToken}`,
			},
		});
		console.log(data);

		return data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export { signup, login, logout, getAccessToken };
