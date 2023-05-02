import styled from 'styled-components';

export const Container = styled.div`
    & input {
        height: 30px;
        width: 320px;
        background-color: white;
        border: 1px solid gray;
        border-right: none;
        border-radius: none;
        outline: none;
    }

    & button {
        height: 30px;
        width: 45px;
        color: #ffffff;
        font-size: 20px;
        background-color: black;
        border: none;
        border-radius: none;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & form {
        display: flex;

    }
`