import React from 'react';
import styled from 'styled-components';

function Brands() {
  return(
    <Container>
        <Wrap>
            <img src="http://www.car-brand-names.com/wp-content/uploads/2016/03/Suzuki-logo-2.jpg"/>
        </Wrap>
        <Wrap>
            <img src="https://www.seekpng.com/png/detail/257-2576667_yamaha-transparent-png-yamaha-logo-black-png.png"/>
        </Wrap>
        <Wrap>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_bFhavSuzkOpTkcyGlvbVSCnwre8ADbtzj3tGLrSQLoIqSBW5ITJqV_9EwxvSSJD05Os&usqp=CAU"/>
        </Wrap>
        <Wrap>
            <img src="https://cdn.worldvectorlogo.com/logos/ktm-racing-1.svg"/>
        </Wrap>
        <Wrap>
            <img src="https://cdn.andresmorales.es/wp-content/uploads/2015/04/isologo-harley.png"/>
        </Wrap>
    </Container>
  ) 
}

export default Brands;
//configuracion para la lista de marcas
const Container = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    display: grid;
    padding: 0px 0px 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

`
const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/33%) 0px 13px 10px -15px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 50px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -16px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`