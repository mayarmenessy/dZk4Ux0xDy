import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";

export default function DesktopFiveRow({ prop = "من نحن", ...props }) {
  return (
    <Box {...props}>
      <Box pt="2px" w="100%">
        <Box>
          <Flex zIndex={1} justifyContent="center" alignItems="center">
            <Box h="100%" bg="red.A400" w="5px" />
            <Link href="#">
              <Text color="red.A400" letterSpacing="2.70px">
                {prop}
              </Text>
            </Link>
          </Flex>
          <Box mt="-42px" pb="1px">
            <Flex justifyContent="center" alignItems="start">
              <Box h="5px" transform="rotate(-180deg)" bg="red.A400" flex={1} w="100%" />
              <Box h="41px" ml="-5px" bg="red.A400" w="5px" />
            </Flex>
            <Box h="1px" mt="-1px" transform="rotate(-180deg)" bg="red.A400" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
