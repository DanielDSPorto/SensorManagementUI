import { useTableScreenContext } from "../../contexts/TableScreenContext";
import Spinner from "../../components/Spinner";
import Dropdown from "./DropDown";
import TableComponent from "./TableComponent";

const TableScreen = () => {
  const { data, isLoading, availableTimeWindows, setTimeWindowSizeinDays } =
    useTableScreenContext();
  const tableColumns = Object.keys(data?.[0] ?? {});

  return (
    <>
      <Dropdown
        options={availableTimeWindows}
        setSelectedOption={setTimeWindowSizeinDays}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <TableComponent tableData={data} tableColumns={tableColumns} />
        </>
      )}
    </>
  );
};

export default TableScreen;
