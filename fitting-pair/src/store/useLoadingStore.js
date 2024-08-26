import { create } from 'zustand';

const useLoadingStore = create(set => ({
	loading: false,
	timeout: false,

	setLoading: loading =>
		set(() => ({
			loading: loading,
		})),

	setTime: timeout =>
		set(() => ({
			timeout: timeout,
		})),
}));

export default useLoadingStore;
