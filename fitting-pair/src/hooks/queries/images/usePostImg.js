import { useMutation } from '@tanstack/react-query';
import { postImg } from '../../../api/image';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import theme from '../../../styles/theme';
import { PAGE_PATH } from '../../../constants';

const usePostImg = () => {
	const nav = useNavigate();
	return useMutation({
		mutationFn: postImg,
		onSuccess: data => {
			console.log(data);
			nav(`/${PAGE_PATH.BODY_CHECK}/${PAGE_PATH.STYLEING}`, { replace: true });
		},
		onError: error => {
			console.log(error);
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

export default usePostImg;
