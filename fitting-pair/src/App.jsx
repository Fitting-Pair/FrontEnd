import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FittingLayout from "./layout/FittingLayout/FittingLayout";
import StylingLayout from "./layout/StylingLayout/StylingLayout";
import { BodyCheckPage, Homepage, LoginPage, ResultPage, SignUpPage, StylingPage } from "./pages";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

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
        path: "result", // 이후 result/:userid 등으로 변경 가능성 o !!
        element: <ResultPage />,
      },
      {
        path: "result/styling",
        element: <StylingPage />,
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
