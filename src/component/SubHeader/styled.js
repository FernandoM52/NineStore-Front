import styled from 'styled-components';

export const Container = styled.div`

    background-color: #F3ECE5;
    height: 35px;
    border-bottom: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: fixed;
    top: 50px;
    width: 100%;
    
    & a {
        color: #000;    
        font-size: 16px;
        font-family: 'Arial', 'sans-serif';
        font-weight: 500;
        text-decoration: none;
    }

    &:hover {
        a {
            color: gray;
        }
    }

    & a:hover {
        color: #000;
        text-decoration: underline;
    } 
`