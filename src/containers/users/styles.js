import styled from "styled-components";
import Background from "../../assets/home/background.svg";


export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%; 
    min-height: 100vh;
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const Order = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 101px; 
    border: none;
    outline: none;
    margin-top: 18px;
    
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 188px;
        height: 21px;

        p {
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;

        color: #FFFFFF;
        }
    }


    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`;