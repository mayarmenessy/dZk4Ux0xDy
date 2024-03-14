import React from "react";
import { Helmet } from "react-helmet";
import DesktopFiveRow from "../../components/DesktopFiveRow";
import { Image, IconButton, Flex, Heading, Box, AbsoluteCenter, Container, Link, Text } from "@chakra-ui/react";

export default function DesktopFivePage() {
  return (
    <>
      <Helmet>
        <title>Helda's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Flex
        gap="85px"
        bgGradient="linear-gradient(180deg, #889fb0,#fcfeff)"
        w="100%"
        flexDirection="column"
        alignItems="center"
      >
        <Flex w="95%" justifyContent="space-between" alignItems="center" as="header">
          <Image src="images/img_dewatermark_2.png" w="13%" />
          <Flex
            mt="19px"
            w="36%"
            justifyContent="center"
            alignItems="center"
            flexDirection={{ base: "column", sm: "row" }}
          >
            <Link href="#" alignSelf="start">
              <Text letterSpacing="2.70px">الرئيسيه</Text>
            </Link>
            <DesktopFiveRow ml="56px" flex={1} />
            <Link href="#">
              <Text letterSpacing="2.70px" ml="81px">
                الفريق{" "}
              </Text>
            </Link>
          </Flex>
        </Flex>
        <Container w="100%" maxW="1319px" px="0px" mx="auto" p={{ md: "", base: "20px" }}>
          <Flex flexDirection="column" alignItems="center">
            <Heading size="md" as="h1" letterSpacing="5.40px" fontStyle="italic">
              من نحن؟
            </Heading>
            <Box h="545px" mt="59px" w="97%" position="relative">
              <AbsoluteCenter
                bg="gray.100"
                boxShadow="xs"
                w="100%"
                justifyContent="center"
                h="100%"
                p={{ base: "20px", sm: "22px" }}
                m="auto"
                borderRadius="70px"
              >
                <Box mt="5px" mb="290px">
                  <Heading letterSpacing="3.60px" fontWeight={600}>
                    <>
                      نحن نيل فلورا، شركة مصرية رائدة في مجال تحويل نبات ورد النيل إلى أعلاف حيوانية عالية الجودة.
                      <br />
                      نقدم حلولًا صديقة للبيئة لمكافحة مشكلة انتشار نبات اليخضور المائي في نهر النيل.
                    </>
                  </Heading>
                </Box>
              </AbsoluteCenter>
              <Flex w="98%" flexDirection="column" position="absolute" bottom="2%" right="0px" left="0px" m="auto">
                <Image src="images/img_arrow.png" ml="542px" zIndex={1} w="10%" />
                <Heading as="h3" mt="-13px" letterSpacing="3.60px" fontWeight={600}>
                  تتمثل مهمتنا في دعم أهداف الأمم المتحدة للتنمية المستدامة من خلال تحويل نبات ورد النيل إلى منتجات
                  قيّمة ويساهم مشروعنا في حماية البيئة وتحسين صحة الإنسان.
                </Heading>
              </Flex>
            </Box>
            <Flex mt="99px" w={{ md: "10%", base: "100%" }} justifyContent="flex-end">
              <IconButton size="xs" icon={<Image src="images/img_facebook.png" />} aria-label="118:276-facebook_one" />
              <Image src="images/img_tiktok.png" borderRadius="50%" h="69px" w="70px" />
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
