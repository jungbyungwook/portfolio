import { Home, About, Skills, Project } from "../../containers/";
import { useRef } from "react";
import { Wrapper } from "./Landing.style";

type LandingProps = {
    // name: string;
};

export const Landing = (props: LandingProps) => {
    const aboutRef = useRef(null);
    const scroll = (ref: any) => {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        // console.log(1);
    };
    const downClick = async () => {
        scroll(aboutRef);
    };

    return (
        <Wrapper>
            <Home downClick={downClick} />
            <About aboutRef={aboutRef} />
            <Skills />
            <Project />
        </Wrapper>
    );
};
