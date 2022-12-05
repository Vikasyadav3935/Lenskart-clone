import React from 'react';
import {Text,Image,Box, HStack,Link,Avatar, Heading} from '@chakra-ui/react';
import Styles from './TopNav.module.css'
import Hover from './Hover'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'
  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import { FiMenu } from "react-icons/fi";
  import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
const TopNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
  
    return(

        <div className={Styles.tn_div_1} style={{width:'100%'}}>
            <div className={Styles.tn_div_2} style={{width:'100%'}}>
            <Box bg="#FFFFFF" mt="0.5%">
                <Box bg="" pb="0.5%" mb="0.5%">
                    <Box display="flex" fontFamily="sans-serif"  ml="0.3%" bg="">
                        <Link> <Text fontSize="70%" color="#000042">Do More, Be More</Text></Link>
                        <Text fontSize="100%" mt="-0.8%" p="0.4%">|</Text>
                        <Link to=""><Text fontSize="63%" color="#000042" p="">Try in 3D</Text></Link>
                        <Text fontSize="100%" mt="-0.8%" p="0.4%">|</Text>
                        <Link><Text fontSize="63%" color="#000042">Store Location</Text></Link>
                        <Text fontSize="100%" mt="-0.8%" p="0.4%">|</Text>
                        <Link> <Text fontSize="63%" color="#000042">Quality</Text></Link>
                        <Text fontSize="100%" mt="-0.8%" p="0.4%">|</Text>
                        <Link><Text fontSize="63%" color="#000042">USA</Text></Link>
                        <Text fontSize="100%" mt="-0.8%" p="0.4%">|</Text>
                        <Link><Text fontSize="63%" color="#000042">Singapore</Text></Link>
                        <Text fontSize="100%" mt="-0.8%" p="0.4%">|</Text>
                        <Link><Text fontSize="63%" color="#000042">UAE</Text></Link>
                        <Text fontSize="100%" mt="-0.8%" p="0.4%">|</Text>
                        <Link><Text fontSize="63%" color="#000042">John Jacobs</Text></Link>
                        <Text fontSize="100%" mt="-0.8%" p="0.4%">|</Text>
                        <Link><Text fontSize="63%" color="#000042">Aqualens</Text></Link>
                        <Text fontSize="100%" mt="-0.8%" p="0.4%">|</Text>
                        <Link><Text fontSize="63%" color="#000042">Cobrowsing</Text></Link>
                        <Text fontSize="100%" mt="-0.8%" p="0.4%">|</Text>
                        <Link><Text fontSize="63%" color="#000042">Engineering Blog</Text></Link>
                    </Box>
                </Box>
                <Box display="flex" p="0% 1.5%">
                    <Box w="14%" cursor="pointer" ml="-1%" bg=""> 
                    <Image w="100%" h="100%" src='https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg' alt='Lenskart' />
                    </Box>
                    <Box width="10%" ml="5%" bg="">
                        <Image h="100%" width="100%"  src="https://static.lenskart.com/media/mobile/images/phone_number.svg" alt="ph-no"></Image>
                    </Box>

                    <Box ml="25px" mt="12px">
                        <Box border="1px" h="35px"  w="400px" borderRadius="5px" borderColor="#000042" bg="#FFFFFF">
                            <Text color="grey" ml="10px">What are you looking for</Text>

                    <Box p="0.6%" bg="" w="55%" ml="1%">
                        <Box border="1px" h="100%"  w="100%" borderRadius="5px" borderColor="#000042" bg="#FFFFFF">
                            <Text color="grey" ml="2%" mt="0.3%">What are you looking for</Text>

                        </Box>
                    </Box>
                    <Box  fontSize="75%" fontFamily="sans-serif" w="28%" ml="5%">
                        <Box pt="5%" display="flex" justifyContent="space-between">                      
                            <Text cursor="pointer"> 
                                Track Order
                            </Text>
                            <Box  display="flex">
                                <Text cursor="pointer">Sign In &</Text>
                                <Text cursor="pointer">Sign Up</Text>
                            </Box>
                            <Box display="flex" cursor="pointer">
                                <Image h="75%" src="https://static.lenskart.com/media/desktop/img/wishlist.png" alt="icon"></Image>
                                <Text ml="15%">Wishlist</Text>
                            </Box>

                            <Box display="flex" cursor="pointer">
                                <Image h="65%" src="https://static.lenskart.com/media/desktop/img/cart.png" alt="icon"></Image>
                                <Text ml="15%" >Cart</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <HStack fontWeight="bold" bg="#FBF9F7" fontFamily="sans-serif" h="65px" w="" position="relative">
                    <Hover/>
                    <Box spacing="5px" w="" display="flex" alignItems="center" left="82%" gap="3%" h="100%" position="absolute">
                        <Image h="55%" w="35%" borderRadius="5px" cursor="pointer" src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png" alt="try on 3D"></Image>
                        <Image h="55%" w="35%" borderRadius="5px" cursor="pointer" src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png" alt="BLU"></Image>
                        <Image h="55%" w="35%" borderRadius="5px" cursor="pointer" src="https://static.lenskart.com/media/desktop/img/Feb22/18-Feb/goldlogo.jpg" alt="GOLD"></Image>
                    </Box>
                </HStack>
            </Box>
            </div>
            <div className={Styles.mobView}>
              <Button leftIcon={<FiMenu />} colorScheme='teal' onClick={onOpen}>
              </Button>
              <Drawer isOpen={isOpen} placement='left' initialFocusRef={firstField} onClose={onClose}>
              <DrawerOverlay/>
              <DrawerContent w="100%">
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth='1px'>
              <div className={Styles.div1}>
                <div className={Styles.div2}>
                    <Avatar src='https://bit.ly/broken-link' /> 
                      <div className={Styles.div3}>
                        <h3>Hi Yogi</h3>
                        <Link color="#CCCCCC" fontSize="70%" fontFamily="" fontWeight="">Login/Sign Up to manage your orders & more!</Link>
                    </div>
                </div>
                <Button bg="#00BAC6" w="100%" color="#FFFFFF">Login Or Register</Button>
            </div>
            <div className="hrLine"></div>
            <Link>Contact Us</Link>
            <br />
            <Heading>HIGHLIGHTS</Heading>

                <Link>Check Frame Size</Link>
                <Link>Gold Membership</Link>
                <Link>Try Frames in 3D</Link>
                <Link>Dowloads Apps</Link>

            <br />

            <Heading>SHOP NOW</Heading>
            <Accordion allowMultiple>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Section 2 title
            </Box>
            {isExpanded ? (
              <AiOutlineMinus fontSize='12px' />
            ) : (
              <AiOutlinePlus fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
          </DrawerHeader>

          <DrawerBody >
            {/* <Stack spacing='24px'>
              <Box>
                <FormLabel htmlFor='username'>Name</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                  placeholder='Please enter user name'
                />
              </Box>

              <Box>
                <FormLabel htmlFor='url'>Url</FormLabel>
                <InputGroup>
                  <InputLeftAddon>http://</InputLeftAddon>
                  <Input
                    type='url'
                    id='url'
                    placeholder='Please enter domain'
                  />
                  <InputRightAddon>.com</InputRightAddon>
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor='owner'>Select Owner</FormLabel>
                <Select id='owner' defaultValue='segun'>
                  <option value='segun'>Segun Adebayo</option>
                  <option value='kola'>Kola Tioluwani</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor='desc'>Description</FormLabel>
                <Textarea id='desc' />
              </Box>
            </Stack> */}
          </DrawerBody>

          {/* <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Submit</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>

            </div>
        </div>
    )
}
export default TopNav;

