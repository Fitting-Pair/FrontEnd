import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/user';
import { toast } from 'sonner';
import { setHeader } from '../../util';
import { PAGE_PATH, QUERY_KEYS } from '../../constants';
import queryClient from '../../api/queryClient';

const useLogin = () => {
	const nav = useNavigate();

	return useMutation({
		mutationFn: login,
		onSuccess: data => {
			toast.success('로그인 완료 !', {
				duration: 1200,
			});

			localStorage.setItem('accessToken', data.data.accessToken);
			localStorage.setItem('refreshToken', data.data.refreshToken);
			setHeader('Authorization', data.data.accessToken);

			if (window.innerWidth <= 600) {
				// 모바일
				nav(`${PAGE_PATH.MY_PAGE}`);
			} else {
				nav(`${PAGE_PATH.BODY_CHECK}`);
			}
		},

		onSettled: () => {
			queryClient.refetchQueries({
				queryKey: [QUERY_KEYS.AUTH, QUERY_KEYS.GET_ACCESS_TOKEN],
			});
		},
		throwOnError: error => Number(error.response?.status) >= 500,
	});
};

export { useLogin };
