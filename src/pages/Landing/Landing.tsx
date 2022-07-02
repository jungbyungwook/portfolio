import { Home, About, Skills } from "../../containers/";

type LandingProps = {
    // name: string;
};

export const Landing = (props: LandingProps) => {
    return (
        <div>
            <Home />
            <About />
            <Skills />
        </div>
    );
};
