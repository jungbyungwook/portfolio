import styled from "styled-components";

export const Wrapper = styled.div`
    margin-bottom: 150px;
`;
export const SubTitle = styled.h1`
    color: black;
    text-align: center;
    margin-bottom: 12px;
    @media (max-width: 874px) {
        font-size: 26px;
        line-height: 45px;
    }
`;
export const SkillsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 60px;

    img {
        width: 100px;
        height: 100px;
        :not(:last-child) {
            margin-right: 20px;
        }
    }
`;
