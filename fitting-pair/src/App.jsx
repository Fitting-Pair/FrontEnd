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
		path: `${PAGE_PATH.BASE}`,
		element: <FittingLayout />,
		children: [
			{
				index: true,
				element: <Homepage />,
			},
			{
				path: `${PAGE_PATH.SIGN_UP}`,
				element: <SignUpPage />,
			},
			{ path: `${PAGE_PATH.LOGIN}`, element: <LoginPage /> },

			{
				path: `${PAGE_PATH.BODY_CHECK}`,
				element: <BodyCheckPage />,
			},
		],
	},
	{
		path: `/${PAGE_PATH.BODY_CHECK}`,
		element: <StylingLayout />,
		children: [
			{
				path: `${PAGE_PATH.STYLEING}`, // user id 넣어서 수정해야함
				element: <ResultPage />,
			},
			{
				path: `${PAGE_PATH.STYLEING}/${PAGE_PATH.RESULT}`,
				element: <StylingPage />,
			},
		],
	},
	{
		path: `${PAGE_PATH.MY_PAGE}`,
		element: <MyPageLayout />,
		children: [
			{
				path: ':id',
				element: <MyPage />,
			},
			{
				path: `${PAGE_PATH.RESULT}/:id`, // TODO:id 임의 지정 이후 수정
				element: <MoblieResultPage />,
			},
			{
				path: `${PAGE_PATH.RESULT}/${PAGE_PATH.DETAIL}/:id`,
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
