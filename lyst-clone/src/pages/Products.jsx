import { Text, Select, AccordionIcon, AccordionPanel, Accordion, AccordionButton, AccordionItem, HStack, VStack, Image, Center, Button, Box, InputGroup, Stack, Input, InputLeftElement, Flex, Spacer } from '@chakra-ui/react'
import { AddIcon, LinkIcon } from '@chakra-ui/icons'
import { Grid, GridItem } from '@chakra-ui/react'
import { BsSuitHeart, BsFillCaretDownFill } from "react-icons/bs";
import { getData } from "../axios/api"
import { useState, useEffect } from "react"
import axios from "axios"
import Filters from "../components/Filters"

const SponsoredLinks = [{
    thumbnail: "https://dummyjson.com/image/i/products/40/thumbnail.jpg",
    brand: "Top Sweater",
    price: 57,
    title: "women winter clothes",
}, {
    thumbnail: "https://dummyjson.com/image/i/products/36/thumbnail.jpg",
    brand: "Professional Wear",
    price: 90,
    title: "Sleeve Shirt Womens",
}, {
    thumbnail: "https://dummyjson.com/image/i/products/19/thumbnail.jpg",
    brand: "ROREC White Rice",
    price: 46,
    title: "Skin Beauty Serum.",
}, {
    thumbnail: "https://dummyjson.com/image/i/products/37/thumbnail.jpg",
    brand: "Soft Cotton",
    price: 50,
    title: "ank Tops for Womens/Girls",
}, {
    thumbnail: "https://dummyjson.com/image/i/products/43/thumbnail.jpg",
    brand: "Ghazi Fabric",
    price: 600,
    title: "frock gold printed",
},
]


function Products() {

    const handelRedirect = () => {
        let path = `/productsdetails`;
        window.location.replace(path);
    }
    // const [productArr, setProductArr] = useState([{}]);
    // const [page, setPage] = useState(1);
    // const [order, setOrder] = useState(null);
    // // order: DESC | ASC
    // const [limit, setLimit] = useState(10);
    // useEffect(() => {
    //   handleGetCity(page);
    // }, [page, order, limit]);

    // function handleGetCity(page) {
    //   getData({
    //     page: page,
    //     limit: limit,
    //     sort: "name",
    //     order: order
    //   })
    //     .then((res) => {
    //       console.log(res);
    //       setProductArr(res.data.products);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }

    const [page, setPage] = useState(2);
    const [limit, setLimit] = useState(50);
    const [productArr, setProductArr] = useState([{}])
    const [order, setOrder] = useState("ASC");

    useEffect(() => {
        axios.get('https://dummyjson.com/products',
            {
                params: {
                    page: page,
                    limit: limit,
                    sort: "title",
                    order: order,
                }
            })
            .then((res) => {
                let arr = res.data.products
                arr = arr.filter(employee => {
                    return employee.category !== "smartphones";
                })
                arr = arr.filter(employee => {
                    return employee.category !== "laptops";
                })
                arr = arr.filter(employee => {
                    return employee.category !== "groceries";
                })
                arr = arr.filter(employee => {
                    return employee.category !== "home-decoration";
                })
                arr = arr.filter(employee => {
                    return employee.category !== "fragrances";
                })
                arr = arr.filter(employee => {
                    return employee.category !== "furniture";
                })
                arr = arr.filter(employee => {
                    return employee.category !== "skincare";
                })

                setProductArr(arr)

            })
            .catch((err) => {
                console.log(err)
            })

    }, [page, limit]);


    function SortingFun(e) {
        if ((e.target.value) == "asc") {
            const asc = [...productArr].sort((a, b) => b.price - a.price);
            setProductArr(asc)
        }
        else if (e.target.value == "desc") {
            const asc = [...productArr].sort((a, b) => a.price - b.price);
            setProductArr(asc)
        }

    }

    console.log("data", productArr)

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
            <Flex w="90%" h="fit-content" m="auto">
                {/* left side  */}
                <Filters></Filters>


                {/* products header total products and stores */}

                <VStack w="80%" >
                    <Flex w="100%" h="50px" m="auto">
                        <Text fontSize='xl' fontWeight="semibold"> 129 products, 25 stores </Text>
                        <Spacer />
                        <Select w="240px" onChange={(e) => { SortingFun(e) }} icon={<BsFillCaretDownFill />} placeholder='Sort by recommended' borderRadius="0px" border="2px" borderColor="black" >
                            <option value='asc'>Hight to Low</option>
                            <option value='desc'>Low to High</option>
                        </Select>
                    </Flex>

                    <Stack w="100%" m="auto" h="50px" bg="#f5f4f2" direction='row' spacing={4} alignItems="center" p="10px">
                        <Button leftIcon={<AddIcon />} bg="white" borderRadius="0px" h="22px" fontSize="12px" variant='solid'>
                            Shoes
                        </Button>
                    </Stack>
                    {/* right side or produsts */}
                    <Grid templateColumns='repeat(4, 1fr)' w="100%">
                        {/* products grid */}
                        {productArr.map((el) => (
                            <GridItem onClick={handelRedirect} key={el.id} w='100%' h='440px' border="1px" borderColor="#c2c2c2" p="10px">
                                <Image src={el.thumbnail} h="65%" w="90%" m="auto" alt='Dan Abramov' />
                                {/* <FontAwesomeIcon icon={faCoffee} /> */}
                                <Box w="100%" h="40px"> <Box borderRadius="80px" h="40px" w="40px" float="right" p="10px" bg="rgb(245,244,242)" >
                                    <BsSuitHeart size={22}></BsSuitHeart>
                                </Box>
                                </Box>
                                <Text fontSize='lg'> {el.brand} </Text>
                                <Text fontSize='md'> {el.title} </Text>
                                <Text fontSize='lg' as="b"> Rs. {el.price + 300} </Text>
                                <Text fontSize='md'> <LinkIcon w={3} h={3} /> Atterley </Text>
                            </GridItem>


                        ))}
                    </Grid>

                    {/* show more button */}

                    <VStack m="auto">
                        <Text> Showing 96 of 1,194 </Text>
                        <Button onClick={() => { setLimit(limit + 5) }} bg="white" borderRadius="0px" border="1px" h="45px" w="250px" fontSize="18px" variant='solid'>
                            Show more
                        </Button>
                    </VStack>

                </VStack>
            </Flex>

            <Box h="45px" w="90%" m="auto">            <Text fontSize='lg' as="b" > Sponsored links </Text>
            </Box>
            <Grid templateColumns='repeat(5, 1fr)' w="90%" m="auto">
                {/* right side or produsts */}
                {/* products grid */}
                {SponsoredLinks.map((el) => (
                    <GridItem onClick={handelRedirect} key={el.id} w='100%' h='440px' mb="40px" border="1px" borderColor="#c2c2c2" p="10px">
                        <Image src={el.thumbnail} h="65%" w="90%" m="auto" alt='Dan Abramov' />
                        {/* <FontAwesomeIcon icon={faCoffee} /> */}
                        <Box w="100%" h="40px"> <Box borderRadius="80px" h="40px" w="40px" float="right" p="10px" bg="rgb(245,244,242)" >
                            <BsSuitHeart size={22}></BsSuitHeart>
                        </Box>
                        </Box>
                        <Text fontSize='lg'> {el.brand} </Text>
                        <Text fontSize='md'> {el.title} </Text>
                        <Text fontSize='lg' as="b"> {el.price + 200} </Text>
                        <Text fontSize='md'> <LinkIcon w={3} h={3} /> Atterley </Text>
                    </GridItem>
                ))}
            </Grid>

        </>
    );
}

export default Products;