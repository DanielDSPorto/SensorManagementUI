import { useState, useRef, memo } from "react";

const Dropdown = ({ options = [], setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const textBoxRef = useRef(null);
  return (
    <>
      <div
        className={`${
          !isOpen && "hidden"
        } z-0 h-dvh w-dvw bg-purple-200/50 absolute top-0`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="flex justify-center h-fit items-center py-4 bg-purple-50">
        <div className="relative inline-block text-left">
          <div>
            <button
              id="dropdown-button"
              type="button"
              className="inline-flex justify-center items-center w-72 rounded-md border border-purple-600 shadow-sm px-4 py-2 bg-purple-950 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-yellow-500"
              aria-haspopup="true"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                id="dropdown-selected-option"
                className="w-full text-left overflow-hidden flex-1"
                ref={textBoxRef}
              >
                Selecione uma janela de tempo
              </span>
              <svg
                id="caret"
                className={`ml-2.5 h-5 w-5 ease-in-out duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            id="dropdown-menu"
            className={`${
              !isOpen && "hidden"
            } origin-top-right absolute w-full left-0 mt-2 rounded-md shadow-2xl shadow-purple-800 ring-1 ring-black ring-opacity-5 focus:outline-none bg-purple-950`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-button"
            tabIndex="-1"
          >
            <div className="py-1 text-white" role="none">
              {options.map(({ label, value }, idx) => (
                <option
                  className="block px-4 py-2 text-left text-sm  hover:bg-purple-800 focus:bg-purple-700 "
                  role="menuitem"
                  key={idx}
                  value={value}
                  onClick={(evt) => {
                    setSelectedOption(evt.target.value);
                    textBoxRef.current.innerText = label;
                    setIsOpen(false);
                  }}
                >
                  {label}
                </option>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Dropdown);
