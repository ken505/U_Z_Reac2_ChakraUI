import { memo, VFC } from "react";
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Link
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Header: VFC = memo(() => {
  return (
    <>
      <Flex
        as="nav"
        bg="pink.200"
        color="gray.50"
        align="center"
        justifyContent="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr="8" _hover={{ cursor: "pointer" }}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            User management App
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link>Users</Link>
          </Box>
          <Link>Config</Link>
        </Flex>
        <IconButton
          aria-label="MenuButton"
          icon={<HamburgerIcon />}
          size="sm"
          variant="unstyled"
          display={{ base: "block", md: "none" }}
        />
      </Flex>
      <Drawer>
        <DrawerOverlay>
          <DrawerContent></DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});
