import React, {FC} from 'react'
import styled from 'styled-components'
import CustomButton from './Button';
import { Input } from "@chakra-ui/react"

const StyledNotify = styled.div`
    background: linear-gradient(45deg, hsla(353, 100%, 95%, 1) 0%, hsla(351, 100%, 97%, 1) 50%, hsla(348, 100%, 99%, 1) 100%);    
    padding: 2rem;
    h1 {
        margin: 2rem;
        text-align: center;
        font-size: 2.5rem;
        font-weight: 700;   
    }
    .input {
        display: flex;
        max-width: 50%;
        margin: 0 auto;
    }
`;

const NotifyBar: FC = () => {
    return (
        <StyledNotify>
            <h1>Get Notified On Launch.</h1>
            <div className="input">
                <Input focusBorderColor="#000"t mr="1.5rem" borderColor="#0D1821" borderWidth="1.2px" placeholder="Email Address" />
                <CustomButton title="subscribe" />
            </div>
            
        </StyledNotify>
    )
}

export default NotifyBar;
