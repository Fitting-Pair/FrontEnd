import { useMutation } from '@tanstack/react-query';
import { postImg } from '../../../api/image';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import theme from '../../../styles/theme';
import { PAGE_PATH } from '../../../constants';
import useLoadingStore from '../../../store/useLoadingStore';

const usePostImg = () => {
	const nav = useNavigate();
	const { setLoading } = useLoadingStore(state => state);

	return useMutation({
		mutationFn: postImg,
		onSuccess: data => {
			console.log(data);
			setLoading(true);
			nav(`/${PAGE_PATH.BODY_CHECK}/${PAGE_PATH.STYLEING}/${data.data.imgId}`, {
				replace: true,
			});
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
