import { Wrapper, ProjectWrapper, ProjectBox } from "./Project.style";
import { Title } from "../../components/Title/Title";

type ProjectProps = {
    props?: string;
};
export const Project = ({ props }: ProjectProps) => {
    return (
        <Wrapper>
            <Title title="Project" />
            <ProjectWrapper>
                <ProjectBox href="https://github.com/jungbyungwook/Metabook">
                    <h1>Metabook</h1>
                    <img src="img/metabook.png" alt="" />
                </ProjectBox>
                <ProjectBox href="https://github.com/jungbyungwook/Greenery">
                    <h1>초록친구</h1>
                    <img src="img/greenery.png" alt="" />
                </ProjectBox>
            </ProjectWrapper>
        </Wrapper>
    );
};
