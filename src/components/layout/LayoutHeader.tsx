import { Flex, HStack } from "@chakra-ui/react";
import { UserOverview } from "../../features/user/components/UserOverview";

export const LayoutHeader = () => (
  <HStack
    justifyContent="end"
    px={6}
    pos="fixed"
    left={0}
    top={0}
    right={0}
    zIndex={10}
    borderBottom="1px"
    borderBottomColor="gray.200"
    bg="white"
  >
    <Flex alignItems="center">
      <UserOverview />
    </Flex>
  </HStack>
)