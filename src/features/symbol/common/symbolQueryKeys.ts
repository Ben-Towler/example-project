export const symbolQueryKeys = {
  all: ["symbols"] as const,
  detail: (symbol: string) => [...symbolQueryKeys.all, symbol] as const,
}
