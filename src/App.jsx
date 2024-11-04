import { useRoutes } from "react-router-dom";
import Header from "./components/Header";
import TableScreen from "./screens/TableScreen/TableScreen";
import SensorScreen from "./screens/SensorScreen/SensorScreen";
import TableScreenContextProvider from "./contexts/TableScreenContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const Routes = useRoutes([
    {
      path: "/",
      element: (
        <TableScreenContextProvider>
          <TableScreen />
        </TableScreenContextProvider>
      ),
    },
    {
      path: "/table",
      element: (
        <TableScreenContextProvider>
          <TableScreen />
        </TableScreenContextProvider>
      ),
    },
    { path: "/sensor", element: <SensorScreen /> },
  ]);
  return (
    <>
      <ToastContainer />
      <Header />
      {Routes}
    </>
  );
}

export default App;
