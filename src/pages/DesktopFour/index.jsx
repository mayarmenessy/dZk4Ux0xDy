import React from "react";
import { Helmet } from "react-helmet";
import { Image, Flex, Text, Heading, Box, Link } from "@chakra-ui/react";

export default function DesktopFourPage() {
  return (
    <>
      <Helmet>
        <title>Helda's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Box pt="6px" bg="white.A700_01" w="100%">
        <Flex justifyContent="space-between" alignItems="center" as="header">
          <Image src="images/img_dewatermark_2.png" w="12%" />
          <Flex
            w="48%"
            justifyContent="space-between"
            alignItems="center"
            gap="20px"
            flexDirection={{ base: "column", sm: "row" }}
          >
            <Flex w={{ base: "100%", sm: "23%" }} justifyContent="center">
              <Box h="44px" w="100%" position="relative">
                <Image
                  src="images/img_component_2.svg"
                  h="44px"
                  position="absolute"
                  left="0px"
                  bottom="0px"
                  right="0px"
                  top="0px"
                  justifyContent="center"
                  m="auto"
                />
                <Link href="#" w="max-content" position="absolute" top="6%" right="0px" left="0px">
                  <Text color="deep_orange.A700" letterSpacing="2.70px" m="auto">
                    الرئيسيه
                  </Text>
                </Link>
              </Box>
            </Flex>
            <Flex w={{ base: "100%", sm: "66%" }} justifyContent="space-between" gap="20px">
              <Link href="#">
                <Text letterSpacing="2.70px">من نحن</Text>
              </Link>
              <Link href="#">
                <Text letterSpacing="2.70px">الفريق </Text>
              </Link>
              <Link href="#" alignSelf="start">
                <Text letterSpacing="2.70px">للانجليزيه</Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Box h="1024px" position="relative">
          <Image
            src="images/img_image_2_1024x1323.png"
            h="1024px"
            w="100%"
            position="absolute"
            left="0px"
            bottom="0px"
            right="0px"
            top="0px"
            justifyContent="center"
            m="auto"
          />
          <Flex
            w="100%"
            flexDirection="column"
            alignItems="end"
            position="absolute"
            bottom="10%"
            right="0px"
            left="0px"
            m="auto"
          >
            <Heading size="md" as="h1" mr="183px" letterSpacing="5.40px" fontStyle="italic">
              مرحبا بكم في نيل فلورا
            </Heading>
            <Heading size="xs" mr="11px" letterSpacing="2.10px" fontStyle="italic">
              نقدم في نيل فلورا حلولًا مبتكرة لتغذيه المواشي تُساهم في خلق مستقبل أكثر خضرة وصحة
            </Heading>
            <Flex mt="86px" mr="523px" w={{ md: "36%", base: "100%" }} justifyContent="center">
              <Text size="undefined" />
            </Flex>
            <Flex mt="214px" w={{ md: "11%", base: "100%" }} justifyContent="flex-end">
              <Image src="images/img_facebook.png" w="69px" />
              <Image src="images/img_tiktok.png" borderRadius="50%" h="69px" ml="-2px" w="52%" />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
