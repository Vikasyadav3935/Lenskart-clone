import React from 'react';
import {Text,Image, Button, AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,Box } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'
const TopNav = () => {
    return(
        <div>
            {/* <p>This is topNav</p> */}
            <Box bg="#FFFFFF">
                <Box h="55.04" bg="" p="8px 0px 0px">
                    <Box display="flex" fontSize="10px" bg="" fontFamily="sans-serif"  h="17.14">
                        <Link> <Text fontSize="10px" color="#000042" p="0px 5px 0px 0px">Do More, Be More</Text></Link>
                        <Text lineHeight="">|</Text>
                        <Link to="/topnav"><Text fontSize="10px" color="#000042" p="0px 5px">Try in 3D</Text></Link>
                        <Text>|</Text>
                        <Link><Text fontSize="10px" color="#000042" p="0px 4.74px">Store Location</Text></Link>
                        <Text>|</Text>
                        <Link> <Text fontSize="10px" color="#000042" p="0px 4.74px">Quality</Text></Link>
                        <Text>|</Text>
                        <Link><Text fontSize="10px" color="#000042" p="0px 4.74px">USA</Text></Link>
                        <Text>|</Text>
                        <Link><Text fontSize="10px" color="#000042" p="0px 4.74px">Singapore</Text></Link>
                        <Text>|</Text>
                        <Link><Text fontSize="10px" color="#000042" p="0px 4.74px">UAE</Text></Link>
                        <Text>|</Text>
                        <Link><Text fontSize="10px" color="#000042" p="0px 4.74px">John Jacobs</Text></Link>
                        <Text>|</Text>
                        <Link><Text fontSize="10px" color="#000042" p="0px 4.74px">Aqualens</Text></Link>
                        <Text>|</Text>
                        <Link><Text fontSize="10px" color="#000042" p="0px 4.74px">Cobrowsing</Text></Link>
                        <Text>|</Text>
                        <Link><Text fontSize="10px" color="#000042" p="0px 4.74px">Engineering Blog</Text></Link>
                    </Box>
                </Box>
                <Box display="flex" p="0px 16px" mt="-10px" bg="">
                    <Box m="0px 0px 0px -7px" cursor="pointer"> 
                    <Image  src='https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg' alt='Lenskart' />
                    </Box>
                    <Box>
                        <Image h="35px" mt="13px" ml="70px" bg="" src="https://static.lenskart.com/media/mobile/images/phone_number.svg" alt="ph-no"></Image>
                    </Box>
                    <Box ml="25px" mt="12px">
                        <Box border="1px" h="35px"  w="400px" borderRadius="5px" borderColor="#000042" bg="#FFFFFF">
                            <Text color="grey" ml="10px">What are you looking for</Text>
                        </Box>
                    </Box>
                    <Box display="flex" mt="18px" fontSize="12px" fontFamily="sans-serif">
                        <Text ml="80px" cursor="pointer"> 
                            Track Order
                        </Text>
                        <Box  display="flex" ml="20px">
                            <Text cursor="pointer">Sign In &</Text>
                            <Text cursor="pointer">Sign Up</Text>
                        </Box>
                        <Box display="flex" ml="20px" cursor="pointer">
                            <Image h="15px" w="auto" mt="4px" src="https://static.lenskart.com/media/desktop/img/wishlist.png" alt="icon"></Image>
                            <Text ml="13px">Wishlist</Text>
                        </Box>

                        <Box display="flex" ml="20px" cursor="pointer">
                            <Image h="15px" w="auto" mt="4px" src="https://static.lenskart.com/media/desktop/img/cart.png" alt="icon"></Image>
                            <Text ml="13px">Cart</Text>
                        </Box>
                    </Box>
                    
                </Box>
                <Box display="flex" bg="#FBF9F7" p="0px 23.024px" h="60px" fontWeight="bold" fontFamily="sans-serif" fontSize="14px">
                    <Box p="0px 8.0584px" mt="20px" cursor="pointer">EYEGLASSES</Box>
                    <Box p="0px 8.0584px" mt="20px" cursor="pointer">COMPUTER GLASSES</Box>
                    <Box p="0px 8.0584px" mt="20px" cursor="pointer">KIDS GLASSES</Box>
                    <Box p="0px 8.0584px" mt="20px" cursor="pointer">CONTACT LENSES</Box>
                    <Box p="0px 8.0584px" mt="20px" cursor="pointer">SUNGLASSES</Box>
                    <Box p="0px 8.0584px" mt="20px" cursor="pointer">HOME EYE-TEST</Box>
                    <Box p="0px 8.0584px" mt="20px" cursor="pointer">STORE LOCATOR</Box>
                    <Box display="flex" ml="310px">
                        <Image h="38px" w="auto" borderRadius="5px" mt="12px" cursor="pointer" src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png" alt="try on 3D"></Image>
                        <Image h="38px" w="auto" borderRadius="5px" mt="12px" ml="6px" cursor="pointer" src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png" alt="BLU"></Image>
                        <Image h="38px" w="auto" borderRadius="5px" mt="12px" ml="6px" cursor="pointer" src="https://static.lenskart.com/media/desktop/img/Feb22/18-Feb/goldlogo.jpg" alt="GOLD"></Image>
                    </Box>
                </Box>
            </Box>
            {/* <Link as={NextLink} href='/home'>
                Home
            </Link> */}
        </div>
    )
}
export default TopNav;

