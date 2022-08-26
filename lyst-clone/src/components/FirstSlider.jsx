import {GridItem, Grid,SliderTrack, Slider,SliderThumb, Square, Box, Flex, Spacer, Center, Text, Image, HStack } from '@chakra-ui/react'

function FirstSlider() {

  return (
    <>

      <Grid cursor={"pointer"} overflow={"scroll"} templateColumns='repeat(7, 1fr)' css={{
    '&::-webkit-scrollbar': {
      display:"none",
    },
  }}>

  <GridItem w='400px' h='300px' border={"1px"} />
  <GridItem w='400px' h='300px' border={"1px"} />
  <GridItem w='400px' h='300px' border={"1px"} />
  <GridItem w='400px' h='300px' border={"1px"} />
  <GridItem w='400px' h='300px' border={"1px"} />
 
</Grid>
  
          {/* <Image src="https://cdna.lystit.com/cms/2c09c3f3_34a7_4302_9a44_416fd3fa5d76_10988971ba.png" borderRight={"1px"} w="70%" h="100%" /> */}
        



    </>
  );
}

export default FirstSlider;