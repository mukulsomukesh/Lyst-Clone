import {Box, Text,useToast, FormControl, ButtonGroup, IconButton, Input, FormLabel, FormHelperText, Button } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";


function SignIn(){

    const toast = useToast()
    const toastMessage ={
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      }

      const handelRedirect = () => {
        setTimeout(function() { 
            let path = `/products`;
            window.location.replace(path);
      
        }, 2200);
    }

    return(
        <>
  <Box textAlign="center">
                <Text fontSize='xl' fontWeight={"bold"}> Sign in </Text>
                <FormControl mt="10px">
                    <FormLabel fontWeight="norman">Email address</FormLabel>
                    <Input type='email' placeholder="Enter your email address" borderRadius={"0px"} />

                </FormControl>

                <Button w="100%" bg='black' mt="30px" borderRadius={"0px"} h="40px" colorScheme="white" onClick={() =>  {toast(toastMessage) 
                    handelRedirect()}}> Sign in </Button>
                <Text fontSize='md' lineHeight={"30px"} textAlign="center"> or </Text>

                <ButtonGroup w="100%" isAttached variant='outline' mb="10px" onClick={() =>  {toast(toastMessage) 
                    handelRedirect()}}>
                    <IconButton bg="#3d5c98" borderRadius={"0px"} borderRight="none" icon={<GrFacebook color='white'></GrFacebook>} />
                    <Button bg="#3d5c98" color="white" borderRadius={"0px"} borderLeft="none" w="98%">Continue with Facebook</Button>
                </ButtonGroup>

                <ButtonGroup w="100%" isAttached variant='outline' mb="10px" onClick={() =>  {toast(toastMessage) 
                    handelRedirect()}}>
                    <IconButton borderRadius={"0px"} borderRight="none" icon={<FaApple></FaApple>} />
                    <Button borderRadius={"0px"} borderLeft="none" fontWeight={"normal"} w="98%">Continue with Apple</Button>
                </ButtonGroup>

                <ButtonGroup w="100%" isAttached variant='outline' onClick={() =>  {toast(toastMessage) 
                    handelRedirect()}}>
                    <IconButton borderRadius={"0px"} borderRight="none" icon={<FcGoogle></FcGoogle>} />
                    <Button borderRadius={"0px"} borderLeft="none" w="98%">Continue with Google</Button>
                </ButtonGroup>
            </Box>
        </>
    );
}

export default SignIn;