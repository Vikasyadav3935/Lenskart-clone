import React from "react";
import { Box, Divider, Flex, Image, Text, Spacer } from "@chakra-ui/react";



export default function CartItem(props){

    // const arr = [
    //     {
    //       image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e14246-c1-eyeglasses_vincent-chase-vc-e14246-c1-eyeglasses_G_5134.jpg',
    //       title: 'brown transparent brown gold full rim square vincent chase blend edit vc e14246-c1 eyeglasses',
    //       op: 2000,
    //       actual: 1199
    //     },
    //     {
    //       image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e14246-c1-eyeglasses_vincent-chase-vc-e14246-c1-eyeglasses_G_5134.jpg',
    //       title: 'brown transparent brown gold full rim square vincent chase blend edit vc e14246-c1 eyeglasses',
    //       op: 2000,
    //       actual: 1199
    //     },
    //     {
    //       image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e14246-c1-eyeglasses_vincent-chase-vc-e14246-c1-eyeglasses_G_5134.jpg',
    //       title: 'brown transparent brown gold full rim square vincent chase blend edit vc e14246-c1 eyeglasses',
    //       op: 2000,
    //       actual: 1199
    //     },
    //     {
    //       image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e14246-c1-eyeglasses_vincent-chase-vc-e14246-c1-eyeglasses_G_5134.jpg',
    //       title: 'brown transparent brown gold full rim square vincent chase blend edit vc e14246-c1 eyeglasses',
    //       op: 2000,
    //       actual: 1199
    //     }
    //   ]
    //   const [item, setItem] = useState([]);
    
    //   useEffect(() => {
    //     setItem(arr);
    //   }, [])
    
      console.log(props.item)
    return(
        <>
        {props.item.map((el, index) => {
            return (


              <Box display="flex" gap={6} alignItems="center" bg="#fff" borderRadius='12px'  p='6' boxShadow='0 1px 4px rgb(0 0 0 / 10%)' key={index.toString()}>
                {/* item-product-card-image */}
                <Box w="30%">
                  <a href="/" rel="noopener noreferrer">
                    <Image w='236px' src={el.image} />
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
                          // fontFamily='lenskartsans-bold' 
                          fontFamily='sans-serif-bold' 
                          fontStyle='normal' lineHeight='24px' letterSpacing='-.02em' textTransform='capitalize' color='#000042'>
                            {el.title}
                          </Text>
                        </Box>
                      </a>
                    </Box>

                    <Box w="40%">
                      <Text display="flex" gap={6}>
                        <Text color='#9999b3' fontWeight='400' 
                        // fontFamily='lenskartsans-bold' 
                        fontFamily='sans-serif-bold'
                        >
                          <s>{'₹' + el.op}</s>
                        </Text>
                        <Text color='#000042' fontWeight='700' 
                        // fontFamily='lenskartsans-bold' 
                        fontFamily='sans-serif-bold'
                        >{'₹' + el.actual}</Text>
                      </Text>
                    </Box>
                  </Box>

                  <Divider borderBottom='dashed 1px #cecedf' borderTop='none' />

                  <Box display='flex' flexDirection='row'>

                    <Text
                      mr='16px' textDecoration='underline' fontWeight='700' 
                      // fontFamily='lenskartsans-bold' 
                      fontFamily='sans-serif-bold' 
                      
                      fontStyle='normal' lineHeight='24px' letterSpacing='-.02em' textTransform='capitalize' color='#000042'>
                      Remove
                    </Text>
                    <Text
                      ml='16px' textDecoration='underline' fontWeight='700'
                      //  fontFamily='lenskartsans-bold' 
                      fontFamily='sans-serif-bold' 
                       fontStyle='normal' lineHeight='24px' letterSpacing='-.02em' textTransform='capitalize' color='#000042'>
                      Duplicate
                    </Text>
                  </Box>
                </Box>
              </Box>
            )
          })}
          </>

    )
}