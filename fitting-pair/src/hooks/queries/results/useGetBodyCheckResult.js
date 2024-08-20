import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../../constants';
import { getBodyCheckResult } from '../../../api';

const useGetBodyCheckResult = (imgId, timeout) => {
	return useQuery({
		queryKey: [QUERY_KEYS.RESULT, imgId],
		queryFn: () => getBodyCheckResult(imgId),
		enabled: !!timeout,
	});
};

export default useGetBodyCheckResult;
