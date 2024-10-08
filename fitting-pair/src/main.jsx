import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import queryClient from './api/queryClient';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')).render(
	<QueryClientProvider client={queryClient}>
		<ReactQueryDevtools initialIsOpen={false} />
		<App />
		<Toaster />
	</QueryClientProvider>,
);
