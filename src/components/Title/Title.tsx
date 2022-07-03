import { Wrapper } from "./Title.style";
type TitleProps = {
    title: string;
};

export const Title = ({ title }: TitleProps) => {
    return <Wrapper>{title}</Wrapper>;
};
