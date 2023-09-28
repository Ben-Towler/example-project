import { Link, Td, Tr } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { generatePath } from "react-router";
import { TickerData } from "../common/types";

export const TickerListItem = ({ symbol, price_24h, volume_24h, last_trade_price }: TickerData) => {
  const navigate = useNavigate();

  const onSymbolClick = () => navigate(generatePath("/:symbol", { symbol }));

  return (
    <Tr>
      <Td>
        <Link onClick={onSymbolClick}>{symbol}</Link>
      </Td>
      <Td>{volume_24h}</Td>
      <Td>{price_24h}</Td>
      <Td>{last_trade_price}</Td>
    </Tr>
  )
}