import { Box } from '@chakra-ui/react'
import React from 'react'

const Text = (props) => {
  return (
    <Box fontSize={"13.5px"} fontWeight="400" >
        {props.info}

    </Box>
  )
}

export default Text