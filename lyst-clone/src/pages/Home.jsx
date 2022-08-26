import { Text, Select, AccordionIcon, AccordionPanel, Accordion, AccordionButton, AccordionItem, HStack, VStack, Image, Center, Button, Box, InputGroup, Stack, Input, InputLeftElement, Flex, Spacer } from '@chakra-ui/react'

import FirstSlider from "../components/FirstSlider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../pages/Products"

function Home(){
    return (
        <>
        <Navbar></Navbar>        
    
    <Image src="https://cdna.lystit.com/cms/ENG_header_desktop_bddf9b3474_884ff704d3.jpg" borderTop={"1px"} w="100%" h="82vh" />
<FirstSlider></FirstSlider>

<Footer></Footer>

        </>
    );
}

export default Home;