import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Wrapper, Typing, Down } from "./Home.style";
type HomeProps = {
    prop?: string;
    onClick?: (prop: string) => void;
    downClick: any;
};

export const Home = ({ prop, downClick }: HomeProps) => {
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
            <Down onClick={downClick}>
                <span />
            </Down>
        </Wrapper>
    );
};
