import React, {FC} from 'react'
import { Button } from '@chakra-ui/react';

interface buttonProps {
    title: string,
    handleClick?: any,
}

const CustomButton: FC <buttonProps> = ({title, handleClick}) => {
    return (
        <Button onClick={handleClick} _hover={{bg: '#0D1821'}} color="#fafafa" borderRadius="10px" backgroundColor="#FB6376">
            {title}
        </Button>
    )
}

export default CustomButton;