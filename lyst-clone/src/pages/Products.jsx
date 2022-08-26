import { Text, Select, AccordionIcon, AccordionPanel, Accordion, AccordionButton, AccordionItem, HStack, VStack, Image, Center, Button, Box, InputGroup, Stack, Input, InputLeftElement, Flex, Spacer } from '@chakra-ui/react'
import { AddIcon, LinkIcon } from '@chakra-ui/icons'
import { Grid, GridItem } from '@chakra-ui/react'
import { BsSuitHeart,BsFillCaretDownFill } from "react-icons/bs";

function Products() {
    return (
        <>
            <Flex alignItems='center' bg="#f5f4f2" h="120px" m="auto" mb="10px" borderTop="1px" borderBottom="1px">
                <Box as='b' p='4' ml="50px">
                    <Text fontSize='3xl'> Results </Text>
                </Box>
                <Spacer />
                <Box p='4' mr="50px">
                    <Button leftIcon={<AddIcon />} bg="black" color="white" borderRadius="0px" variant='solid'>
                        Follow Search
                    </Button>
                </Box>
            </Flex>

            {/* Fliters  */}
            <Flex w="90%" m="auto">
                {/* left side  */}
                <VStack overflow="scroll"  scroll w="19%" h="100vh" mr="30px">
                    {/* clear filter Section */}
                    <Flex w="95%" alignItems="baseline" mt="10px" mb="10px">
                        <Box fontSize="22px" as="b"> Fliters </Box>
                        <Spacer />
                        <Box fontSize="13px" as='b'>   Clear All  </Box>
                    </Flex>

                    {/* No filters apply  */}
                    <Box w='100%' h='45px' bg='#f5f4f2' p="13px" fontSize="14px" > No Filters Apply </Box>

                    {/* select filters */}
                    <Accordion w="100%"   allowMultiple>
                        <AccordionItem borderBottom="none" pt="5px">
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' as="b">
                                        Gender
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>1</AccordionPanel>
                            <AccordionPanel>2</AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    {/* select filters */}
                    <Accordion w="100%"   allowMultiple>
                        <AccordionItem borderBottom="none" pt="5px">
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' as="b">
                                        Category
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>1</AccordionPanel>
                            <AccordionPanel>2</AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    {/* select filters */}
                    <Accordion w="100%"   allowMultiple>
                        <AccordionItem borderBottom="none" pt="5px">
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' as="b">
                                        Sale
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>1</AccordionPanel>
                            <AccordionPanel>2</AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    {/* select filters */}
                    <Accordion w="100%"   allowMultiple>
                        <AccordionItem borderBottom="none" pt="5px">
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' as="b">
                                        Price
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>1</AccordionPanel>
                            <AccordionPanel>2</AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    {/* select filters */}
                    <Accordion w="100%"   allowMultiple>
                        <AccordionItem borderBottom="none" pt="5px">
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' as="b">
                                        Shipping
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>1</AccordionPanel>
                            <AccordionPanel>2</AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    {/* select filters */}
                    <Accordion w="100%"   allowMultiple>
                        <AccordionItem borderBottom="none" pt="5px">
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' as="b">
                                        Color
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>1</AccordionPanel>
                            <AccordionPanel>2</AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    {/* select filters */}
                    <Accordion w="100%"   allowMultiple>
                        <AccordionItem borderBottom="none" pt="5px">
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' as="b">
                                        Material
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>1</AccordionPanel>
                            <AccordionPanel>2</AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    {/* select filters */}
                    <Accordion w="100%"   allowMultiple>
                        <AccordionItem borderBottom="none" pt="5px">
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' as="b">
                                        Designers
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>1</AccordionPanel>
                            <AccordionPanel>2</AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    {/* select filters */}
                    <Accordion w="100%"   allowMultiple>
                        <AccordionItem borderBottom="none" pt="5px">
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' as="b">
                                        Stores
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>1</AccordionPanel>
                            <AccordionPanel>2</AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </VStack>


                {/* products header total products and stores */}

                <VStack>
                    <Flex w="100%" h="50px" m="auto">
                        <Text fontSize='xl' fontWeight="semibold"> 129 products, 25 stores </Text>
                        <Spacer />
                        <Select w="240px" icon={<BsFillCaretDownFill />} placeholder='Sort by recommended' borderRadius="0px" border="2px" borderColor="black" />
                    </Flex>
                        j
                    <Stack w="100%" m="auto" h="50px" bg="#f5f4f2" direction='row' spacing={4} alignItems="center" p="10px">
  <Button leftIcon={<AddIcon />}  bg="white" borderRadius="0px" h="22px"  fontSize="12px" variant='solid'>
    Shoes
  </Button>
</Stack>
                    {/* right side or produsts */}
                    <Grid templateColumns='repeat(4, 1fr)' w="100%">

                        {/* products grid */}

                        <GridItem w='100%' h='440px' border="1px" borderColor="#c2c2c2" p="10px">
                            <Image src='https://cdna.lystit.com/200/250/tr/photos/farfetch/38384365/nike-grey-Legend-8-Elite-Fg-Football-Boots.jpeg' h="65%" w="80%" m="auto" alt='Dan Abramov' />
                            {/* <FontAwesomeIcon icon={faCoffee} /> */}
                            <Box w="100%" h="40px"> <Box borderRadius="80px" h="40px" w="40px" float="right" p="10px" bg="rgb(245,244,242)" >
                                <BsSuitHeart size={22}></BsSuitHeart>
                            </Box>
                            </Box>
                            <Text fontSize='lg'> Nike </Text>
                            <Text fontSize='md'> Title of this product </Text>
                            <Text fontSize='lg' as="b"> 2345 </Text>
                            <Text fontSize='md'> <LinkIcon w={3} h={3} /> Atterley </Text>
                        </GridItem>

                        <GridItem w='100%' h='440px' border="1px" borderColor="#c2c2c2" p="10px">
                            <Image src='https://cdna.lystit.com/200/250/tr/photos/farfetch/38384365/nike-grey-Legend-8-Elite-Fg-Football-Boots.jpeg' h="65%" w="80%" m="auto" alt='Dan Abramov' />
                            {/* <FontAwesomeIcon icon={faCoffee} /> */}
                            <Box w="100%" h="40px"> <Box borderRadius="80px" h="40px" w="40px" float="right" p="10px" bg="rgb(245,244,242)" >
                                <BsSuitHeart size={22}></BsSuitHeart>
                            </Box>
                            </Box>
                            <Text fontSize='lg'> Nike </Text>
                            <Text fontSize='md'> Title of this product </Text>
                            <Text fontSize='lg' as="b"> 2345 </Text>
                            <Text fontSize='md'> <LinkIcon w={3} h={3} /> Atterley </Text>
                        </GridItem>

                        <GridItem w='100%' h='440px' border="1px" borderColor="#c2c2c2" p="10px">
                            <Image src='https://cdna.lystit.com/200/250/tr/photos/farfetch/38384365/nike-grey-Legend-8-Elite-Fg-Football-Boots.jpeg' h="65%" w="80%" m="auto" alt='Dan Abramov' />
                            {/* <FontAwesomeIcon icon={faCoffee} /> */}
                            <Box w="100%" h="40px"> <Box borderRadius="80px" h="40px" w="40px" float="right" p="10px" bg="rgb(245,244,242)" >
                                <BsSuitHeart size={22}></BsSuitHeart>
                            </Box>
                            </Box>
                            <Text fontSize='lg'> Nike </Text>
                            <Text fontSize='md'> Title of this product </Text>
                            <Text fontSize='lg' as="b"> 2345 </Text>
                            <Text fontSize='md'> <LinkIcon w={3} h={3} /> Atterley </Text>
                        </GridItem>

                        <GridItem w='100%' h='440px' border="1px" borderColor="#c2c2c2" p="10px">
                            <Image src='https://cdna.lystit.com/200/250/tr/photos/farfetch/38384365/nike-grey-Legend-8-Elite-Fg-Football-Boots.jpeg' h="65%" w="80%" m="auto" alt='Dan Abramov' />
                            {/* <FontAwesomeIcon icon={faCoffee} /> */}
                            <Box w="100%" h="40px"> <Box borderRadius="80px" h="40px" w="40px" float="right" p="10px" bg="rgb(245,244,242)" >
                                <BsSuitHeart size={22}></BsSuitHeart>
                            </Box>
                            </Box>
                            <Text fontSize='lg'> Nike </Text>
                            <Text fontSize='md'> Title of this product </Text>
                            <Text fontSize='lg' as="b"> 2345 </Text>
                            <Text fontSize='md'> <LinkIcon w={3} h={3} /> Atterley </Text>
                        </GridItem>

                        <GridItem w='100%' h='440px' border="1px" borderColor="#c2c2c2" p="10px">
                            <Image src='https://cdna.lystit.com/200/250/tr/photos/farfetch/38384365/nike-grey-Legend-8-Elite-Fg-Football-Boots.jpeg' h="65%" w="80%" m="auto" alt='Dan Abramov' />
                            {/* <FontAwesomeIcon icon={faCoffee} /> */}
                            <Box w="100%" h="40px"> <Box borderRadius="80px" h="40px" w="40px" float="right" p="10px" bg="rgb(245,244,242)" >
                                <BsSuitHeart size={22}></BsSuitHeart>
                            </Box>
                            </Box>
                            <Text fontSize='lg'> Nike </Text>
                            <Text fontSize='md'> Title of this product </Text>
                            <Text fontSize='lg' as="b"> 2345 </Text>
                            <Text fontSize='md'> <LinkIcon w={3} h={3} /> Atterley </Text>
                        </GridItem>

                        <GridItem w='100%' h='440px' border="1px" borderColor="#c2c2c2" p="10px">
                            <Image src='https://cdna.lystit.com/200/250/tr/photos/farfetch/38384365/nike-grey-Legend-8-Elite-Fg-Football-Boots.jpeg' h="65%" w="80%" m="auto" alt='Dan Abramov' />
                            {/* <FontAwesomeIcon icon={faCoffee} /> */}
                            <Box w="100%" h="40px"> <Box borderRadius="80px" h="40px" w="40px" float="right" p="10px" bg="rgb(245,244,242)" >
                                <BsSuitHeart size={22}></BsSuitHeart>
                            </Box>
                            </Box>
                            <Text fontSize='lg'> Nike </Text>
                            <Text fontSize='md'> Title of this product </Text>
                            <Text fontSize='lg' as="b"> 2345 </Text>
                            <Text fontSize='md'> <LinkIcon w={3} h={3} /> Atterley </Text>
                        </GridItem>

                        <GridItem w='100%' h='440px' border="1px" borderColor="#c2c2c2" p="10px">
                            <Image src='https://cdna.lystit.com/200/250/tr/photos/farfetch/38384365/nike-grey-Legend-8-Elite-Fg-Football-Boots.jpeg' h="65%" w="80%" m="auto" alt='Dan Abramov' />
                            {/* <FontAwesomeIcon icon={faCoffee} /> */}
                            <Box w="100%" h="40px"> <Box borderRadius="80px" h="40px" w="40px" float="right" p="10px" bg="rgb(245,244,242)" >
                                <BsSuitHeart size={22}></BsSuitHeart>
                            </Box>
                            </Box>
                            <Text fontSize='lg'> Nike </Text>
                            <Text fontSize='md'> Title of this product </Text>
                            <Text fontSize='lg' as="b"> 2345 </Text>
                            <Text fontSize='md'> <LinkIcon w={3} h={3} /> Atterley </Text>
                        </GridItem>

                        <GridItem w='100%' h='440px' border="1px" borderColor="#c2c2c2" p="10px">
                            <Image src='https://cdna.lystit.com/200/250/tr/photos/farfetch/38384365/nike-grey-Legend-8-Elite-Fg-Football-Boots.jpeg' h="65%" w="80%" m="auto" alt='Dan Abramov' />
                            {/* <FontAwesomeIcon icon={faCoffee} /> */}
                            <Box w="100%" h="40px"> <Box borderRadius="80px" h="40px" w="40px" float="right" p="10px" bg="rgb(245,244,242)" >
                                <BsSuitHeart size={22}></BsSuitHeart>
                            </Box>
                            </Box>
                            <Text fontSize='lg'> Nike </Text>
                            <Text fontSize='md'> Title of this product </Text>
                            <Text fontSize='lg' as="b"> 2345 </Text>
                            <Text fontSize='md'> <LinkIcon w={3} h={3} /> Atterley </Text>
                        </GridItem>

                        <GridItem w='100%' h='440px' border="1px" borderColor="#c2c2c2" p="10px">
                            <Image src='https://cdna.lystit.com/200/250/tr/photos/farfetch/38384365/nike-grey-Legend-8-Elite-Fg-Football-Boots.jpeg' h="65%" w="80%" m="auto" alt='Dan Abramov' />
                            {/* <FontAwesomeIcon icon={faCoffee} /> */}
                            <Box w="100%" h="40px"> <Box borderRadius="80px" h="40px" w="40px" float="right" p="10px" bg="rgb(245,244,242)" >
                                <BsSuitHeart size={22}></BsSuitHeart>
                            </Box>
                            </Box>
                            <Text fontSize='lg'> Nike </Text>
                            <Text fontSize='md'> Title of this product </Text>
                            <Text fontSize='lg' as="b"> 2345 </Text>
                            <Text fontSize='md'> <LinkIcon w={3} h={3} /> Atterley </Text>
                        </GridItem>


                        <GridItem w='100%' h='440px' border="1px" borderColor="#c2c2c2" p="10px">
                            <Image src='https://cdna.lystit.com/200/250/tr/photos/farfetch/38384365/nike-grey-Legend-8-Elite-Fg-Football-Boots.jpeg' h="65%" w="80%" m="auto" alt='Dan Abramov' />
                            {/* <FontAwesomeIcon icon={faCoffee} /> */}
                            <Box w="100%" h="40px"> <Box borderRadius="80px" h="40px" w="40px" float="right" p="10px" bg="rgb(245,244,242)" >
                                <BsSuitHeart size={22}></BsSuitHeart>
                            </Box>
                            </Box>
                            <Text fontSize='lg'> Nike </Text>
                            <Text fontSize='md'> Title of this product </Text>
                            <Text fontSize='lg' as="b"> 2345 </Text>
                            <Text fontSize='md'> <LinkIcon w={3} h={3} /> Atterley </Text>
                        </GridItem>

                        <GridItem w='100%' h='440px' border="1px" borderColor="#c2c2c2" p="10px">
                            <Image src='https://cdna.lystit.com/200/250/tr/photos/farfetch/38384365/nike-grey-Legend-8-Elite-Fg-Football-Boots.jpeg' h="65%" w="80%" m="auto" alt='Dan Abramov' />
                            {/* <FontAwesomeIcon icon={faCoffee} /> */}
                            <Box w="100%" h="40px"> <Box borderRadius="80px" h="40px" w="40px" float="right" p="10px" bg="rgb(245,244,242)" >
                                <BsSuitHeart size={22}></BsSuitHeart>
                            </Box>
                            </Box>
                            <Text fontSize='lg'> Nike </Text>
                            <Text fontSize='md'> Title of this product </Text>
                            <Text fontSize='lg' as="b"> 2345 </Text>
                            <Text fontSize='md'> <LinkIcon w={3} h={3} /> Atterley </Text>
                        </GridItem>

                        <GridItem w='100%' h='440px' border="1px" borderColor="#c2c2c2" p="10px">
                            <Image src='https://cdna.lystit.com/200/250/tr/photos/farfetch/38384365/nike-grey-Legend-8-Elite-Fg-Football-Boots.jpeg' h="65%" w="80%" m="auto" alt='Dan Abramov' />
                            {/* <FontAwesomeIcon icon={faCoffee} /> */}
                            <Box w="100%" h="40px"> <Box borderRadius="80px" h="40px" w="40px" float="right" p="10px" bg="rgb(245,244,242)" >
                                <BsSuitHeart size={22}></BsSuitHeart>
                            </Box>
                            </Box>
                            <Text fontSize='lg'> Nike </Text>
                            <Text fontSize='md'> Title of this product </Text>
                            <Text fontSize='lg' as="b"> 2345 </Text>
                            <Text fontSize='md'> <LinkIcon w={3} h={3} /> Atterley </Text>
                        </GridItem>

                        <GridItem w='100%' h='440px' border="1px" borderColor="#c2c2c2" p="10px">
                            <Image src='https://cdna.lystit.com/200/250/tr/photos/farfetch/38384365/nike-grey-Legend-8-Elite-Fg-Football-Boots.jpeg' h="65%" w="80%" m="auto" alt='Dan Abramov' />
                            {/* <FontAwesomeIcon icon={faCoffee} /> */}
                            <Box w="100%" h="40px"> <Box borderRadius="80px" h="40px" w="40px" float="right" p="10px" bg="rgb(245,244,242)" >
                                <BsSuitHeart size={22}></BsSuitHeart>
                            </Box>
                            </Box>
                            <Text fontSize='lg'> Nike </Text>
                            <Text fontSize='md'> Title of this product </Text>
                            <Text fontSize='lg' as="b"> 2345 </Text>
                            <Text fontSize='md'> <LinkIcon w={3} h={3} /> Atterley </Text>
                        </GridItem>
                    </Grid>


{/* show more button */}

                    <VStack  m="auto">
                <Text> Showing 96 of 1,194 </Text>
                <Button  bg="white" borderRadius="0px" border="1px" h="45px" w="250px" fontSize="18px" variant='solid'>
    Show more
  </Button>     
            </VStack>

<Box h="45px" w="95%">            <Text fontSize='lg' as="b" > Sponsored links </Text>
</Box>
            <Grid templateColumns='repeat(4, 1fr)' w="100%">

{/* products grid */}

<GridItem w='100%' h='440px' border="1px" borderColor="#c2c2c2" p="10px">
    <Image src='https://cdna.lystit.com/200/250/tr/photos/farfetch/38384365/nike-grey-Legend-8-Elite-Fg-Football-Boots.jpeg' h="65%" w="80%" m="auto" alt='Dan Abramov' />
    {/* <FontAwesomeIcon icon={faCoffee} /> */}
    <Box w="100%" h="40px"> <Box borderRadius="80px" h="40px" w="40px" float="right" p="10px" bg="rgb(245,244,242)" >
        <BsSuitHeart size={22}></BsSuitHeart>
    </Box>
    </Box>
    <Text fontSize='lg'> Nike </Text>
    <Text fontSize='md'> Title of this product </Text>
    <Text fontSize='lg' as="b"> 2345 </Text>
    <Text fontSize='md'> <LinkIcon w={3} h={3} /> Atterley </Text>
</GridItem>

<GridItem w='100%' h='440px' border="1px" borderColor="#c2c2c2" p="10px">
    <Image src='https://cdna.lystit.com/200/250/tr/photos/farfetch/38384365/nike-grey-Legend-8-Elite-Fg-Football-Boots.jpeg' h="65%" w="80%" m="auto" alt='Dan Abramov' />
    {/* <FontAwesomeIcon icon={faCoffee} /> */}
    <Box w="100%" h="40px"> <Box borderRadius="80px" h="40px" w="40px" float="right" p="10px" bg="rgb(245,244,242)" >
        <BsSuitHeart size={22}></BsSuitHeart>
    </Box>
    </Box>
    <Text fontSize='lg'> Nike </Text>
    <Text fontSize='md'> Title of this product </Text>
    <Text fontSize='lg' as="b"> 2345 </Text>
    <Text fontSize='md'> <LinkIcon w={3} h={3} /> Atterley </Text>
</GridItem>

<GridItem w='100%' h='440px' border="1px" borderColor="#c2c2c2" p="10px">
    <Image src='https://cdna.lystit.com/200/250/tr/photos/farfetch/38384365/nike-grey-Legend-8-Elite-Fg-Football-Boots.jpeg' h="65%" w="80%" m="auto" alt='Dan Abramov' />
    {/* <FontAwesomeIcon icon={faCoffee} /> */}
    <Box w="100%" h="40px"> <Box borderRadius="80px" h="40px" w="40px" float="right" p="10px" bg="rgb(245,244,242)" >
        <BsSuitHeart size={22}></BsSuitHeart>
    </Box>
    </Box>
    <Text fontSize='lg'> Nike </Text>
    <Text fontSize='md'> Title of this product </Text>
    <Text fontSize='lg' as="b"> 2345 </Text>
    <Text fontSize='md'> <LinkIcon w={3} h={3} /> Atterley </Text>
</GridItem>

<GridItem w='100%' h='440px' border="1px" borderColor="#c2c2c2" p="10px">
    <Image src='https://cdna.lystit.com/200/250/tr/photos/farfetch/38384365/nike-grey-Legend-8-Elite-Fg-Football-Boots.jpeg' h="65%" w="80%" m="auto" alt='Dan Abramov' />
    {/* <FontAwesomeIcon icon={faCoffee} /> */}
    <Box w="100%" h="40px"> <Box borderRadius="80px" h="40px" w="40px" float="right" p="10px" bg="rgb(245,244,242)" >
        <BsSuitHeart size={22}></BsSuitHeart>
    </Box>
    </Box>
    <Text fontSize='lg'> Nike </Text>
    <Text fontSize='md'> Title of this product </Text>
    <Text fontSize='lg' as="b"> 2345 </Text>
    <Text fontSize='md'> <LinkIcon w={3} h={3} /> Atterley </Text>
</GridItem>

</Grid>

                </VStack>


            </Flex>

            

        </>
    );
}

export default Products;