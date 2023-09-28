import { useQuery } from "@tanstack/react-query"
import { dashboardQueryKeys } from "../common/dashboardQueryKeys";
import { TickerData } from "../common/types";
import { api } from "../../../lib/axios";

const getPrices = () => api.get<Promise<TickerData[]>>("/tickers").then(res => res.data);

export const useGetTickers = () => (
  useQuery({
    queryKey: [dashboardQueryKeys.all],
    queryFn: () => getPrices(),
  })
);
