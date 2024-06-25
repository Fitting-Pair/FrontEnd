import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FittingLayout from "./layout/FittingLayout/FittingLayout";
import StylingLayout from "./layout/StylingLayout/StylingLayout";
import { BodyCheckPage, Homepage, LoginPage, MyPage, ResultPage, SignUpPage, StylingPage } from "./pages";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import MyPageLayout from "./layout/MyPageLayout/MyPageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FittingLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      { path: "login", element: <LoginPage /> },

      {
        path: "body-check",
        element: <BodyCheckPage />,
      },
    ],
  },
  {
    path: "/body-check",
    element: <StylingLayout />,
    children: [
      {
        path: "styling", // user id 넣어서 수정해야함
        element: <ResultPage />,
      },
      {
        path: "styling/result",
        element: <StylingPage />,
      },
    ],
  },
  {
    path: "/my-page",
    element: <MyPageLayout />,
    children: [
      {
        index: true,
        element: <MyPage />,
      },
    ],
  },
]);

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  window.addEventListener("resize", () => setScreenSize());

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
