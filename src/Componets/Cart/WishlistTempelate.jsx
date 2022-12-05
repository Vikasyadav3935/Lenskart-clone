import {  AiFillStar } from 'react-icons/ai'
import React from 'react';
import { Box, Divider, Flex, Image, Text, Spacer, Button } from "@chakra-ui/react";
const WishlistTemplate = () => {
    const [wishlist, setWishlist] = React.useState([]);

    const wishlistdata = () => {
        fetch('https://easy-pink-bull-shoe.cyclic.app/whishlist')
        .then(res=>res.json())
        .then(data =>setWishlist(data));
    }

    React.useEffect(() => {
        wishlistdata()

    }, [])


    return (
        <>
        {wishlist.map((el,index)=>{
        return(
        <Box className='wishlistDiv-cart' border="1px solid" borderColor="gray.300" borderRadius="3%" p="20px" bg='#fff' w='230px' mr='5px'>
            <Image m="auto" mb='20px' width="100%" src={el.imageTsrc} alt='image' />
            <Box >
                <Flex direction='row' w='max-content' borderRadius="15px" alignItems="center" gap="5px" p="5px 10px" bgColor="#eeeef5">
                    <Text>{el.rating}</Text>
                    <AiFillStar size="15px" color='#0fbd95' />
                    <Text>{el.userRated}</Text>
                </Flex>
            </Box>
            <Text mt="5px" fontWeight="bold" color="#000042">{el.style+" "+el.productType}</Text>
            <Text color='#9999b3' fontWeight='500'>
                          <s>{'₹' + el.mPrice}</s>
            </Text>
            <Text mt="5px" fontWeight="bold" color="#000042"> {"₹"+el.price}</Text>
            
        </Box>
        )
        })}
        </>
    )
}
export default WishlistTemplate