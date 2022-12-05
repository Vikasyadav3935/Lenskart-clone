import { useToast,Button } from '@chakra-ui/react'


export default function PositionExample() {
    const toast = useToast()
    const position ='top'
  
    return (
      
            <Button 
              onClick={() =>
                toast({
                  title: `Item Removed From Cart`,
                  position: position,
                  isClosable: true,
                  status: 'error',
                })
              }
            >
              Show {position} toast
            </Button>
          
    )
  }