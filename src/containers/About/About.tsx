import { Wrapper, Introduce } from "./About.style";
import { Title } from "../../components";

type AboutProps = {
    prop?: string;
    onClick?: (prop: string) => void;
};

export const About = ({ prop }: AboutProps) => {
    return (
        <Wrapper>
            <Title title="About" />
            <Introduce>
                안녕하세요 Web Developer 정병욱입니다.
                <br />
                간결하고 효율적인 코드를 지향하고 협업을 즐깁니다.
            </Introduce>
        </Wrapper>
    );
};
