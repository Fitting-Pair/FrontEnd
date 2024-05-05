import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FittingLayout from "./layout/FittingLayout/FittingLayout";
import StylingLayout from "./layout/StylingLayout/StylingLayout";
import { BodyCheckPage, Homepage, LoginPage, ResultPage, SignUpPage, StylingPage } from "./pages";

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
        path: "signup",
        element: <SignUpPage />,
      },
      { path: "login", element: <LoginPage /> },

      {
        path: "bodyCheck",
        element: <BodyCheckPage />,
      },
    ],
  },
  {
    path: "/",
    element: <StylingLayout />,
    children: [
      {
        path: "result",
        element: <ResultPage />,
      },
      {
        path: "styling",
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

  return <RouterProvider router={router} />;
}

export default App;
