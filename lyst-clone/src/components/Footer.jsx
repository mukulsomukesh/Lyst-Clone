import {Text, Image,Center, Box, InputGroup,HStack, Stack,Input, InputLeftElement,  Flex, Spacer } from '@chakra-ui/react'
import rating from "../media/rating.jpg"
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";


function Footer(){
    return(
        <>
        <Stack direction="row" h="90vh" bg="#f5f4f2" borderTop="1px">
        
        <Box w="55%">
            <Box ml="23%" mt="8%">
        <Image src={rating}   h="120px" w="200px" alt='image' />
        <Flex  pt={"10px"} ml={"10px"} gap={"6px"} >   <GrFacebookOption size="23px" />  <BsInstagram size="23px" /> </Flex>
        
        <HStack paddingTop={"10px"} spacing='15px' ml={"10px"}>    
        <Image src='https://cdn1.cronometer.com/2021/landing/ios-icon.svg' width={"120px"} alt='Dan Abramov' />
        <Image src='https://cdn1.cronometer.com/2021/landing/android-icon.svg'   width={"120px"}  alt='Dan Abramov' />
        </HStack>
        <Text fontSize='sm' ml={"10px"} mt={"20px"}> Learn about the Lyst app for iPhone, iPad and Android. </Text>
        <Text fontSize='sm' ml={"10px"} mt={"20px"}> © 2022 Lyst </Text>
        </Box>
        </Box>

        <Box w="19%" paddingTop="4%">
        <Text fontSize='2xl'> INTERNATIONAL </Text>
        <Text fontSize='md'> Lyst - AU </Text>
        <Text fontSize='md'> Lyst - CA </Text>
        <Text fontSize='md'> Lyst - UK </Text>
        <Text fontSize='md'> Lyst - Österreich </Text>
        <Text fontSize='md'> Lyst - Schweiz </Text>
        <Text fontSize='md'> Lyst - Deutschland </Text>
        <Text fontSize='md'> Lyst - España </Text>
        <Text fontSize='md'> Lyst - France </Text>
        <Text fontSize='md'> Lyst - Italia</Text>
        <Text fontSize='md'> Lyst - 日本 </Text>
        <Text fontSize='md'> Lyst - België </Text>
        <Text fontSize='md'> Lyst - Nederland </Text>
        </Box>



        <Box   paddingTop="4%">
        <Text fontSize='2xl'> HELP AND INFO </Text>
        <Text fontSize='md'> Help center </Text>
        <Text fontSize='md'> About us </Text>
        <Text fontSize='md'> Shipping policy </Text>
        <Text fontSize='md'> Returns policy </Text>
        <Text fontSize='md'> Payments </Text>
        <Text fontSize='md'> Refund policy </Text>
        <Text fontSize='md'> Developers </Text>
        <Text fontSize='md'> Careers </Text>
        <Text fontSize='md'> Contact </Text>
        <Text fontSize='md'> Terms & conditions </Text>
        <Text fontSize='md'> Privacy & cookie policy </Text>
        <Text fontSize='md'> Intellectual property </Text>
        <Text fontSize='md'> Categories </Text>
        <Text fontSize='md'> Become a partner </Text>
        <Text fontSize='md'> Lyst Insights </Text>
        <Text fontSize='md'>Lyst News </Text>
        </Box>
        </Stack>
        </>
    );
}

export default Footer;