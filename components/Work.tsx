import React, { FC } from 'react'
import styled from 'styled-components'
import HeadShake from 'react-reveal/HeadShake';
import Fade from 'react-reveal/Fade';

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
        max-width: 85%;
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
                <HeadShake duration={3000}>
                <div className="box">
                <h2>Create your own customized feed of resources.</h2>
                <p>Get feed from different programming resources like blogs and magazines or even add your own resource. </p>
                </div>
                </HeadShake>
                <Fade duration={3000}>
                <img width="100%" height="auto" src="./feed.svg" />
                </Fade>
            </div>
            
            <div className="work-div-1">
                <HeadShake duration={3000}>
                <div className="box">
                <h2>Save links from feed or add your own.</h2>
                <p>You can save links from the feed to visit later and create your own feed of your saved links/resources,or add any external link. </p>
                </div>
                </HeadShake>
                <Fade duration={3000}>
                <img width="100%" height="auto" src="./save.svg" />
                </Fade>
            </div>

            <div className="work-div-1">
            <HeadShake duration={3000}>
                <div className="box">
                <h2>Keep track of all your links and resources.</h2>
                <p>Save all your resources and links at one place to share or customize and keep track of them. </p>
                </div>
                </HeadShake>
                <Fade duration={3000}>
                <img width="100%" height="auto" src="./track.svg" />
                </Fade>
            </div>
        </StyledWork>
    )
}

export default Work;
