import { useAuth } from "../../../lib/auth/AuthProvider";
import { Avatar, Box, HStack, Menu, MenuButton, MenuItem, MenuList, Text, VStack } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { toast } from "react-toastify";

export const UserOverview = () => {
  const { setIsAdmin, isAdmin } = useAuth();

  const onSwitchAccountClick = () => {
    toast.success("User type has been changed");
    setIsAdmin(!isAdmin);
  }

  return (
    <Menu>
      <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: "none" }}>
        <HStack>
          <Avatar
            size="sm"
            src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
          />
          <VStack
            display="flex"
            alignItems="flex-start"
            spacing="1px"
            ml="2"
          >
            <Text fontSize="sm">Rebecca Bloggs</Text>
            <Text fontSize="xs" color="gray.600">
              {isAdmin ? "Admin" : "User"}
            </Text>
          </VStack>
          <Box display={{ md: "flex" }}>
            <FiChevronDown />
          </Box>
        </HStack>
      </MenuButton>
      <MenuList
        bg="white"
        borderColor="gray.200"
      >
        <MenuItem onClick={onSwitchAccountClick}>Switch to {isAdmin ? "User" : "Admin"} account</MenuItem>
      </MenuList>
    </Menu>
  );
}