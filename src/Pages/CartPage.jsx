import React from "react";
import {  AiOutlineArrowLeft,AiOutlinePlusCircle } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import "../Componets/Cart/CartPage.css";
import { Link ,Navigate, useNavigate} from "react-router-dom";
import {
  Box, Divider, Flex, Image, Text, Spacer, Button, Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import CartItem from '../Componets/Cart/CartItem'
import CartPrice from "../Componets/Cart/CartPrice"
import CartNavbar from "../Componets/Cart/CartNavbar";
import WishlistTemplate from "../Componets/Cart/WishlistTempelate";
import LoadingSpinner from "../Componets/Cart/loading";


export default function CartPage() {
  const [loading, setLoading] = useState(false);

  const [item, setItem] = useState([]);

   function handleDelete(id) {
    fetch(`https://easy-pink-bull-shoe.cyclic.app/Cart/${id}`, {
        method: "DELETE",
        body: JSON.stringify(item),
        headers: { 'Content-Type': "application/json" }
    }).then(res=>cartdata())
 
  }

  function handleupdate(id,quantity) 
  {
    console.log(quantity)
    let q=parseInt(quantity)
    q+=1;
    fetch(`https://easy-pink-bull-shoe.cyclic.app/Cart/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          "quntity": q
        }),
        headers: { 'Content-Type': "application/json" }
    }).then(res=>cartdata())
 
  }

  function handleupdateminus(id,quantity) 
  {
    console.log(quantity)
    let q=parseInt(quantity)
    if(q>0)
    {
      q-=1;
    }
    
    fetch(`https://easy-pink-bull-shoe.cyclic.app/Cart/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          "quntity": q
        }),
        headers: { 'Content-Type': "application/json" }
    }).then(res=>cartdata())
 
  }



  const cartdata = async () => {
    setLoading(true);
    const res = await fetch('https://easy-pink-bull-shoe.cyclic.app/Cart')
    const data = await res.json();
    // console.log(data)
    setLoading(false);
    setItem(data);
  }
  useEffect(() => {
    cartdata()

  }, [])


  let price = 0;
  const total = () => {
    item.map(el => {
      price += parseInt(el.mPrice)*(parseInt(el.quntity)+1);

    })
    return price;
  }

  let discount = 0;
  let actualPrice = 0;
  const actual = () => {
    item.map(el => {
      actualPrice += parseInt(el.price)*(parseInt(el.quntity)+1);
    })
    discount = (actualPrice * 60) / 100;
    return actualPrice;
  }

  const toast = useToast()
  const position ='top'
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const [apply, setApply] = useState(false);

  // return main cart page  jsx


  const navigate=useNavigate();
  return (
    <>
      <Box w="100%" bg="rgb(251,249,247)">
        <CartNavbar />

        {/* Content Box */}
        {loading ? < LoadingSpinner />:
        <Box className='mainContent' display="flex" flexDirection='row' w="87%" m="auto" gap={10} pb='50px'>
          {/* item box */}
          <Box w="60%" >
            <Box display="flex" flexDirection="column" gap={30}>

              <Box>
                <Text
                  // fontFamily="rajdhani-medium"
                  fontWeight="400"
                  fontSize="20px"
                  lineHeight="30px"
                  letterSpacing="-.02em"
                  color="#000042"
                >
                  Cart ({item.length} items)
                </Text>
              </Box>
              {/* item-product-card-wrapper */}
              {/* yha pe data fetch kr ke map se render krna hai mere ko --> done*/}
              <CartItem item={item} refresh={handleDelete} update={handleupdate} updateminus={handleupdateminus} />

              <Box >
                <Text
                  fontWeight='400'
                  fontSize='22px'
                  lineHeight='30px'
                  letterSpacing='-.02em'
                  color='#000042'
                >
                  Items from your wishlist</Text>
              </Box>

              <div class="scrollmenu" >
                <WishlistTemplate />
              </div>

            </Box>

          </Box>


          {/* price box */}
          <Box w="30%" >
            <Box display="flex" flexDirection="column" gap={30}>
              <Box>
                <Text
                  fontWeight="400"
                  fontSize="20px"
                  lineHeight="30px"
                  letterSpacing="-.02em"
                  color="#000042">
                  Bill Details
                </Text>
              </Box>

              <Box display="flex" gap={6} alignItems="center" bg="#fff" borderRadius='12px' p='6' boxShadow='0 1px 4px rgb(0 0 0 / 10%)'>
                <Box display='flex' flexDirection='column' w='100%'>
                  {/* total price  done */}
                  <CartPrice priceTitle={"Total VIP Price"} price={'₹' + total()} />
                  {/* tax price done */}
                  <CartPrice priceTitle={"Tax"} price={'₹' + 269.82} />

                  {/* Convenience price done*/}
                  <CartPrice priceTitle={"Convenience Fees"} price={'Free'} />
                  {/* total payable amount done*/}
                  {/* some extra css thats y i call in a box */}
                  <Box fontWeight='700'
                    fontSize='16px' lineHeight='24px'><CartPrice priceTitle={"Total payable"} price={apply ? '₹' + (actual() - discount) : '₹' + actual()} />
                    {console.log(apply)}
                  </Box>

                </Box>
              </Box>

              <Box class="gold-membership-wrapper " cursor='pointer'>
                <Box display='flex' flexDirection='column' gap={2} bg='rgb(255, 240, 187)'
                  p='5' border='1px solid #e0c67c' borderRadius='12px' color='#000042' etterSpacing='-.02em'
                  boxShadow='0 1px 4px rgb(0 0 0 / 10%)' ref={btnRef} colorScheme='teal' onClick={onOpen}>

                  {/* p='16' bg= '#f7f1de' border='1px solid #e0c67c' borderRadius='12px' color='#000042' etterSpacing='-.02em' */}
                  <Box>
                    <Text
                      fontStyle='normal'
                      fontWeight='700'
                      fontSize='14px'
                      lineHeight='20px'
                      letterSpacing='-.02em'
                      border='1px solid #ccc'
                      w='max-content'
                      p={2}
                      borderRadius={12}
                      >
                      Check Available Cuopon
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontStyle='normal'
                      fontWeight='700'
                      fontSize='14px'
                      lineHeight='20px'
                      color='#333368'>
                      Extra 60% Off. Use coupon: PARTY12
                    </Text>
                  </Box>

                </Box>

              </Box>
              {/*for coupon i use drawer here  */}
              <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size='sm'

              >
                <DrawerOverlay />
                <DrawerContent bg="rgb(251,249,247)">
                  
                  <DrawerCloseButton />
                  
                  <DrawerHeader textAlign='center' m='0'>Apply Coupon</DrawerHeader>
                  
                  <Divider borderRadius='2px' mb='20px'></Divider>

                  <DrawerBody>
                    <Flex direction='column' gap={12} p='24px' alignItems='center' borderRadius='12px' boxShadow='0 1px 3px rgb(16 24 40 / 10%), 0 1px 2px rgb(16 24 40 / 6%)' bg='#fff'
                      border={apply ? "3px solid  #0fbd95" : " none"}
                    >
                      <Box>
                        <Box>
                          <Flex direction='row' gap={5} alignItems='center' >
                            <Box fontSize={16} fontWeight='700'>12TH ANNIVERSARY SPECIAL - EXTRA 60% OFF</Box>
                            <Box ><Button color='#0fbd95'  onClick={() => {
                              if (apply === false) {
                                setApply(true);
                                  toast({
                                    title: `Coupon Applied`,
                                    position: position,
                                    isClosable: true,
                                    status: 'success',
                                  })
                              }
                              else {
                                setApply(false);
                              }

                            }}>{apply ? "Applied" : "Apply"}</Button></Box>
                          </Flex>
                        </Box>
                        <Divider height={5} borderRadius='2px'></Divider>
                        <Box fontSize={14} fontWeight='700'>Use voucher PARTY12 &amp; get Extra 60% Off!</Box>

                      </Box>
                    </Flex>
                  </DrawerBody>

                  <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme='blue' onClick={onClose}>Save</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
              {/* drawer ending */}
              

              <Box display={apply ? "block" : "none"}>
                <Box display='flex' flexDirection='column' gap={1} bg='#fff'
                  p='5' borderRadius='12px' color='#000042' etterSpacing='-.02em'
                  boxShadow='0 1px 4px rgb(0 0 0 / 10%)' >

                  {/* p='16' bg= '#f7f1de' border='1px solid #e0c67c' borderRadius='12px' color='#000042' etterSpacing='-.02em' */}
                  <Box>
                    <Text
                      fontStyle='normal'
                      fontWeight='700'
                      fontSize='14px'
                      lineHeight='20px'
                      letterSpacing='-.02em'>
                      coupon: PARTY12 Applied
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      fontStyle='normal'
                      fontWeight='700'
                      fontSize='14px'
                      lineHeight='20px'
                      color='#333368'>
                      {'You are saving ₹' + discount}
                    </Text>
                  </Box>

                </Box>

              </Box>

              <Button display='inline-flex'
                justifyContent='center'
                p='16px 24px'
                h='56px'
                _hover={{
                  background: "#11daac",
                  boxShadow: '0 3px 16px 0 rgb(0 0 0 / 10%)',
                  overflow: ' hidden',
                  position: 'relative',
                  zIndex: '1'
                }}
                bg='#11daac'
                borderRadius='100px'
                fontWeight='bold'
                color='#000042'
                fontSize='20px'
                lineHeight='24px'
                letterSpacing='-.02em'
                textDecoration='none!important'
                border='none' onClick={()=>navigate("/shiping")}
                >
                Proceed To Checkout
              </Button>
            </Box>

          </Box>
          
        </Box>
        }
      </Box>
    </>
  );
}


