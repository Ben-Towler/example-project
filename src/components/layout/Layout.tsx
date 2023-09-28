import { Box, Grid, GridItem } from "@chakra-ui/react";
import { LayoutSidebar } from "./LayoutSidebar";
import { PropsWithChildren } from "react";
import { LayoutHeader } from "./LayoutHeader";

export const Layout = ({ children }: PropsWithChildren) =>  (
  <Grid
    minH="100vh"
    bg="gray.100"
    templateColumns="240px auto"
    templateRows="57px auto"
    columnGap="30px"
  >
    <GridItem colSpan={2}>
      <LayoutHeader />
    </GridItem>
    <GridItem>
      <LayoutSidebar />
    </GridItem>
    <GridItem>
      <Box
        pos="relative"
        mt={6}
        mr="30px"
        pb={10}
      >
        {children}
      </Box>
    </GridItem>
  </Grid>
);
