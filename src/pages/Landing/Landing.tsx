import { Home, About } from "../../containers/";

type LandingProps = {
    // name: string;
};

export const Landing = (props: LandingProps) => {
    return (
        <div>
            <Home />
            <About />
        </div>
    );
};
