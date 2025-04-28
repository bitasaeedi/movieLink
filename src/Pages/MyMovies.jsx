import {MyMovies_Container, Path} from "../StyledComponent/myMovie-styled";
import MyMovie from "../Component/MyMovie";

function MyMovies() {
    return (
        <>
            <Path>
                <img src={require("../public/home.png")} alt='home'/>
                <div className={"text1"}>صحفه اصلی{">"}</div>
                <div className={"text2"}>لیست فیلم های خریداری شده</div>
            </Path>
            <MyMovies_Container>
                <MyMovie/>
            </MyMovies_Container>
        </>
    );
}

export default MyMovies;