import React from "react";
import { Helmet } from "react-helmet";
import DesktopThreeRowaboutus from "../../components/DesktopThreeRowaboutus";
import { Image, Flex, Heading, Container, Link, Text } from "@chakra-ui/react";

export default function DesktopThreePage() {
  return (
    <>
      <Helmet>
        <title>Helda's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Flex pt="3px" gap="162px" bgGradient="linear-gradient(180deg, #889fb0,#fcfeff)" w="100%" flexDirection="column">
        <Flex w="94%" justifyContent="space-between" alignItems="center" as="header">
          <Image src="images/img_dewatermark_2.png" mb="3px" w="13%" />
          <Flex
            mt="43px"
            w="41%"
            justifyContent="space-between"
            alignItems="start"
            gap="20px"
            flexDirection={{ base: "column", sm: "row" }}
          >
            <Link href="#">
              <Text letterSpacing="2.70px" mt="2px">
                Home
              </Text>
            </Link>
            <DesktopThreeRowaboutus
              gap="57px"
              display="flex"
              w={{ base: "100%", sm: "66%" }}
              justifyContent="center"
              alignItems="start"
            />
          </Flex>
        </Flex>
        <Container
          display="flex"
          flexDirection="column"
          maxW="1327px"
          w="100%"
          px="0px"
          mx="auto"
          p={{ md: "", base: "20px" }}
        >
          <Flex mt="162px" w={{ md: "97%", base: "100%" }} justifyContent="center">
            <Flex w="100%" flexDirection="column" alignItems="center">
              <Flex
                gap="8px"
                w={{ md: "32%", base: "100%" }}
                justifyContent="center"
                alignItems="start"
                flexDirection={{ base: "column", sm: "row" }}
              >
                <Heading size="md" as="h1" letterSpacing="5.40px" fontStyle="italic">
                  Our Team
                </Heading>
                <Image src="images/img_onboarding.png" w={{ base: "100%", sm: "19%" }} />
              </Flex>
              <Flex
                mt="79px"
                alignSelf="stretch"
                justifyContent="center"
                alignItems="start"
                flexDirection={{ md: "row", base: "column" }}
              >
                <Flex gap="44px" w={{ md: "34%", base: "100%" }} flexDirection="column">
                  <Image src="images/img_ellipse_13.png" borderRadius="50%" h="254px" w="85%" />
                  <Heading
                    ml="8px"
                    letterSpacing="3.60px"
                    fontStyle="italic"
                    sx={{ "text-shadow": "0px 4px  4px #0000003f" }}
                  >
                    Mennaallah Sabry{" "}
                  </Heading>
                </Flex>
                <Flex ml="199px" gap="41px" flex={1} flexDirection="column" alignItems="start">
                  <Image src="images/img_ellipse_14.png" borderRadius="50%" h="272px" ml="9px" w="86%" />
                  <Heading
                    as="h3"
                    letterSpacing="3.60px"
                    fontStyle="italic"
                    sx={{ "text-shadow": "0px 4px  4px #0000003f" }}
                  >
                    Reham Haroun{" "}
                  </Heading>
                </Flex>
                <Flex ml="174px" gap="59px" w={{ md: "29%", base: "100%" }} flexDirection="column">
                  <Image src="images/img_ellipse_17.png" borderRadius="50%" h="254px" />
                  <Heading
                    as="h4"
                    letterSpacing="3.60px"
                    fontStyle="italic"
                    sx={{ "text-shadow": "0px 4px  4px #0000003f" }}
                  >
                    Rana Reda{" "}
                  </Heading>
                </Flex>
              </Flex>
              <Flex
                mt="71px"
                alignSelf="stretch"
                justifyContent="space-between"
                alignItems="center"
                gap="20px"
                flexDirection={{ md: "row", base: "column" }}
              >
                <Flex w={{ md: "65%", base: "100%" }} justifyContent="center">
                  <Flex gap="34px" w="100%" flexDirection="column">
                    <Flex
                      w={{ md: "94%", base: "100%" }}
                      justifyContent="space-between"
                      alignItems="center"
                      gap="20px"
                      flexDirection={{ base: "column", sm: "row" }}
                    >
                      <Image src="images/img_ellipse_16.png" borderRadius="50%" h="258px" w="258px" />
                      <Image src="images/img_ellipse_18.png" w={{ base: "100%", sm: "34%" }} borderRadius="50%" />
                    </Flex>
                    <Flex justifyContent="space-between" gap="20px">
                      <Heading
                        as="h5"
                        letterSpacing="3.60px"
                        fontStyle="italic"
                        sx={{ "text-shadow": "0px 4px  4px #0000003f" }}
                      >
                        Mayar Hassan{" "}
                      </Heading>
                      <Heading
                        as="h6"
                        letterSpacing="3.60px"
                        fontStyle="italic"
                        sx={{ "text-shadow": "0px 4px  4px #0000003f" }}
                      >
                        Helda Mounir
                      </Heading>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex gap="43px" w={{ md: "21%", base: "100%" }} flexDirection="column">
                  <Image src="images/img_ellipse_15.png" borderRadius="50%" h="258px" w="258px" />
                  <Heading
                    as="h1"
                    letterSpacing="3.60px"
                    fontStyle="italic"
                    sx={{ "text-shadow": "0px 4px  4px #0000003f" }}
                  >
                    Aya Ahmed
                  </Heading>
                </Flex>
              </Flex>
              <Flex mt="180px" w={{ md: "11%", base: "100%" }} justifyContent="flex-end">
                <Image src="images/img_facebook.png" zIndex={1} w="48%" />
                <Image src="images/img_tiktok_102x71.png" w="52%" borderRadius="35px" />
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
