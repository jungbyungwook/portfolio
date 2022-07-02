import { Home, About, Skills, Project } from "../../containers/";

type LandingProps = {
    // name: string;
};

export const Landing = (props: LandingProps) => {
    return (
        <div>
            <Home />
            <About />
            <Skills />
            <Project />
        </div>
    );
};
