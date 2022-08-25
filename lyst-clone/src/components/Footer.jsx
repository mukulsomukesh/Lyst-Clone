import {Text,Select, Image,Center, Box, InputGroup, Stack,Input, InputLeftElement,  Flex, Spacer } from '@chakra-ui/react'
import rating from "../media/rating.jpg"

function Footer(){
    return(
        <>
        <Flex h="90vh" bg="#f5f4f2">
        <Image src={rating}   h="70px" w="200px" alt='image' />
        </Flex>
        </>
    );
}

export default Footer;