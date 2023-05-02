import styled from 'styled-components';

export const ChartContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const ImgContainer2 = styled.div`

    display: flex;

    & div {
        width: 50vw;
        height: calc(50vw * 0.5);

        display: flex;
        flex-direction: column;
        align-items: ;
    }

    & div:first-child {
        background: url('./assets/img/bg-sports.jpg');
        background-size: cover;
        background-size: center center;
        padding-left: 15px;

        & ul {
        text-align: left;
        background: yellow;
        width: fit-content;
        margin-top: 15px;
        border-radius: 15px;
        padding-bottom: 15px;
        padding-left: 15px;
        padding-right: 15px;
        background-color: rgba(0,0,0,0.6);
        }
    }

    & div:nth-child(2) {
        background: url('./assets/img/bg-kids.jpeg');
        background-size: cover;
        background-position: center center;
        padding-left: 15px;

        & ul {
        text-align: left;
                background: yellow;
        width: fit-content;
        margin-top: 15px;
        border-radius: 15px;
        padding-bottom: 15px;
        padding-left: 15px;
        padding-right: 15px;
        background-color: rgba(0,0,0,0.6);
        }
    }

    & div:last-child {
        background: url('./assets/img/bg-home.webp');
        background-size: cover;
        background-position: center center;
        padding-left: 15px;

        & ul {
        text-align: left;
                background: yellow;
        width: fit-content;
        margin-top: 15px;
        border-radius: 15px;
        padding-bottom: 15px;
        padding-left: 15px;
        padding-right: 15px;
        background-color: rgba(0,0,0,0.6);
        }
    }
    
    & a {
        text-decoration: none;
        color: white;
        font-family: 'Arial', 'sans-serif';
        font-size: 20px;
        line-height: 30px;
        text-shadow: 1px 1px 5px black;
    }

    & li:first-child a {
        font-weight: bold;
        font-size: 30px;
        line-height: 60px;
    }

    & a:hover {
        text-decoration: underline;
    }
`

export const ImgContainer = styled.div`

    display: flex;

    & div {
        width: 50vw;
        height: calc(50vw * 0.75);

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    & div:first-child {
        background: url('./assets/img/bg-feminine-section.png');
        background-size: cover;
        background-size: center center;
        padding-right: 15px;

        & ul {
        text-align: right;
        }
    }

    & div:last-child {
        background: url('./assets/img/bg-masculine-section.png');
        background-size: cover;
        background-position: center center;
        padding-left: 15px;

        & ul {
        text-align: left;
        }
    }
    
    & a {
        text-decoration: none;
        color: white;
        font-family: 'Arial', 'sans-serif';
        font-size: 20px;
        line-height: 30px;
        text-shadow: 1px 1px 5px black;
    }

    & li:first-child a {
        font-weight: bold;
        font-size: 30px;
        line-height: 60px;
    }

    & a:hover {
        text-decoration: underline;
    }
`