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
	EditPage,
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
				path: `${PAGE_PATH.STYLEING}/:imgId`,
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
				path: `${PAGE_PATH.RESULT}/:id`,
				element: <MoblieResultPage />,
			},
			{
				path: `${PAGE_PATH.RESULT}/${PAGE_PATH.DETAIL}/:name`,
				element: <ResultDetail />,
			},
			{
				path: `${PAGE_PATH.MODIFY}/:id`,
				element: <ModifyPage />,
			},
			{
				path: `${PAGE_PATH.EDIT}/:id`,
				element: <EditPage />,
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
