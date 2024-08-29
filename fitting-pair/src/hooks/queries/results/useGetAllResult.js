import { useQuery } from '@tanstack/react-query';
import { getAllResult } from '../../../api/user';
import { QUERY_KEYS } from '../../../constants';

const useGetAllResult = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.MYPAGE],
		queryFn: getAllResult,
		select: data => data.data.userStylingResultResponseDtos,
	});
};

export default useGetAllResult;
