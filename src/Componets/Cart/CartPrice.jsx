import React from "react";
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Box, Divider, Flex, Image, Text, Spacer } from "@chakra-ui/react";


export default function CartPrice(props) {
    return (
        <Box>
            <Box display='flex' flexDirection='row' w='100%' >
                <Text>{props.priceTitle}</Text>
                <Spacer />
                <Text >{props.price}</Text>
            </Box>
            <Divider borderBottom='dashed 1px #cecedf' height='14px' borderTop='none' mb='5px' />
        </Box>
    )
}