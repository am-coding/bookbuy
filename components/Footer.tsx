import React, {FC} from 'react'
import styled from 'styled-components';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

const StyledFooter = styled.div`
    height: 10vh;
    .icons {
        display: flex;
        align-items: center;
    }
`;

const Footer: FC = () => {
    return (
        <StyledFooter>
            <div></div>
            <div className="icons">
                <FiInstagram />
                <AiOutlineTwitter />
                <AiOutlineGithub />
            </div>
        </StyledFooter>
    )
}

export default Footer;
