import { Wrapper } from "./Footer.style";

type FooterProps = {
    props?: string;
};

export const Footer = ({ props }: FooterProps) => {
    return (
        <Wrapper>
            <span>Copyright 2022. jungbyungwook. All rights reserved.</span>

            <a href="mailto:korjby400@gmail.com">Contact</a>
        </Wrapper>
    );
};
