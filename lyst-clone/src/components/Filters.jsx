import {Radio,  RadioGroup, Select, AccordionIcon, AccordionPanel, Accordion, AccordionButton, AccordionItem, HStack, VStack, Image, Center, Button, Box, InputGroup, Stack, Input, InputLeftElement, Flex, Spacer } from '@chakra-ui/react'
import { useState, useEffect } from "react"


function Filters(){
    const [value, setValue] = useState('1')

    return (
        <>
                        <VStack overflow="scroll" w="19%" h="100vh" mr="30px">
                    {/* clear filter Section */}
                    <Flex w="95%" alignItems="baseline" mt="10px" mb="10px">
                        <Box fontSize="22px" as="b"> Fliters </Box>
                        <Spacer />
                        <Box fontSize="13px" as='b'>   Clear All  </Box>
                    </Flex>

                    {/* No filters apply  */}
                    <Box w='100%' h='45px' bg='#f5f4f2' p="13px" fontSize="14px" > No Filters Apply </Box>

                    {/* select filters */}
                    <Accordion w="100%" allowMultiple>
                        <AccordionItem borderBottom="none" pt="5px">
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' as="b">
                                        Gender
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel >
                            <RadioGroup onChange={setValue} value={value}>
      <Stack direction='column'>
        <Radio value='1'>Men's</Radio>
        <Radio value='2'>Women's</Radio>
      </Stack>
    </RadioGroup>
    </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    {/* select filters */}
                    <Accordion w="100%" allowMultiple>
                        <AccordionItem borderBottom="none" pt="5px">
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' as="b">
                                        Category
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel >
                            <RadioGroup onChange={setValue} value={value}>
      <Stack direction='column'>
        <Radio value='1'>Bags</Radio>
        <Radio value='1'>Clothes</Radio>
      </Stack>
    </RadioGroup>
    </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    {/* select filters */}
                    <Accordion w="100%" allowMultiple>
                        <AccordionItem borderBottom="none" pt="5px">
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' as="b">
                                        Sale
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                           
                           
                            <AccordionPanel >
                            <RadioGroup onChange={setValue} value={value}>
      <Stack direction='column'>
        <Radio value='1'>On Sale</Radio>
        <Radio value='1'>20% off or more</Radio>
      </Stack>
    </RadioGroup>
    </AccordionPanel>
                           
                        </AccordionItem>
                    </Accordion>

                    {/* select filters */}
                    <Accordion w="100%" allowMultiple>
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
                    <Accordion w="100%" allowMultiple>
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
                    <Accordion w="100%" allowMultiple>
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
                    <Accordion w="100%" allowMultiple>
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
                    <Accordion w="100%" allowMultiple>
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
                    <Accordion w="100%" allowMultiple>
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

        </>
    );
}

export default Filters 