import { Square, Box, Flex, Spacer, Center, Text, Image, HStack } from '@chakra-ui/react'
import { useState } from 'react';

function SecondSlider() {
    return (
        <>
            <Flex borderTop="1px" overflow={"scroll"} css={{
                '&::-webkit-scrollbar': {
                    display: "none",
                },
            }}>

                <Square borderRight="1px" bg="#f5f4f2" w="420px" h="370px" >
                    <Box w="87%" m="auto" h="350px">
                        <Text fontSize='70px' lineHeight={"54px"} mt="20px" fontWeight={"semibold"}> BREAKOUT BRANDS </Text>
                    </Box>
                </Square>
                <Square borderRight="1px" w="420px" h="370px">
                    <Box w="100%" pl="30px" pt="25px">
                        <Text fontSize='2xl'> PATOU </Text>
                        <Image src={"https://cdna.lystit.com/cms/My_Post_81_76121ffa01.jpg"} mt="50px" w="350px" h="260px" float={"right"} />
                    </Box>
                </Square>
                <Square borderRight="1px" w="420px" h="370px">
                    <Box w="100%" pl="30px" pt="25px">
                        <Text fontSize='2xl'> GUCCI </Text>
                        <Image src={"https://cdna.lystit.com/cms/designer_rail_gucci_eca9e74796.jpg"} mt="50px" w="350px" h="260px" float={"right"} />
                    </Box>
                </Square>

                <Square borderRight="1px" w="420px" h="370px">
                    <Box w="100%" pl="30px" pt="25px">
                        <Text fontSize='2xl'> CAINT LAURENT </Text>
                        <Image src={"https://cdna.lystit.com/cms/designer_rail_saint_laurent_2031eb80f7.jpeg"} mt="50px" w="350px" h="260px" float={"right"} />
                    </Box>
                </Square>
            </Flex>

            <Flex borderTop="1px" borderBottom={"1px"} overflow={"scroll"} css={{
                '&::-webkit-scrollbar': {
                    display: "none",
                },
            }}>
                <Square borderRight="1px" w="420px" h="370px">
                    <Box w="100%" pl="30px" pt="25px">
                        <Text fontSize='2xl'> ETON SHIRTS </Text>
                        <Image src={"https://cdna.lystit.com/cms/eton_sweden_shirt_da4fff6982.jpg"} mt="50px" w="350px" h="260px" float={"right"} />
                    </Box>
                </Square>
                <Square borderRight="1px" w="420px" h="370px">
                    <Box w="100%" pl="30px" pt="25px">
                        <Text fontSize='2xl'> GALVAN LONDON DRESSES </Text>
                        <Image src={"https://cdna.lystit.com/cms/galvan_dress_cb31d2b319.jpg"} mt="50px" w="350px" h="260px" float={"right"} />
                    </Box>
                </Square>

                <Square borderRight="1px" bg="#f5f4f2" w="420px" h="370px" >
                    <Box w="87%" m="auto" h="350px">
                        <Text fontSize='70px' lineHeight={"54px"} mt="20px" fontWeight={"semibold"}> TRENDING NOW </Text>
                    </Box>
                </Square>
                <Square borderRight="1px" w="420px" h="370px">
                    <Box w="100%" pl="30px" pt="25px">
                        <Text lineHeight={"25px"} fontSize='2xl'> ROBERTA ROLLER RABBIT NIGHTWEAR AND SLEEPWEAR </Text>
                        <Image src={"https://cdna.lystit.com/cms/roberta_roller_rabbit_480eb63ae6.jpg"} mt="40px" w="350px" h="260px" float={"right"} />
                    </Box>
                </Square>
            </Flex>         

            <Flex  borderBottom={"1px"} mb="50px" overflow={"scroll"} css={{
                '&::-webkit-scrollbar': {
                    display: "none",
                },
            }}>
                <Square borderRight="1px" w="420px" h="370px">
                    <Box w="100%" pl="30px" pt="25px">
                        <Text fontSize='2xl'> BONOBOS SHORTS </Text>
                        <Image src={"https://cdna.lystit.com/cms/bonobos_shorts_6a3e83ea91.jpg"} mt="50px" w="350px" h="260px" float={"right"} />
                    </Box>
                </Square>

                <Square borderRight="1px" bg="#f5f4f2" w="420px" h="370px" >
                    <Box w="87%" m="auto" h="350px">
                        <Text fontSize='70px' lineHeight={"54px"} mt="20px" fontWeight={"semibold"}> HOT RIGHT NOW </Text>
                    </Box>
                </Square>

                <Square borderRight="1px" w="420px" h="370px">
                    <Box w="100%" pl="30px" pt="25px">
                        <Text lineHeight={"25px"} fontSize='2xl'> BALENCIAGA BEACHWEAR AND SWIMWEAR OUTFIT </Text>
                        <Image src={"https://cdna.lystit.com/cms/balenciaga_swimwear_a06622c701.jpg"} mt="40px" w="350px" h="260px" float={"right"} />
                    </Box>
                </Square>

                <Square borderRight="1px" w="420px" h="370px">
                    <Box w="100%" pl="30px" pt="25px">
                        <Text fontSize='2xl'> PANDORA BRACELETS </Text>
                        <Image src={"https://cdna.lystit.com/cms/pandora_bracelets_1e97a9f038.jpg"} mt="50px" w="350px" h="260px" float={"right"} />
                    </Box>
                </Square>

            </Flex>                        
        </>
    );
}

export default SecondSlider;