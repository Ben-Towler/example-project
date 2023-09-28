import { Card, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { useGetSymbol } from "../hooks/useGetSymbol"
import { formatStringWithUnderscores } from "../../../lib/utils/stringUtils";

type Props = {
  symbol: string;
}

export const SymbolDetails = ({ symbol }: Props) => {
  const { data, isLoading } = useGetSymbol(symbol);

  if (isLoading) {
    return <>Loading</>;
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
              <Th>Key</Th>
              <Th>Value</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.entries(data).map(([key, value]) => <SymbolOverviewRow key={key} label={key} value={value} />)}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  )
}

type SymbolOverviewRowProps = {
  label: string;
  value: string | number;
}

const SymbolOverviewRow = ({ label, value }: SymbolOverviewRowProps) => (
  <Tr>
    <Td>
      <Text>{formatStringWithUnderscores(label)}</Text>
    </Td>
    <Td>
      <Text>{value}</Text>
    </Td>
  </Tr>
)