import React, { FC } from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import { Button } from "@chakra-ui/react";

const StyledHero = styled.div`
    img {
        width: 100%;
        height: auto;
    }
    button {
        padding: 1rem 1rem;
        border: none;
        outline: none;
        background-color: #FB6376;
    }
`;


const Hero: FC = () => {
    return (
        <StyledHero>
            <Navbar/>
            <div className="hero-div">
                <div className="box">
                    <h1>Create a collection of resources</h1>
                    <p>One place to save and organise all your programming resources and links.</p>
                    <button>
                        Button
                    </button>
                </div>
                <img src="./head.svg" alt="hero-img" />
            </div>
        </StyledHero>
    )
}

export default Hero;
