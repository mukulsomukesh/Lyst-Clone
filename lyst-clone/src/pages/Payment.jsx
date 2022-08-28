import { Radio, Text, AlertIcon, Button, Flex, Box, Input, ModalOverlay, useDisclosure, Modal, ModalHeader, ModalCloseButton, ModalContent, ModalBody, ModalFooter, } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { RiVisaFill } from 'react-icons/ri';
import React from "react"

function Payment() {


  const handelRedirect = () => {
    let path = `/`;
    window.location.replace(path);
  }

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState()

  return (
    <>
      <Box w="100%" h="600px" borderTop={"1px"} pt="40px">

        <Box w="45%" m="auto" textAlign={"left"} p="10px">     <Text fontSize={"xl"}> Payment Methods </Text> </Box>

        <Box w="45%" h="60px" m="auto" mb="20px" p="20px" border={"1px"} borderRadius="10px" borderColor={"#c2c2c2"}>
          <Flex w="100%" mb="20px"> <Radio size='md' name='1' colorScheme='orange' >
            Cash on Delivery
          </Radio> </Flex>
        </Box>

        <Box w="45%" h="fit-content" m="auto" p="20px" border={"1px"} borderRadius="10px" borderColor={"#c2c2c2"}>
          <Flex w="100%" mb="20px"> <Radio size='md' name='1' colorScheme='orange' >
            Debit or Credit Card
          </Radio> </Flex>
          <Flex w="100%"><Input variant='outline' placeholder='Card Number' mb="20px" /> </Flex>
          <Flex w="100%">
            <Input variant='outline' mr="15px" placeholder='MM/YY' />
            <Input variant='outline' ml="15px" placeholder='Security Code' />
          </Flex>
          <Flex w="100%"><Input variant='outline' placeholder='Name on Card' mt="20px" mb="20px" /> </Flex>
        </Box>

        <Box w="45%" m="auto">
          <Flex justifyContent={"flex-end"} mt="20px" w="100%"> <Button bg="#e09d00" color="white" w="180px" onClick={() => {
            setOverlay(<OverlayTwo />)
            onOpen()
          }}> Complete Order  </Button> </Flex>
        </Box>
      </Box>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Order Successfully Placed</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Thanks so much for your order! I hope you enjoy your new purchase!!</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => {
              onClose()
              handelRedirect()
            }}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


    </>
  );
}

export default Payment;