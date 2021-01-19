import React, { FC, useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi';

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .brand {
        font-size: 1.5rem;
        margin: 0.5rem;
        color: #0D1821;
    }
    .items ul{
        margin: 0;
        padding: 0;
        display: flex;
    }
    .items li {
        list-style: none;
    }
    .items li a {
        text-decoration: none;
        color: #0D1821;
        padding: 1rem;
        display: block;
    }
    .items li a:hover {
        color: #FB6376;
        transition: .3s all;
    }
    .toggle {
        position: absolute;
        top: 0.7rem;
        right: 1rem;
        display: none;
        font-size: 1.5rem;
        color: #FB6376;
    }
    .items.active{
        display: flex;
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
        }
        .items li a {
            padding: 0.5rem 1rem;
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
            <div className="brand">DevPocket</div>
            <a onClick={handleClick} href="#" className="toggle">
                <GiHamburgerMenu />
            </a>
            <div className={classname === false ? 'items' : 'items active'}>
                <ul>
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">Discover</Link></li>
                    <li><Link href="#">Login</Link></li>
                    <li><Link href="#">Signup</Link></li>
                </ul>
            </div>
        </StyledNavbar>
    )
}

export default Navbar;
