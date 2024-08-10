import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/user';
import { toast } from 'sonner';
import { PAGE_PATH } from '../../constants';
import theme from '../../styles/theme';

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

			if (window.innerWidth <= 600) {
				// 모바일
				nav(`${PAGE_PATH.MY_PAGE}`);
			} else {
				nav(`${PAGE_PATH.BODY_CHECK}`);
			}
		},
		onError: error => {
			console.log(error.response.data.message);
			error.response &&
				toast.error(error.response.data.message, {
					duration: 1200,
					style: {
						color: theme.COLOR.WHITE,
						backgroundColor: theme.COLOR.RED,
					},
				});
		},
	});
};

export { useLogin };
