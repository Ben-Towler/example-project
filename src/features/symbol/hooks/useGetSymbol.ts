import { useQuery } from "@tanstack/react-query"
import { SymbolData } from "../common/types";
import { symbolQueryKeys } from "../common/symbolQueryKeys";
import { api } from "../../../lib/axios";

const getSymbol = (symbol: string) => api.get<Promise<SymbolData>>(`symbols/${symbol}`).then(res => res.data);

export const useGetSymbol = (symbol: string) => (
  useQuery({
    queryKey: [symbolQueryKeys.detail(symbol)],
    queryFn: () => getSymbol(symbol),
  })
);
