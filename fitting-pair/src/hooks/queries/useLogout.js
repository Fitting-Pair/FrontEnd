import { useMutation } from '@tanstack/react-query';
import { logout } from '../../api/user';
import queryClient from '../../api/queryClient';
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
	const nav = useNavigate();
	return useMutation({
		mutationFn: logout,
		onSuccess: () => {
			localStorage.clear();
			queryClient.clear();
			nav('/', { replace: true });
		},
		onError: error => {
			console.log(error);
		},
	});
};

export default useLogout;
