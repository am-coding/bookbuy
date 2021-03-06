import React, { FC, useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi';
import { Button } from '@chakra-ui/react';
import { BsLink45Deg } from 'react-icons/bs'
import RegisterModal from '../components/RegisterModal';

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    .brand {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        margin: 1.5rem;
        font-weight: 600;
        color: #0D1821;
    }
    .items ul{
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        margin-right: 1.5rem;
    }
    .items li {
        list-style: none;
    }
    .items li a {
        text-decoration: none;
        color: #0D1821;
        padding: 1.4rem;
        display: block;
    }
    .items li a:hover {
        color: #FB6376;
        transition: .3s all;
    }
    .toggle {
        position: absolute;
        top: 1.8rem;
        right: 1rem;
        display: none;
        font-size: 1.5rem;
        color: #FB6376;
    }
    .items.active{
        display: flex;
        background-color: #fff;
        z-index: 999;
    }
    @media only screen and (max-width: 600px) {
        .toggle {
            display: block;
        }
        .items {
            width: 100%;
            display: none;
        }
        flex-direction: column;
        align-items: flex-start;
        .items ul {
            flex-direction: column;
            width: 100%;
            margin-right: 0rem;
            padding: 1rem 0 1rem 0;
        }
        .items li a {
            padding: 0.5rem 3.5rem;
        }
      
    }
`

const Navbar: FC = () => {
    const [classname, setClassname] = useState<boolean>(false);
    const handleClick = () => {
        setClassname(!classname)
    }
    return (
        <StyledNavbar>
            <div className="brand">DevPocket <BsLink45Deg /></div>
            <a onClick={handleClick} href="#" className="toggle">
                <GiHamburgerMenu />
            </a>
            <div className={classname === false ? 'items' : 'items active'}>
                <ul>
                    <li><Link href="#"><RegisterModal title="Register" /></Link></li>
                    <li><Link href="#">Contact</Link></li>
                    <li><Link href="#"><Button _hover={{bg: '#0D1821'}} color="#fafafa" borderRadius="10px" size="sm" backgroundColor="#FB6376">Coming Soon</Button></Link></li>
                </ul>
            </div>
        </StyledNavbar>
    )
}

export default Navbar;
