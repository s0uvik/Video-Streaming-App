import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import Watch from "./components/Watch";
import SearchResultContainer from "./components/SearchResultContainer";

function App() {
  // const appRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Body />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <VideoContainer />,
  //       },
  //       {
  //         path: "/watch",
  //         element: <Watch />,
  //       },
  //       {
  //         path: "/search",
  //         element: <SearchResultContainer />,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Body />
      </BrowserRouter>
    </>
  );
}

export default App;
