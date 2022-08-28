import {Select,Text, Button, Flex, Box , Input } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

function Checkout(){
    const handelRedirect = () =>{ 
        let path = `/payment`; 
        window.location.replace(path);
      }
    return(
        <>
            <Box w="100%" h="600px" borderTop={"1px"} pt="50px">

<Box w="45%" m="auto" textAlign={"left"}>     <Text fontSize={"xl"}> Delivery Address </Text> </Box>

                <Box w="45%" h="fit-content" m="auto" p="30px" border={"1px"} borderRadius="10px" borderColor={"#c2c2c2"}>
                <Flex w="100%"><Input variant='outline' placeholder='Email' mb="20px" /> </Flex>
                <Flex w="100%">
                <Input variant='outline' mr="15px" placeholder='First Name' />
                <Input variant='outline' ml="15px" placeholder='Last Name' />
                </Flex>
                <Flex w="100%"><Input variant='outline' placeholder='Address' mt="20px"  mb="20px" /> </Flex>
                <Flex w="100%" mb="20px">
                <Input variant='outline' mr="15px"  placeholder='Address 2 (optional)' />
                <Input variant='outline' ml="15px"  placeholder='Postal Code' />
                </Flex>
                <Flex w="100%" mb="20px">
                <Input variant='outline' mr="15px"  placeholder='City' />
                <Input variant='outline' ml="15px"  placeholder='Region (Optional)' />
                </Flex>
                <Flex  w="100%">
                <Input variant='outline' mr="20px" placeholder='Phone' />
                <Select w="200px" placeholder='Select Country'>
  <option value='option1'>America</option>
  <option value='option2'>Brazil</option>
  <option value='option2'>China</option>
  <option value='option3'>India</option>
</Select>
</Flex>

<Flex justifyContent={"flex-end"}  mt="30px" w="100%"> <Button onClick={handelRedirect} bg="#e09d00" color="white" w="140px"> Continue  </Button> </Flex>
                </Box>

            </Box>
        </>
    );
}

export default Checkout;