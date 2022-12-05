import React from "react";
import { Box, Divider, Flex, Image, Text, Spacer, Button, useToast } from "@chakra-ui/react";
import {  AiOutlineArrowLeft,AiOutlinePlusCircle,AiOutlineMinusCircle } from 'react-icons/ai'


export default function CartItem(props) {

  const toast = useToast()
  const position = 'top left'
  function alert() {
    toast({
      title: `Item Removed From Cart!`,
      position: position,
      isClosable: true,
      status: 'error',
    })
  }
  //   async function handleDelete(id) {
  //     let g= await fetch(`https://easy-pink-bull-shoe.cyclic.app/Cart/${id}`, {
  //         method: "DELETE",
  //         body: JSON.stringify(props.item),
  //         headers: { 'Content-Type': "application/json" }
  //     })
  //     await g.json()
  //     props.refresh()
  // }
  console.log(props.item)
  return (
    <>
      {props.item.map((el, index) => {
        console.log(props.item)
        return (


          <Box display="flex" gap={6} alignItems="center" bg="#fff" borderRadius='12px' p='6' boxShadow='0 1px 4px rgb(0 0 0 / 10%)' key={index.toString()}>
            {/* item-product-card-image */}
            <Box w="30%">
              <a href="/" rel="noopener noreferrer">
                <Image w='236px' src={el.imageTsrc} />
              </a>
            </Box>

            {/* item-product-card-description */}
            <Box w="70%" display='flex' flexDirection='column' gap={8} >
              {/* description + original price + current price */}
              <Box display="flex" flexDirection='row' gap={5} >
                <Box w="60%">
                  <a href="/" rel="noopener noreferrer">
                    <Box>
                      <Text fontWeight='700'

                        fontStyle='normal' lineHeight='24px' letterSpacing='-.02em' textTransform='capitalize' color='#000042'>
                        {/* static data */}
                        {/* {el.title} */}
                        {el.colors + ' Block Phone & Computer Glasses: Classic chase ' + el.colors + ' Transparent ' + el.style + ' ' + el.shape + ' Lenskart Blu LB ' + el.productId}
                      </Text>
                    </Box>
                  </a>
                </Box>

                <Box w="40%">
                  <Text display="flex" gap={6}>
                    <Text color='#9999b3' fontWeight='500'>
                      <s>{'₹' + el.mPrice}</s>
                    </Text>
                    <Text color='#000042' fontWeight='700'
                    >{'₹' + el.price}</Text>
                  </Text>
                </Box>
              </Box>

              <Divider borderBottom='dashed 1px #cecedf' borderTop='none' />

              <Box display='flex' flexDirection='row' alignItems='center'>

                <Text
                  mr='16px' textDecoration='underline' fontWeight='700'


                  fontStyle='normal' lineHeight='24px' letterSpacing='-.02em' textTransform='capitalize' color='#000042'
                  onClick={() => {
                    alert()
                    props.refresh(el.id)

                  }}
                cursor='pointer'>
                  Remove
                </Text>
                <Box>
                  <Flex alignItems='center' gap={2}>
                    <Button bg='white' color='red' 
                      _hover={{
                        
                        color: 'white',
                        background:'red'
                        
                      }}
                      
                      onClick={() =>{
                        props.updateminus(el.id,el.quntity)
                      }}

                    ><Text ><AiOutlineMinusCircle size={15}/></Text></Button>
                    <Text  >{parseInt(el.quntity)+1}</Text>
                    <Button bg='white' color='green'
                      _hover={{
                        
                        color: 'white',
                        background:'green'
                        
                      }}
                      onClick={() =>{
                        props.update(el.id,el.quntity)
                      }}
                    ><Text ><AiOutlinePlusCircle size={15} /></Text></Button>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Box>
        )
      })}
    </>

  )
}