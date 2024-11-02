import { useRoutes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import TableScreen from './screens/TableScreen/TableScreen';
import SensorScreen from './screens/SensorScreen/SensorScreen';

function App() {
  const Routes = useRoutes([
    {
      path: '/',
      element: <TableScreen />,
    },
    {
      path: '/table',
      element: <TableScreen />,
    },
    { path: '/sensor', element: <SensorScreen /> },
  ]);
  return (
    <>
      <Header />
      {Routes}
    </>
  );
}

export default App;
