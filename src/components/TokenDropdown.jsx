import { useState, useRef, useEffect, useMemo } from "react";
import { tokenImageMap } from "../presale-gg/assets/img/tokens";
/**
 * @typedef {import("../presale-gg/api/api.types").API.PaymentToken} PaymentToken
 */

/**
 * @param {object} props
 * @param {PaymentToken[]} props.tokens
 * @param {PaymentToken} [props.selectedToken]
 * @param {(newToken: PaymentToken) => void} props.onChange
 * @param {string} [props.defaultLabel]
 * @param {string} [props.placeholder]
 * @param {PaymentToken | null} [props.defaultToken]
 * @param {boolean} props.selected
 */
export default function TokenSelectDropdown({ tokens, onChange, selectedToken, selected, defaultLabel, defaultToken, placeholder }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (token) => {
    setOpen(false);
    onChange?.(token);
  };

  const text = useMemo(() =>
    selectedToken?.symbol.toUpperCase() ??
    defaultLabel ??
    defaultToken?.symbol.toUpperCase() ??
    placeholder ??
    'None',
    [selectedToken, defaultLabel, defaultToken, placeholder]
  )

  const img = useMemo(() => {
    if (selectedToken || defaultToken) return tokenImageMap[(selectedToken ?? defaultToken)?.symbol.toLowerCase() ?? '']
    return null
  }, [selectedToken, defaultToken])

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
            {img && (
              <img
                src={img}
                alt=''
                className="2xl:max-h-[20px] xl:max-h-[20px] lg:max-h-[20px] md:max-h-[20px] sm:max-h-[16px] max-h-[16px]"
              />
            )}
          </div>
          <span
            className={`leading-[10px] text-[#fff] text-start`}
          >
            {text}
            <br />
            {selectedToken?.chain && (
              <span className="text-[9px] text-[#fff] leading-[8px] font-[400]">
                {selectedToken.chain}
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
          className="absolute left-0 max-h-[250px] overflow-y-scroll mt-1 w-full border border-gray-300 rounded-md shadow-md z-10 overflow-hidden"
          style={{
            background: "#929292ff",
            backdropFilter: "blur(5px)",
          }}
        >
          {tokens.map((token) => (
            <button
              key={token.id}
              onClick={() => handleSelect(token)}
              className="flex items-center text-[#fff] gap-x-2 w-full px-3 py-2 text-[11.7px] font-[700] font-[Inter] text-left hover:bg-[#8a8a8aff] bg-[#929292ff]"
             
            >
              {tokenImageMap[token.symbol.toLowerCase()] && (
                <img src={tokenImageMap[token.symbol.toLowerCase()]} alt="" className="max-h-[20px]" />
              )}
              {token.symbol.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
