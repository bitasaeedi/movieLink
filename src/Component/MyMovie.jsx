import {Movie} from "../StyledComponent/myMovie-styled";

function MyMovie(props) {
    let movies=[
        {
            img:require('../public/titi.png'),
            name:'تی تی',
            link:"https://dl11.uploding.fun/Movies4/2022/titi_2022/_480p_BrRip_YIFY.mkv",
            quality:' 480p'
        },
        {
            img:require('../public/tabestan.png'),
            name:'تابستان داغ',
            link:"https://dl11.uploding.fun/Movies4/2021/The_Medium_2021/The_Medium_2021_720p_BrRip_YIFY.mkv",
            quality:'720p'
        },
        {
            img:require('../public/freeguy.png'),
            name:'Free Guy',
            link:"https://dl11.uploding.fun/Movies4/2021/The_FreeGuy2023/The_FreeGuy_2023_1080p_BrRip_YIFY.mkv",
            quality:'1080p'
        },
        {
            img:require('../public/khafegi.png'),
            name:'خفه گی',
            link:"https://dl11.uploding.fun/Movies4/2021/The_khafegi2019/The__khafegi2019_720p_BrRip_YIFY.mk",
            quality:'720p'
        },
    ]
    return (
       <>
           {movies.map((movie,index)=>{
               return <Movie>
                   <img src={movie.img} alt={movie.name}/>
                   <div className={'info'}>
                       <div className="name">{movie.name}</div>
                       <div className={"title"}>لینک خریداری شده : </div>
                       <div className="link">{movie.link}</div>
                       <div className="quality"><span>کیفیت : </span>{movie.quality}</div>
                   </div>
               </Movie>
           })
           }
       </>
    );
}

export default MyMovie;