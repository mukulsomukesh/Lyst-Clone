import {Square,Box, Flex, Spacer, Center, Text } from '@chakra-ui/react'
import './design.css';
import './slider.js'

function FirstSlider(){

    return(
        <>
        
        <Flex color='white'>
        <Square bg='blue.500' size='150px'>
    <Text>Box 1</Text>
  </Square><Square bg='red.500' size='150px'>
    <Text>Box 2</Text>
  </Square> <Square bg='blue.500' size='150px'>
    <Text>Box 1</Text>
  </Square><Square bg='red.500' size='150px'>
    <Text>Box 2</Text>
  </Square> <Square bg='blue.500' size='150px'>
    <Text>Box 1</Text>
  </Square><Square bg='red.500' size='150px'>
    <Text>Box 2</Text>
  </Square> <Square bg='blue.500' size='150px'>
    <Text>Box 1</Text>
  </Square><Square bg='red.500' size='150px'>
    <Text>Box 2</Text>
  </Square> <Square bg='blue.500' size='150px'>
    <Text>Box 1</Text>
  </Square><Square bg='red.500' size='150px'>
    <Text>Box 2</Text>
  </Square> <Square bg='blue.500' size='150px'>
    <Text>Box 1</Text>
  </Square><Square bg='red.500' size='150px'>
    <Text>Box 2</Text>
  </Square>
</Flex>
        </>
    );
}

export default FirstSlider;