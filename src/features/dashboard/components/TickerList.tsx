import { Card, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import { useGetTickers } from "../hooks/useGetTickers";
import { RootState } from "../../../lib/redux";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { TickerListItem } from "./TickerListItem";
import { TickerData } from "../common/types";

export const filterDataBySymbol = (query: string, data: TickerData[]) => {
  return data.filter(({ symbol }) => symbol.toLocaleLowerCase().startsWith(query.toLocaleLowerCase()));
}

export const TickerList = () => {
  const { data, isLoading } = useGetTickers();
  const searchQuery = useSelector((state: RootState) => state.dashboard.searchQuery);

  const tickerData = useMemo(() => {
    if (!data) {
      return [];
    }

    if (!searchQuery) {
      return data;
    }

    return filterDataBySymbol(searchQuery, data);
  }, [data, searchQuery]);

  if (isLoading) {
    return <>Loading...</>
  }

  if (!data) {
    return <>No data</>;
  }

  return (
    <Card>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Symbol</Th>
              <Th>Volume (24h)</Th>
              <Th>Price (24h)</Th>
              <Th>Last Trade Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tickerData.map(price => <TickerListItem key={price.symbol} {...price} />)}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  )
}
