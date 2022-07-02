import styled from "styled-components";

export const Wrapper = styled.div``;

export const ProjectWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 70px;
    @media (max-width: 880px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const ProjectBox = styled.a`
    width: 400px;
    height: 450px;
    border: 3px solid #f1f2f3;
    border-radius: 20px;
    text-align: center;
    /* cursor: pointer; */

    h1 {
        font-size: 30px;
        padding: 12px;
        color: black;
    }
    img {
        width: 350px;
    }

    @media (min-width: 880px) {
        :not(:last-child) {
            margin-right: 30px;
        }
    }
    @media (max-width: 880px) {
        h1 {
            font-size: 25px;
        }
        margin-bottom: 30px;
    }
`;
