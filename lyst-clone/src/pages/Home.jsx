import { Text, Select, AccordionIcon, AccordionPanel, Accordion, AccordionButton, AccordionItem, HStack, VStack, Image, Center, Button, Box, InputGroup, Stack, Input, InputLeftElement, Flex, Spacer } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import FirstSlider from "../components/FirstSlider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SecondSlider from '../components/SecondSlider';
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'

function Home() {
    return (
        <>
            {/* navbar */}
            <Navbar></Navbar>
            {/* front image */}
            <Image src="https://cdna.lystit.com/cms/ENG_header_desktop_bddf9b3474_884ff704d3.jpg" borderTop={"1px"} borderBottom={"1px"} mb="80px" w="100%" h="82vh" />
            {/* first slider or slider with verticle text */}
            <FirstSlider></FirstSlider>
            {/* second slider or slider with normat text   */}
            <SecondSlider></SecondSlider>

            {/* singup for smart shopping */}
            <Flex w="100%" h="520px" border="1px" pl="35px" bg="#f5f4f2 ">

                <Box w="24%" h="100%" p="10px" pr="50px" pt="35px">
                    <Text fontSize='100px' fontWeight={"semibold"}> 1 </Text>
                    <Text fontSize='4xl' lineHeight={"35px"}> THE BIGGEST SELECTION </Text>
                    <Text fontSize='sm' mt="20px"> Shop over 12,000 brands and stores in one place. </Text>
                    <Text fontSize='sm' mt="20px"> Find exactly what you want with powerful search and personal recommendations. </Text>
                </Box>
                <Box w="24%" h="100%" p="10px" pr="50px" pt="35px">
                    <Text fontSize='100px' fontWeight={"semibold"}> 2 </Text>
                    <Text fontSize='4xl' lineHeight={"35px"}> THE HOTTEST PRODUCTS</Text>
                    <Text fontSize='sm' mt="20px"> See what’s new and what’s trending. </Text>
                    <Text fontSize='sm' mt="20px"> Hit the heart to receive alerts on the latest drops from your favourite brands. </Text>
                </Box>


                <Box w="24%" h="100%" p="10px" pr="50px" pt="35px">
                    <Text fontSize='100px' fontWeight={"semibold"}> 3 </Text>
                    <Text fontSize='4xl' lineHeight={"35px"}> THE BEST PRICES</Text>
                    <Text fontSize='sm' mt="20px"> Compare prices and shipping options across thousands of stores. </Text>
                    <Text fontSize='sm' mt="20px"> Lyst members are notified when an item goes on sale. </Text>
                </Box>

                <Box bg="#cafc4f" borderLeft={"1px"} w="28%" h="100%" p="40px">
                    <Text fontSize='5xl' lineHeight={"42px"} mt="100px"> SING UP FOR SMARTER SHOPPING</Text>

                    <Box as='button' h='40px' w="120px" lineHeight='1.2' px='8px' mt="20px" fontSize='14px' bg='black' color='white'>
                        Join <ArrowForwardIcon />
                    </Box>
                </Box>
                <Box bg="#cafc4f" w="10%" h="100%"> </Box>
            </Flex>

            {/* most wanted section */}
            <Flex w="100%" h="300px" >
                <Box h="fit-content" w="fit-content" mt="120px" ml="-100px" transform="rotate(-90deg)"  >
                    <Text fontSize='4xl' h="fit-content"> MOSTWANTED </Text>
                </Box>

                <Box h="100%" w="20%" ml="-80px" pr="120px" pt="50px">
                    <Text fontSize='24px' lineHeight={"23px"}> Vans Platform Sneakers </Text>
                    <Text fontSize='24px' lineHeight={"23px"} mt="30px"> Men's Long Sleeve Oxford Shirts </Text>
                </Box>

                <Box h="100%" w="20%" pr="120px" pt="80px">
                    <Text fontSize='24px' lineHeight={"23px"}> Bias-cut Dresses </Text>
                    <Text fontSize='24px' lineHeight={"23px"} mt="30px"> Rick Owens Geobasket Sneakers </Text>
                </Box>

                <Box h="100%" w="20%" pr="100px" pt="80px">
                    <Text fontSize='24px' lineHeight={"23px"}> Acne Studios Musubi Bags </Text>
                    <Text fontSize='24px' lineHeight={"23px"} mt="30px"> Nike Sb Dunk Sneakers </Text>
                </Box>

                <Box h="100%" w="20%" pr="120px" pt="80px" >
                    <Text fontSize='24px' lineHeight={"23px"}> Zebra-Print Dressesb </Text>
                    <Text fontSize='24px' lineHeight={"23px"} mt="30px"> Men's Purple Nike Air Max </Text>
                </Box>

                <Box h="100%" w="20%" pr="70px" pt="100px">
                    <Text fontSize='24px' lineHeight={"23px"}> RED SANDALS  </Text>
                    <Text fontSize='24px' lineHeight={"23px"} mt="30px"> SKINNY JOGGERS </Text>
                </Box>

            </Flex>

            {/* footer */}
            <Footer></Footer>

        </>
    );
}

export default Home;