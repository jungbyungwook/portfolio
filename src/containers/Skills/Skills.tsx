import { Wrapper, SkillsWrapper, SubTitle } from "./Skills.style";
import { Title } from "../../components";

type SkillsProps = {
    prop?: string;
    onClick?: (prop: string) => void;
};

export const Skills = ({ prop }: SkillsProps) => {
    return (
        <Wrapper>
            <Title title="Skills" />
            <SubTitle>Front</SubTitle>
            <SkillsWrapper>
                <img src="img/javascript.png" alt="" />
                <img src="img/react.png" alt="" />
                <img src="img/typescript.png" alt="" />
            </SkillsWrapper>
            <SubTitle>Back</SubTitle>
            <SkillsWrapper>
                <img src="img/nodejs.png" alt="" />
                <img src="img/mongodb.png" alt="" />
            </SkillsWrapper>
            <SubTitle>ETC</SubTitle>
            <SkillsWrapper>
                <img src="img/visual-studio-code.png" alt="" />
                <img src="img/ubuntu.png" alt="" />
            </SkillsWrapper>
        </Wrapper>
    );
};
