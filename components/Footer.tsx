import React, {FC} from 'react'
import styled from 'styled-components';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

const StyledFooter = styled.div`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .icons {
        display: grid;
        grid-template-columns: auto auto auto;
        column-gap: 1rem;
    }
`;

const Footer: FC = () => {
    return (
        <StyledFooter>
            <div className="icons">
                <a target="_blank" href="https://www.instagram.com/dev.pocket/"><FiInstagram size={30} /></a>
                <a target="_blank" href="https://twitter.com/dev_pockett"><AiOutlineTwitter size={30} /></a>
                <a target="_blank" href="https://github.com/am-coding"><AiOutlineGithub size={30} /></a>
            </div>
        </StyledFooter>
    )
}

export default Footer;
