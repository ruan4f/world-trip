import { Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Banner />
      <TravelTypes />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        //Divider
        //Title
      </Flex>
    </Flex>
  );
}
