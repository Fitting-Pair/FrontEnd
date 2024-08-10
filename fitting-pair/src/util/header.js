import { axiosInstance } from '../api/axiosInstance';

function setHeader(key, value) {
	axiosInstance.defaults.headers.common[key] = `Bearer ${value}`;
}

function removeHeader(key) {
	if (!axiosInstance.defaults.headers.common[key]) {
		return;
	}

	delete axiosInstance.defaults.headers.common[key];
}

function setRefresh(key, value) {
	axiosInstance.defaults.headers.common[key] = value;
}

export { setHeader, removeHeader, setRefresh };
