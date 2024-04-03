import { Title } from "./title";
import { SubTitle } from "./subTitle";

export const Header = () => {
    const obj = {
        titleMessage: "I'm a title",
        subTitleMessage: "react component h3",
        isAdmin: true,
        age: 2,
    };
    return (
        <div>
            <Title titleMessage={obj.titleMessage} getNumber={Math.random} />
            <SubTitle subTitleInfo={obj} />
        </div>
    );
};