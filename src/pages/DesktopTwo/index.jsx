import React from "react";
import { Helmet } from "react-helmet";
import { Image, Flex, Heading, Box, Container, Link, Text } from "@chakra-ui/react";

export default function DesktopTwoPage() {
  return (
    <>
      <Helmet>
        <title>Helda's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Flex gap="98px" bgGradient="linear-gradient(180deg, #889fb0,#fcfeff)" w="100%" flexDirection="column">
        <Flex w="96%" justifyContent="space-between" alignItems="center" as="header">
          <Image src="images/img_dewatermark_2.png" w="13%" />
          <Flex
            alignSelf="end"
            w="40%"
            justifyContent="space-between"
            alignItems="start"
            gap="20px"
            flexDirection={{ base: "column", sm: "row" }}
          >
            <Link href="#">
              <Text letterSpacing="2.70px" mt="2px">
                Home{" "}
              </Text>
            </Link>
            <Flex w={{ base: "100%", sm: "65%" }} justifyContent="space-between" alignItems="start" gap="20px">
              <Flex w="59%" justifyContent="center">
                <Box h="45px" w="100%" position="relative">
                  <Image
                    src="images/img_component_2.svg"
                    h="45px"
                    position="absolute"
                    left="0px"
                    bottom="0px"
                    right="0px"
                    top="0px"
                    justifyContent="center"
                    m="auto"
                  />
                  <Link href="#" w="max-content" position="absolute" top="6%" right="0px" left="0px">
                    <Text color="red.A400" letterSpacing="2.70px" m="auto">
                      About Us
                    </Text>
                  </Link>
                </Box>
              </Flex>
              <Link href="#">
                <Text letterSpacing="2.70px" mt="2px">
                  Team
                </Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Container maxW="1306px" w="100%" px="0px" mx="auto" p={{ md: "", base: "20px" }}>
          <Flex flexDirection="column" alignItems="center">
            <Heading size="md" as="h1" letterSpacing="5.40px" fontStyle="italic">
              Who we are ?
            </Heading>
            <Box mt="46px" bg="gray.100" boxShadow="xs" alignSelf="stretch" py="13px" borderRadius="70px">
              <Box mt="15px">
                <Flex flexDirection="column">
                  <Flex w={{ md: "97%", base: "100%" }} justifyContent="center">
                    <Flex w="100%" flexDirection="column" alignItems="center">
                      <Heading letterSpacing="3.60px" fontWeight={600}>
                        We lead the way in transforming water hyacinth into premium animal feed, providing an
                        eco-friendly solution to address the issue of Nile overgrowth.
                      </Heading>
                      <Image src="images/img_arrow.png" mt="-28px" w="6%" />
                    </Flex>
                  </Flex>
                  <Heading as="h3" letterSpacing="3.60px" fontWeight={600}>
                    Our mission is rooted in sustainability, supporting the United Nations&#39; Sustainable Development
                    Goals (SDGs) to create a positive impact on the environment.
                  </Heading>
                </Flex>
              </Box>
            </Box>
            <Flex mt="99px" gap="20px" w={{ md: "12%", base: "100%" }} justifyContent="flex-end">
              <Image src="images/img_facebook.png" w="48%" />
              <Image src="images/img_tiktok.png" borderRadius="50%" h="69px" w="70px" />
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
