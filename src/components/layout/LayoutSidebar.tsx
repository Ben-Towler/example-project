import { Box, BoxProps, StackItem, VStack } from "@chakra-ui/react";
import { FiClipboard, FiHome } from "react-icons/fi";
import { IconType } from "react-icons";
import { NavItem } from "./SidebarNavItem";

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: FiHome, path: "/" },
  { name: 'Proposals', icon: FiClipboard, path: "/proposals"  },
];

export const LayoutSidebar = (props: BoxProps) => (
  <Box
    transition="3s ease"
    bg="white"
    zIndex={5}
    borderRight="1px"
    borderRightColor="gray.200"
    w={{ base: 'full', md: 60 }}
    pos="fixed"
    h="full"
    top={0}
    pt="74px"
    {...props}
  >
    <VStack gap={1} width="100%">
      {LinkItems.map(({ name, ...rest }) => (
        <StackItem key={name} width="100%">
          <NavItem {...rest}>
            {name}
          </NavItem>
        </StackItem>
      ))}
    </VStack>
  </Box>
)
