import {RouterProvider} from "react-router";
import {routes} from "./routes.ts";

function App() {
  return (<RouterProvider router={routes} />)
}

export default App
