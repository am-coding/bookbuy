import React, { FC } from 'react'
import styled from 'styled-components'

const StyledWork = styled.div`
    max-width: 90%;
    margin: 0 auto;
    h1 {
        margin: 1rem;
        font-size: 3rem;
        font-weight: 700;
        text-align: center;
    }
    .work-div-1 {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 2.1rem;
    }
    .work-div-1:nth-of-type(2) {
        flex-direction: row-reverse;
    }
    .box {
        padding: 1rem;
    }
    img {
        max-width: 50%;
    }
    h2 {
        line-height: 1.1;
        font-size: 2.5rem;
        font-weight: 700;
        max-width: 80%;
    }
    p {
        font-size: 1.2rem;
        margin-top: 1rem;
        max-width: 80%;
    }
    @media only screen and (max-width: 600px) {
        max-width: 92%;
        h1 {
            font-size: 2rem;
        }
        .work-div-1 {
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
        padding: 0rem;
        padding-block: 2rem;
    }
    .work-div-1:nth-of-type(2) {
        flex-direction: column;
    }
    img {
        max-width: 100%;
    }
    h2 {
        text-align: center;
        line-height: 1.1;
        font-size: 2rem;
        font-weight: 700;
        max-width: 100%;
    }
    p {
        text-align: center;
        font-size: 1rem;
        margin: 1rem;
        max-width: 100%;
    }
    .box {
        padding: 1rem;
    }
    }
`;

const Work: FC = () => {
    return (
        <StyledWork>
            <h1>How it works</h1>
            <div className="work-div-1">
                <div className="box">
                <h2>Create your own customized feed of resources.</h2>
                <p>Get a feed from different programming resources like blogs and magazines and from various sites. </p>
                </div>
                <img width="100%" height="auto" src="./feed.svg" />
            </div>
            
            <div className="work-div-1">
                <div className="box">
                <h2>Save links from feed or add your own.</h2>
                <p>Get a feed from different programming resources like blogs and magazines and from various sites. </p>
                </div>
                <img width="100%" height="auto" src="./save.svg" />
            </div>

            <div className="work-div-1">
                <div className="box">
                <h2>Keep track of all your links and resources.</h2>
                <p>Get a feed from different programming resources like blogs and magazines and from various sites. </p>
                </div>
                <img width="100%" height="auto" src="./track.svg" />
            </div>
        </StyledWork>
    )
}

export default Work;
