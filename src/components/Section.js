import React from 'react';
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {

    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <Itemtext>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </Itemtext>
            </Fade>
            <Fade bottom>
            <Buttons>
                <Buttongroup>
                    <Leftbutton>
                        {leftBtnText}
                    </Leftbutton>
                    <Rightbutton>
                        {rightBtnText}
                    </Rightbutton>
                </Buttongroup>
                <Downarrow src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-arrow-arrows-those-icons-lineal-color-those-icons-1.png" />
            </Buttons>
            </Fade>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: ${props => `url("${props.bgImage}")`};
    background-repeat: no-repeat;                
    display: flex;
    flex-direction: column;
    justify-content: space-between;     //vertical
    align-items: center;                 // horizontal

`
const Itemtext = styled.div`
    padding-top: 15vh;
    text-align: center;
    z-index: -1;
`
const Buttongroup = styled.div`
    display: flex;
    margin-button: 30px;
    
    //media responsiva, para anchos menores a 768px los botones se muestran uno debajo del otro

    @media (max-width: 768px){
        display: inline;
    }
`
const Leftbutton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
const Rightbutton = styled(Leftbutton)`
    background: white;
    opacity: 0.65;
    color: black;
`
const Downarrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`
`