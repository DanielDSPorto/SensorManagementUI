import { useEffect, useState, useRef } from "react";
import { apiAdress } from "../../constants";
import { toast } from "react-toastify";

const EquipmentSearchBar = ({ fetchData }) => {
  const [equipmentIds, setEquipmentIds] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const searchBarRef = useRef(null);
  async function fetchEquipmentIDs() {
    try {
      const response = await fetch(`${apiAdress}/readings/`);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      const eqIds = await response.json();
      setEquipmentIds(eqIds);
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchEquipmentIDs();
  }, []);

  const suggestedEquipmentIds = equipmentIds.filter((eqId) =>
    eqId.includes(inputValue.toUpperCase())
  );

  const showOptionsList =
    !!suggestedEquipmentIds.length &&
    inputValue.length > 3 &&
    searchBarRef.current === document.activeElement;

  return (
    <span className="w-full flex justify-center my-4 relative">
      <input
        type="text"
        className="border-2 border-purple-950 rounded-lg w-1/2 px-2 text-purple-950 font-bold"
        placeholder="digite o Id do equipamento"
        onChange={(evt) => setInputValue(evt.target.value)}
        value={inputValue}
        ref={searchBarRef}
        onKeyDown={(evt) => {
          if (evt.key === "Enter") {
            searchBarRef.current.blur();
            fetchData(inputValue);
          }
        }}
      />
      {
        <article
          className={`absolute top-7 flex flex-col border-2 px-2 w-1/2 rounded-b-lg z-10 bg-purple-50 ${
            showOptionsList ? "" : "hidden"
          }`}
        >
          {suggestedEquipmentIds.map((eqId, idx) => (
            <div
              key={idx}
              tabIndex={1}
              className="text-md text-purple-950 font-bold pt-1 px-2 hover:bg-purple-950 hover:text-purple-50 cursor-pointer"
              onClick={() => {
                {
                  setInputValue(eqId);
                  fetchData(eqId);
                }
              }}
            >
              {eqId}
            </div>
          ))}
        </article>
      }
    </span>
  );
};

export default EquipmentSearchBar;
