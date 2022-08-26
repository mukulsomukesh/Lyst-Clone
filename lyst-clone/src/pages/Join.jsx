import { Flex, Text, Button, Tabs, Box, TabList, TabPanels, Tab, TabPanel, Center } from '@chakra-ui/react'
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { BsBookmarkFill, BsHeartFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";

function Join() {

    return (
        <>

            <Flex h="fit-content" w="55%" m="auto" bg="#bca0f5">
                {/* singup of signin tab */}
                <Box h="100%" w="50%" p="10px" bg="white" pr="20px">
                    <Tabs variant='unstyled'>
                        <TabList>
                            <Tab w="48%" h="35px" border={"1px"} borderColor="#c2c2c2" _selected={{ color: 'white', bg: 'black' }}>New to Lyst?</Tab>
                            <Tab w="48%" h="35px" border={"1px"} borderColor="#c2c2c2" _selected={{ color: 'white', bg: 'black' }}>Already a member</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <SignUp />
                            </TabPanel>
                            <TabPanel>
                                <SignIn />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>

                </Box>

                <Box h="100%" w="50%"  >

                    <Box p="20px" bg="#f5f4f2" w="85%" m="auto" mt="30%" h="200px">
                        <Text fontSize={"lg"} as="b"> As a Lyst member you can… </Text>
                        <Flex mt="10px" align={"center"} gap="20px">  <BsBookmarkFill />  <Text>  Save your searches </Text> </Flex>
                        <Flex mt="10px" align={"center"} gap="20px">  <BsHeartFill />  <Text>  Create a wishlist </Text> </Flex>
                        <Flex mt="10px" align={"center"} gap="20px">  <FaBell />  <Text>  Get alerts on your items </Text> </Flex>
                    </Box>
                </Box>

            </Flex>
        </>
    );
}

export default Join;