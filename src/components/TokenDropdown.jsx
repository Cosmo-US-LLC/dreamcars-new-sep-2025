import { useState, useRef, useEffect } from "react";

export default function TokenSelectDropdown({ tokens, onChange }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(tokens[0]);
  const dropdownRef = useRef(null);

  const handleSelect = (token) => {
    setSelected(token);
    setOpen(false);
    onChange?.(token);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }


      
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-[100%]" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-2 h-[44px] rounded-[8px] cursor-pointer"
        style={{ background: "rgba(255, 255, 255, 0.20)" }}
      >
        <span className="flex items-center 2xl:gap-2 xl:gap-2 lg:gap-2 md:gap-2 sm:gap-[5px] gap-[4px] text-[11.7px] font-[700] font-[Inter]">
          <div className="min-w-[20px]">
            {selected.icon && (
              <img
                src={selected.icon}
                alt={selected.symbol}
                className="2xl:max-h-[20px] xl:max-h-[20px] lg:max-h-[20px] md:max-h-[20px] sm:max-h-[16px] max-h-[16px]"
              />
            )}
          </div>
          <span
            className={`leading-[10px] text-[#fff] text-start ${
              selected.symbol === "More" ? "text-[14px] " : "2xl:text-[11.7px] xl:text-[11.7px] lg:text-[11.7px] md:text-[11.7px] sm:text-[9.7px] text-[9.7px] "
            }`}
          >
            {selected.symbol}
            <br />
            {selected.sub_symbol && (
              <span className="text-[9px] text-[#fff] leading-[8px] font-[400]">
                {selected.sub_symbol}
              </span>
            )}
          </span>
        </span>
        <svg
          className={`w-4 h-4 transition-transform text-[#0c2f71] ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          style={{ color: "#0c2f71" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div
          className="absolute left-0 mt-1 w-full border border-gray-300 rounded-md shadow-md z-10 overflow-hidden"
          style={{
            background: "rgba(54, 54, 54, 0)",
            backdropFilter: "blur(5px)",
          }}
        >
          {tokens.map((token) => (
            <button
              key={token.id}
              onClick={() => handleSelect(token)}
              className="flex items-center text-[#fff] gap-2 w-full px-3 py-2 text-[11.7px] font-[700] font-[Inter] text-left hover:bg-gray-100/80"
              style={{
                background: "rgba(201, 187, 187, 0.47)",
              }}
            >
              {token.icon && (
                <img src={token.icon} alt={token.symbol} className="max-h-[20px]" />
              )}
              {token.symbol}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
