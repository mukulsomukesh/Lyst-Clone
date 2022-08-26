import {Square,Box, Flex, Spacer, Center, Text } from '@chakra-ui/react'
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"
import Join from "./pages/Join"
import ProductsDetails from './pages/ProductsDetails';
import Navbar from './components/Navbar';
import Cart from "./pages/Cart"

function App() {
  return (
<>

<Navbar></Navbar>
{/* <ProductsDetails></ProductsDetails> */}

<Cart></Cart>

{/* <Home></Home> */}

</>
  );
}

export default App;
