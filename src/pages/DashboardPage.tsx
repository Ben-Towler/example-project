import { HStack, Heading, StackItem, VStack } from "@chakra-ui/react"
import { Layout } from "../components/layout"
import { TickerList } from "../features/dashboard"
import { TickerSearch } from "../features/dashboard/components/TickerSearch"

export const DashboardPage = () => (
  <Layout>
    <VStack gap={4} width="100%">
      <StackItem width="100%">
        <HStack justifyContent="space-between">
          <Heading size="lg">Dashboard</Heading>
          <TickerSearch />
        </HStack>
      </StackItem>
      <StackItem width="100%">
        <TickerList />
      </StackItem>
    </VStack>
  </Layout>
)
