import {useToast, successAlert, Alert, AlertIcon, Box, Text, FormControl, ButtonGroup, IconButton, Input, FormLabel, FormHelperText, Button } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";

function SignUp() {

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

    return (
        <>
            <Box textAlign="center">
                <Text fontSize='xl' fontWeight={"bold"}> Search thousands of fashion brands and stores all in one place </Text>

                <Text fontSize='sm' lineHeight={"60px"}> We just need a few details from you first. </Text>

                <FormControl mt="10px">
                    <FormLabel fontWeight="norman">Email address</FormLabel>
                    <Input type='email' placeholder="Enter your email address" borderRadius={"0px"} />

                    <FormLabel fontWeight="normal" mt="20px">Password</FormLabel>
                    <Input type='email' placeholder="min 8 characters" borderRadius={"0px"} />
                    <Box textAlign={"left"} mt="20px">
                        <input type="checkbox" />   I would like to hear about products, services, and sales, including personalized email alerts from Lyst. You can unsubscribe at any time.
                    </Box>
                </FormControl>

                <Button w="100%"  onClick={() =>  {toast(toastMessage) 
                    handelRedirect()}}  bg='black' mt="30px" borderRadius={"0px"} h="40px" colorScheme="white"> Join Lyst </Button>
                <Text fontSize='md' lineHeight={"30px"} textAlign="center"> or </Text>

                <ButtonGroup w="100%" isAttached variant='outline' mb="10px"  onClick={() =>  {toast(toastMessage) 
                    handelRedirect()}}>
                    <IconButton bg="#3d5c98" borderRadius={"0px"} borderRight="none" icon={<GrFacebook color='white'></GrFacebook>} />
                    <Button bg="#3d5c98" color="white"   borderRadius={"0px"} borderLeft="none" w="98%">Continue with Facebook</Button>
                </ButtonGroup>

                <ButtonGroup w="100%" isAttached variant='outline' mb="10px"  onClick={() =>  {toast(toastMessage) 
                    handelRedirect()}} >
                    <IconButton borderRadius={"0px"} borderRight="none" icon={<FaApple></FaApple>} />
                    <Button borderRadius={"0px"} borderLeft="none" fontWeight={"normal"} w="98%">Continue with Apple</Button>
                </ButtonGroup>

                <ButtonGroup w="100%" isAttached variant='outline' onClick={() =>  {toast(toastMessage) 
                    handelRedirect()}} >
                    <IconButton borderRadius={"0px"} borderRight="none" icon={<FcGoogle></FcGoogle>} />
                    <Button borderRadius={"0px"} borderLeft="none" w="98%">Continue with Google</Button>
                </ButtonGroup>

                <Text fontSize={"md"} mt="40px">
                    By creating an account, you consent to Lyst’s Terms & Conditions. To learn more about how Lyst uses and protects your personal data, please read Lyst’s Privacy Policy.
                </Text>
            </Box>
        </>
    );
}

export default SignUp;