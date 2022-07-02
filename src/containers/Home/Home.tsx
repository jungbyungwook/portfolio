import { useState, useEffect } from "react";
import { Wrapper, Typing, Down } from "./Home.style";
type HomeProps = {
    prop?: string;
    onClick?: (prop: string) => void;
};

export const Home = ({ prop }: HomeProps) => {
    const letter: string = "Web Developer JungByungwook";
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setText(text + letter[count]);
            setCount(count + 1);
        }, 100);
        if (count === letter.length) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    });

    return (
        <Wrapper>
            <Typing>{text}</Typing>
            <Down>
                <span />
            </Down>
        </Wrapper>
    );
};
