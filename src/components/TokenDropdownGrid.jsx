import { useMemo } from "react"
import { useApiState } from "../presale-gg/stores/api.store"
import { groupTokens } from "../presale-gg/util"
import TokenSelectDropdown from "./TokenDropdown"

/**
 * @typedef {import("../presale-gg/api/api.types").API.PaymentToken} PaymentToken
 */

/**
 * @param {object} props
 * @param {(newToken: PaymentToken) => void} props.onTokenChange
 * @param {PaymentToken} props.selectedToken
 */
const TokenDropdownGrid = (props) => {
	const apiData = useApiState()
	const groupedTokens = useMemo(() => {
		return groupTokens(apiData.paymentTokens ?? [])
	}, [apiData.paymentTokens])
	const selectedGroupIndex = useMemo(() => {
		const index = groupedTokens.findIndex((list) => {
			return list.currencies.find((token) => token.id === props.selectedToken?.id) !== undefined
		})
		if (index === -1) return null
		return index
	}, [groupedTokens, props.selectedToken])

	return (
		<div className="grid grid-cols-3 gap-2 md:grid-cols-5">
			{groupedTokens.map((list, index) => (
				<TokenSelectDropdown
					key={index}
					selectedToken={selectedGroupIndex === index ? props.selectedToken : null}
					onChange={props.onTokenChange}
					defaultLabel={list.defaultLabel}
					placeholder={list.placeholder}
					tokens={list.currencies}
					defaultToken={list.defaultToken}
					selected={selectedGroupIndex === index}
				/>
			))}
		</div>
	)
}

export default TokenDropdownGrid