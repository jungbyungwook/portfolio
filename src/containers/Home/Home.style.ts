import styled from "styled-components";
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    background-color: black;
    width: 100vw;
    height: 100vh;
`;

export const Typing = styled.h1`
    font-size: 60px;
    border-right: 2px solid #777;
    padding-right: 0.4rem;
    animation: cursor 0.9s infinite;
    width: fit-content;
    padding: 2px;
    /* margin: auto; */

    @keyframes cursor {
        from {
            border-right: 2px solid #222;
        }
        to {
            border-right: 2px solid #fff;
        }
    }

    @media (max-width: 874px) {
        font-size: 24px;
    }
`;

export const Down = styled.a`
    padding-top: 300px;
    span {
        margin-top: 50px;
        position: absolute;
        left: 50%;
        width: 35px;
        height: 35px;
        margin-left: -12px;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-animation: sdb 2s infinite;
        animation: sdb 2s infinite;
        box-sizing: border-box;
    }
    @-webkit-keyframes sdb {
        0% {
            -webkit-transform: rotate(-45deg) translate(0, 0);
        }
        20% {
            -webkit-transform: rotate(-45deg) translate(-10px, 10px);
        }
        40% {
            -webkit-transform: rotate(-45deg) translate(0, 0);
        }
    }
    @keyframes sdb {
        0% {
            transform: rotate(-45deg) translate(0, 0);
        }
        20% {
            transform: rotate(-45deg) translate(-10px, 10px);
        }
        40% {
            transform: rotate(-45deg) translate(0, 0);
        }
    }
`;
