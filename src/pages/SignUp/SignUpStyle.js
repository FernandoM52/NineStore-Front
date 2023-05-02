import styled from "styled-components";

export const SignUpStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    img{
        width: 600px;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        input {
            width: 300px;
            height: 45px;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            margin-top: 8px;
            ::placeholder{
                color: #DBDBDB;
                font-size: 20px;
            }
        }

        button{
            font-size: 20px;
            margin-top: 10px;
            background-color: #ffbc87;
            width: 300px;
            height: 45px;
            border: none;
            border-radius: 5px;
            :hover{
                width: 305px;
                height: 46px;
            }
        }
        a {
            color: #798c97;
            font-weight: bold;
            margin-top: 8px;
        }
    }
`;
