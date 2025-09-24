import { useState, useRef, useEffect, useMemo } from "react";
import { tokenImageMap } from "../presale-gg/assets/img/tokens";
import clsx from "clsx";
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
 * @param {"default" | "contrast"} props.variant
 */
export default function TokenSelectDropdown({ tokens, onChange, variant = 'default', selectedToken, selected, defaultLabel, defaultToken, placeholder, ...others }) {
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

  const textCol = variant === "default" ? "text-[#fff]" : "text-[#000]"
  const textSize = variant === "default" ? "text-[12px]" : "text-[16px] xs:text-[12px]"
  const textSizeSm = variant === "default" ? "text-[9px]" : "text-[12px] xs:text-[9px]"
  const imgSize = variant === "default" ? "h-[20px] w-[20px]" : "h-[28px] w-[28px] xs:h-[32px] xs:w-[32px]"

  return (
    <div {...others} className={clsx("relative", others.className)} ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className={clsx("flex items-center justify-between w-full px-2 h-[44px] rounded-[8px] cursor-pointer", {"outline-2 outline-[#FFD02F]": selected})}
        style={{ background: "rgba(255, 255, 255, 0.20)", outlineStyle: selected ? "solid" : "none" }}
      >
        <span className={`flex items-center 2xl:gap-2 xl:gap-2 lg:gap-2 md:gap-2 sm:gap-[5px] gap-[4px] ${textSize} font-[700]`}>
            {img && (
              <img
                src={img}
                alt=''
                className={`${imgSize}`}
              />
            )}
          <span
            className={`leading-[0.8] ${textCol} text-start`}
          >
            {text}
            <br />
            {selectedToken?.chain && (
              <span className={`${textSizeSm} ${textCol} leading-[8px] font-[400]`}>
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
          className="absolute top-full left-0 mt-1 w-full border border-gray-300 rounded-md shadow-md z-10 overflow-y-auto max-h-[250px]"
          style={{
            background: "#929292ff",
            backdropFilter: "blur(5px)",
          }}
        >
          {tokens.map((token) => (
            <button
              key={token.id}
              onClick={() => handleSelect(token)}
              className="flex items-center text-[#fff] gap-2 w-full px-3 py-2 text-[11.7px] font-[700] text-left hover:bg-gray-100/80"
              style={{
                background: "rgba(201, 187, 187, 0.47)",
              }}
            >
              {tokenImageMap[token.symbol.toLowerCase()] && (
                <img src={tokenImageMap[token.symbol.toLowerCase()]} alt="" className="max-h-[20px]" />
              )}
              <p className="leading-[1.1]">
                {token.symbol.toUpperCase()}
                <br />
                {token?.chain && (
                  <span className="text-[9px] text-[#fff] leading-[8px] font-[400]">
                    {token.chain}
                  </span>
                )}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
