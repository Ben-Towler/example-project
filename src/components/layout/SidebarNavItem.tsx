import { Flex, FlexProps, Icon, Link } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { Link as ReactRouterLink, useLocation } from 'react-router-dom'

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
  path: string;
}

export const NavItem = ({ icon, children, path }: NavItemProps) => {
  const { pathname } = useLocation();

  const isActive = pathname === path;

  return (
    <Link
      as={ReactRouterLink}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      to={path}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        transition="0.3s all ease"
        color={isActive ? "white" : "inherit"}
        bg={isActive ? "cyan.400" : "white"}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
};
