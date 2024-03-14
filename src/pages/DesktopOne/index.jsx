import React from "react";
import { Helmet } from "react-helmet";
import DesktopOneRow from "../../components/DesktopOneRow";
import { Image, Flex, Button, Heading, Box, Link, Text } from "@chakra-ui/react";

export default function DesktopOnePage() {
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
            mt="17px"
            w="48%"
            justifyContent="space-between"
            alignItems="center"
            gap="20px"
            flexDirection={{ base: "column", sm: "row" }}
          >
            <DesktopOneRow w={{ base: "100%", sm: "24%" }} display="flex" justifyContent="center" alignItems="center" />
            <Flex justifyContent="center" flexDirection={{ base: "column", sm: "row" }}>
              <Link href="#" alignSelf="start">
                <Text letterSpacing="2.70px" mb="2px">
                  About Us{" "}
                </Text>
              </Link>
              <Link href="#" alignSelf="start">
                <Text letterSpacing="2.70px" ml="50px">
                  Team
                </Text>
              </Link>
              <Link href="#" alignSelf="end">
                <Text letterSpacing="2.70px">للعربيه</Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Box h="1024px" position="relative">
          <Image
            src="images/img_image_2.png"
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
          <Flex w="84%" flexDirection="column" position="absolute" bottom="10%" right="0px" m="auto">
            <Heading size="md" as="h1" ml="76px" letterSpacing="5.40px" fontStyle="italic">
              Welcome to Nile Flora{" "}
            </Heading>
            <Heading size="xs" mt="3px" letterSpacing="2.10px" fontStyle="italic">
              Our feed, your solution to a greener, healthier tomorrow!&quot;
            </Heading>
            <Flex mt="137px" ml="309px" w={{ md: "36%", base: "100%" }}>
              <Button
                letterSpacing="2.45px"
                fontFamily="Inika"
                fontWeight={700}
                borderColor="gray.900"
                borderWidth="2px"
                borderStyle="solid"
                w="100%"
                borderRadius="25px"
                px={{ base: "20px", sm: "" }}
              >
                know More{" "}
              </Button>
            </Flex>
            <Flex
              mt="225px"
              ml="967px"
              gap="4px"
              justifyContent="flex-end"
              flexDirection={{ md: "row", base: "column" }}
            >
              <Image src="images/img_facebook.png" w="69px" />
              <Image src="images/img_tiktok.png" borderRadius="50%" h="69px" w="52%" />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
