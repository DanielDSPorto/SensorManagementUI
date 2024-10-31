import { Link } from 'react-router-dom';
import RadixLogo from '../assets/radix.jpg';

const Header = () => {
  return (
    <header className="bg-purple-50 h-fit px-4 pb-2 pt-4 border-b-4 border-purple-950">
      <img src={RadixLogo} alt="Logo da empresa Radix." className="h-24 " />
      <section className="w-full flex gap-2">
        <Link
          to="/table"
          className="w-full bg-purple-950 hover:bg-purple-900 text-purple-50 py-1 rounded-md font-medium text-center"
        >
          Tabela
        </Link>
        <Link
          to="/sensor"
          className="w-full bg-purple-950 hover:bg-purple-900 text-purple-50 py-1 rounded-md font-medium text-center"
        >
          Dados por Sensor
        </Link>
      </section>
    </header>
  );
};

export default Header;
