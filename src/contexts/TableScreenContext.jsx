import { createContext, useState, useEffect, useContext } from "react";
import { apiAdress } from "../constants";
import { toast } from "react-toastify";

const TableScreenContext = createContext(null);

export const useTableScreenContext = () => useContext(TableScreenContext);

const TableScreenContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [timeWindowSizeinDays, setTimeWindowSizeinDays] = useState(0);

  useEffect(() => {
    if (timeWindowSizeinDays) {
      fetchData(timeWindowSizeinDays);
    }
  }, [timeWindowSizeinDays]);

  const availableTimeWindows = [
    { label: "1 dia", value: 1 },
    { label: "2 dias", value: 2 },
    { label: "1 semana", value: 7 },
    { label: "1 mês", value: 30 },
  ];

  async function fetchData(timeWindowSizeinDays) {
    let response = [];
    try {
      setIsLoading(true);
      response = await fetch(
        `${apiAdress}/readings/average-values/${timeWindowSizeinDays}`
      );
      if (response.status < 200 || response.status >= 300) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      const newData = await response.json();
      if (!newData.length) {
        toast.warn("Não há dados para a janela selecionada");
      }
      setData(newData);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <TableScreenContext.Provider
      value={{
        data,
        setData,
        isLoading,
        setIsLoading,
        availableTimeWindows,
        setTimeWindowSizeinDays,
      }}
    >
      {children}
    </TableScreenContext.Provider>
  );
};

export default TableScreenContextProvider;
