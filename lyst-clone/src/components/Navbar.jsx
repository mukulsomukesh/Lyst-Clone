import { Text, Select, Image, Center, Box, InputGroup, Stack, Input, InputLeftElement, Flex, Spacer } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import logo from "../media/logo.jpg"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `join`; 
    navigate(path);
  }
  return (
    <>

      <Flex w="98%" mt="10px" mb="10px">
        <Spacer></Spacer>
        <Center>
          <Text fontSize='xs' mr="20px"> IN - US$ </Text>
          <Select placeholder='Help' size='xs' w="68px" border="none" mr="25px" />
          <Text fontSize='xs' mr="10px"> Sign in </Text>
        </Center>
        <Box as='button' onClick={routeChange}  height='24px' lineHeight='1.2' border='1px' px='8px' borderRadius='2px' fontSize='14px' bg='black' borderColor='#ccd0d5' color='white'
          _hover={{ style: 'underline' }}>
          Join
        </Box>
     
      </Flex>


      <Flex w="96%" m="auto" mb="10px">
        <Center>
        <Link to="/"> <Image src={logo} width="80%" h="35px" w="100px" cursor={"pointer"} alt='logo' /> </Link>
          <Spacer></Spacer>
          <Link to="/products">  <Text fontSize='lg' ml="20px" mt="20px" cursor={"pointer"} _hover={{textDecoration:"underline"}} > WOMEN </Text> </Link>
          <Link to="/products">  <Text fontSize='lg' ml="10px" mt="20px" cursor={"pointer"} _hover={{textDecoration:"underline"}} > MEN </Text>  </Link>
        </Center>
        <Spacer></Spacer>
        <Box w="77%" border="1px">
          <InputGroup h="45px">
            <InputLeftElement h="45px" pointerEvents='none' children={<SearchIcon color='black' />}
            />
            <Input h="45px" placeholder='SEARCH (E.G. "ACNE JEANS")' />
          </InputGroup>
        </Box>
      </Flex>
    </>
  );
}

export default Navbar;