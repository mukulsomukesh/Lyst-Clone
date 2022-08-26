import {UnorderedList, ListItem, Flex, Text, Accordion, AccordionItem, Image, Box, AccordionIcon, AccordionButton, Tab, AccordionPanel, Center } from '@chakra-ui/react'
import { AiTwotoneHeart } from "react-icons/ai";

function ProductsDetails() {
    return (
        <>
            <Box h="500px" w="100%" borderTop={"1px"}>
                <Flex pl="20%" h="100%" w="100%">
                    <Center w="35%" h="100%" >
                        <Image src="https://cdna.lystit.com/cms/Yoox_Image_Refresh29_Aug_IMG_600x600_569db4b7dd.jpg" w={"300px"} h={"300px"} />
                    </Center>

                    <Box p="20px"  w="40%" h="100%">
                        <Text fontSize={"2xl"}> title here </Text>
                        <Text fontSize={"xl"}> 2,999 Rs. </Text>
                        <Box bg="#f3e8e0" p="8px" w="80%" textAlign={"center"}> <Text fontSize={"xs"} > Use code: FWRD10 for 10% off your first order! Brand exclusions apply, not valid on sale or preorder </Text> </Box>

                        <Flex gap="6px" mt="25px"> <Text as="b"> Size (EU):</Text>     <Text color="#961c1c"> Please select a size</Text> </Flex>

                        <Flex w="100%" h="30px" mt="5px" gap="5px">
                            <Box border="1px" h="30px" w="30px" fontSize={"sm"} align="center" p="4px"> XS </Box>
                            <Box border="1px" h="30px" w="30px" fontSize={"sm"} align="center" p="4px"> S </Box>
                            <Box border="1px" h="30px" w="30px" fontSize={"sm"} align="center" p="4px"> M </Box>
                            <Box border="1px" h="30px" w="30px" fontSize={"sm"} align="center" p="4px"> L </Box>
                            <Box border="1px" h="30px" w="30px" fontSize={"sm"} align="center" p="4px"> XL </Box>
                        </Flex>
                        <Box> <Text fontSize={"xs"} as="u"> See Size Chart </Text> </Box>

                        <Flex gap={"15px"} w="100%" h="60px" mt="30px">
                            <Box w="50%" bg="black" color="white" textAlign={"center"} p="15px"> Add To Bag </Box>
                            <Box w="50%" border="2px" textAlign={"center"} p="15px">  Add To Wish List </Box>
                        </Flex>

                        <Accordion allowToggle  mt="30px">
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Details
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <UnorderedList>
  <ListItem>Is Discontinued By Manufacturer ‏ : ‎ No</ListItem>
  <ListItem>Date First Available ‏ : ‎ 21 November 2016</ListItem>
  <ListItem>Best Sellers Rank: #2</ListItem>
  <ListItem>ASIN ‏ : ‎ B01MSOPR4M</ListItem>
</UnorderedList>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          FAQ
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <UnorderedList>
  <ListItem>5% Instant Discount up to INR 250 on HSBC Cashback Card </ListItem>
  <ListItem>lease check 'EMI options' above for more details</ListItem>
  <ListItem>No cost EMI available on select cards.</ListItem>
  <ListItem>Get GST invoice and save up to 28%</ListItem>

</UnorderedList>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
                    </Box>
                </Flex>
            </Box>
        </>
    );
}

export default ProductsDetails;