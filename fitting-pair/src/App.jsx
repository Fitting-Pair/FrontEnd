import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { PAGE_PATH } from './constants';
import { FittingLayout, StylingLayout, MyPageLayout } from './layout';
import {
	BodyCheckPage,
	Homepage,
	LoginPage,
	MyPage,
	ResultPage,
	SignUpPage,
	StylingPage,
	MoblieResultPage,
	ModifyPage,
	ResultDetail,
} from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <FittingLayout />,
		children: [
			{
				index: true,
				element: <Homepage />,
			},
			{
				path: 'sign-up',
				element: <SignUpPage />,
			},
			{ path: 'login', element: <LoginPage /> },

			{
				path: 'body-check',
				element: <BodyCheckPage />,
			},
		],
	},
	{
		path: '/body-check',
		element: <StylingLayout />,
		children: [
			{
				path: 'styling', // user id 넣어서 수정해야함
				element: <ResultPage />,
			},
			{
				path: 'styling/result',
				element: <StylingPage />,
			},
		],
	},
	{
		path: `${PAGE_PATH.MY_PAGE}`,
		element: <MyPageLayout />,
		children: [
			{
				index: true,
				element: <MyPage />,
			},
			{
				path: 'result/:id', // TODO:id 임의 지정 이후 수정
				element: <MoblieResultPage />,
			},
			{
				path: 'result/detail/:id',
				element: <ResultDetail />,
			},
			{
				path: `${PAGE_PATH.MODIFY}/:id`,
				element: <ModifyPage />,
			},
		],
	},
]);

function App() {
	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
