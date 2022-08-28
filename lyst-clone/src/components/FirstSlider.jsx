import { Square, Box, Flex, Text, Image, } from '@chakra-ui/react'

function FirstSlider() {

  return (
    <>

      <Flex borderTop="1px" overflow={"scroll"} css={{
        '&::-webkit-scrollbar': {
          display: "none",
        },
      }}>
        <Square h='300px' w="380px" >
          <Box w="28%" p="10px" m="auto" mr="-35px" mb="30px" transform="rotate(-90deg)" textAlign={"left"}>
            <Text fontSize='2xl' lineHeight={"25px"} fontWeight={"semibold"} overflowWrap={"break-word"} h="fit-content" w="280px"> {"BAG AN ICON"} </Text>
          </Box>
          <Image src={"https://cdna.lystit.com/cms/ea59bbea_bf2d_4441_90aa_b0a1a8ee614b_21dfec2728.png"} borderRight={"1px"} w="72%" h="100%" />
        </Square>

        <Square h='300px' w="380px" >
          <Box w="28%" p="10px" m="auto" mr="-35px" mb="30px" transform="rotate(-90deg)" textAlign={"left"}>
            <Text fontSize='2xl' lineHeight={"25px"} fontWeight={"semibold"} overflowWrap={"break-word"} h="fit-content" w="280px"> {"30 UNDER 30"} </Text>
          </Box>
          <Image src={"https://cdna.lystit.com/cms/2c09c3f3_34a7_4302_9a44_416fd3fa5d76_10988971ba.png"} borderRight={"1px"} w="72%" h="100%" />
        </Square>

        <Square h='300px' w="380px" >
          <Box w="28%" p="10px" m="auto" mr="-25px" mb="20px" transform="rotate(-90deg)" textAlign={"left"}>
            <Text fontSize='2xl' lineHeight={"25px"} fontWeight={"semibold"} overflowWrap={"break-word"} h="fit-content" w="280px"> {"TREND TO KNOW: WIGHT NIGHT"} </Text>
          </Box>
          <Image src={"https://cdna.lystit.com/cms/3c70c00c_25c6_42ef_8e12_6a5e0e5819e7_fd338f521d.png"} borderRight={"1px"} w="72%" h="100%" />
        </Square>

        <Square h='300px' w="380px" >
          <Box w="28%" p="10px" m="auto" mr="-35px" mb="30px" transform="rotate(-90deg)" textAlign={"left"}>
            <Text fontSize='2xl' lineHeight={"25px"} fontWeight={"semibold"} overflowWrap={"break-word"} h="fit-content" w="280px"> {"THIS IS FASHION"} </Text>
          </Box>
          <Image src={"https://cdna.lystit.com/cms/cd20a12e_e37b_4e36_8325_ed1a2b420728_b7596dca3b.png"} borderRight={"1px"} w="72%" h="100%" />
        </Square>
      </Flex>

      <Flex borderTop="1px" borderBottom={"1px"} overflow={"scroll"} mb="80px" css={{
        '&::-webkit-scrollbar': {
          display: "none",
        },
      }}>

        <Square h='300px' w="380px" >
          <Box w="28%" p="10px" m="auto" mr="-25px" mb="20px" transform="rotate(-90deg)" textAlign={"left"}>
            <Text fontSize='2xl' lineHeight={"25px"} fontWeight={"semibold"} overflowWrap={"break-word"} h="fit-content" w="280px"> {"Shop Boden Up to 15% Off with Code F2L9 "} </Text>
          </Box>
          <Image src={"https://cdna.lystit.com/cms/Boden_WW_mobile600x600_No_Logo_9f0a33ced2.jpg"} borderRight={"1px"} w="72%" h="100%" />
        </Square>

        <Square h='300px' w="380px" >
          <Box w="28%" p="10px" m="auto" mr="-12px" mb="10px" transform="rotate(-90deg)" textAlign={"left"}>
            <Text fontSize='2xl' lineHeight={"25px"} fontWeight={"semibold"} overflowWrap={"break-word"} h="fit-content" w="280px"> {"YOOX | Don’t miss IT - Designers sales now up to 85% OFF!"} </Text>
          </Box>
          <Image src={"https://cdna.lystit.com/cms/Top_Lyst_Aug600x600_d8c778d3df.jpg"} borderRight={"1px"} w="72%" h="100%" />
        </Square>

        <Square h='300px' w="380px" >
          <Box w="28%" p="10px" m="auto" mr="-12px" mb="10px" transform="rotate(-90deg)" textAlign={"left"}>
            <Text fontSize='2xl' lineHeight={"25px"} fontWeight={"semibold"} overflowWrap={"break-word"} h="fit-content" w="280px"> {"NET-A-PORTER | explore our roundup of the most noteworthy shoes"} </Text>
          </Box>
          <Image src={"https://cdna.lystit.com/cms/Lyst_UK_600x600_2ae1a26508.jpg"} borderRight={"1px"} w="72%" h="100%" />
        </Square>

        <Square h='300px' w="380px" >
          <Box w="28%" p="10px" m="auto" mr="-10px" mb="10px" transform="rotate(-90deg)" textAlign={"left"}>
            <Text fontSize='2xl' lineHeight={"25px"} fontWeight={"semibold"} overflowWrap={"break-word"} h="fit-content" w="280px"> {"SABRINA ZENG | Sustainable Designer Leather Goods"} </Text>
          </Box>
          <Image src={"https://cdna.lystit.com/cms/SZ_LYST_Hammock_Camel_1_bc0dd8c317.jpg"} borderRight={"1px"} w="72%" h="100%" />
        </Square>

      </Flex>


    </>
  );
}

export default FirstSlider;