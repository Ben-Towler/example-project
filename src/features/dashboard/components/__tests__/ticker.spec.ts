import { TickerData } from "../../common/types";
import { filterDataBySymbol } from "../TickerList";

const mockData: TickerData[] = [
  {
    symbol: "test",
    price_24h: 1,
    volume_24h: 2,
    last_trade_price: 3
  },
  {
    symbol: "another symbol",
    price_24h: 21,
    volume_24h: 23,
    last_trade_price: 35
  },
];

it('changes the class when hovered', () => {
  expect(filterDataBySymbol("te", mockData)).toEqual([mockData[0]]);
  expect(filterDataBySymbol("twgwgwe", mockData)).toEqual([]);
  expect(filterDataBySymbol("another", mockData)).toEqual([mockData[1]]);
});
