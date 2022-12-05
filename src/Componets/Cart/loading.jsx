import { Image,Box } from '@chakra-ui/react'


export default function LoadingSpinner() {
    return (
        <div>
            <Box className='loading' boxSize='sm'>
                <Image  src='https://static.lenskart.com/media/desktop/img/loader-lk.gif' alt='Dan Abramov' />
            </Box>
        </div>
    )
}