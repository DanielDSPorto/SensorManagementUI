const TableComponent = ({ tableColumns, tableData }) => {
  return (
    <table className="w-full my-5 border-separate border-spacing-1 text-purple-950">
      <thead>
        <tr className="text-lg bg-purple-950 text-purple-50 border">
          {tableColumns.map((columnName, columnIndex) => (
            <th key={columnIndex}>{columnName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((readingObj, rowIndex) => (
          <tr
            key={rowIndex}
            className={rowIndex % 2 === 0 ? "bg-purple-50" : "bg-purple-200"}
          >
            {tableColumns.map((columnName, columnIndex) => (
              <td
                key={`${rowIndex}x${columnIndex}`}
                className="text-center py-3 font-bold"
              >
                {readingObj[columnName]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
