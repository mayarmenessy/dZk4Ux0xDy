import React from "react";
import { Box, Link, Text, Flex } from "@chakra-ui/react";

export default function DesktopOneRow({ home = "Home", ...props }) {
  return (
    <Box {...props}>
      <Flex w="100%" justifyContent="center" alignItems="center">
        <Box h="100%" zIndex={1} bg="red.A400" w="5px" />
        <Flex ml="-2px" flex={1} flexDirection="column" alignItems="end">
          <Box h="5px" mr="2px" zIndex={1} transform="rotate(-180deg)" bg="red.600" alignSelf="stretch" />
          <Flex mt="-5px" gap="23px" w={{ md: "82%", base: "100%" }} justifyContent="flex-end" alignItems="center">
            <Link href="#" alignSelf="end">
              <Text color="red.A400" letterSpacing="2.70px">
                {home}
              </Text>
            </Link>
            <Box h="41px" bg="red.A400" w="5px" />
          </Flex>
          <Box h="5px" mt="-3px" mr="2px" transform="rotate(-180deg)" bg="red.600" alignSelf="stretch" />
        </Flex>
      </Flex>
    </Box>
  );
}
