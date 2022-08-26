import { Image, Box, Flex, Button, Text, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react'
import {useState} from "react"


function Cart() {

    const [qty, SetQty] = useState(1);

    return (
        <>
            <Box w="100%" borderTop={"1px"} pt="50px">
                <Flex w="70%" m="auto" h="30px" borderBottom={"1px"} borderColor="#c2c2c2" >
                    <Box w="20%" > ITEMS </Box>
                    <Box w="30%" >  </Box>
                    <Box w="12%" align="center"> PRICE </Box>
                    <Box w="20%" align="center"> QUANTITY </Box>
                    <Box w="18%" align="center"> TOTAL </Box>
                </Flex>

                <Flex w="70%" h="fit-content" m="auto" mt="30px" >
                    <Box w="20%">
                        <Image src="https://bit.ly/dan-abramov" w="150px" h="150px" />
                    </Box>
                    <Box w="30%" fontSize={"2xl"}> Handy Sheakers </Box>
                    <Box w="12%" fontSize={"xl"} align="center"> Rs. 2,999 </Box>
                    <Box w="20%" align="center">
                        <Button w="10px" borderRadius={"0px"} disabled={qty==0} onClick={()=>SetQty(qty-1)}>- </Button>
                        <Button w="10px" borderRadius={"0px"}>{qty} </Button>
                        <Button w="10px" borderRadius={"0px"}  onClick={()=>SetQty(qty+1)}> + </Button>
                    </Box>
                    <Box w="18%" fontSize={"xl"} align="center"> Rs. 2,999 </Box>
                </Flex>

                <Flex w="70%" gap="10px" m="auto" mt="30px" h="30px" borderTop={"1px"} borderColor="#c2c2c2" justifyContent={"flex-end"}>
                <Box fontSize={"2xl"} mt="50px">  Subtotal:  </Box>
                <Box fontSize={"xl"} mt="54px"> INR. 2990 </Box>
                </Flex>

<Flex w="70%" m="auto" mt="70px" h="50px" justifyContent={"flex-end"}>
<Box> <Button w="350px" h="50px" bg="#e09d00" color="white" fontSize={"xl"} as="b" _hover={{border:"2px solid #e09d00", bg:"white", color:"#e09d00"}}> Checkout Now </Button>  </Box>
</Flex>
            </Box>
        </>
    );
}

export default Cart;