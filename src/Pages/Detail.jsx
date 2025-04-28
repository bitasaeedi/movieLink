import {Container, Info, LinkBox, Path, Summary} from "../StyledComponent/Detail-style";

function Detail(props) {
    return (
        <>
            <Path>
                <img src={require("../public/home.png")} alt='home'/>
                <div className={"text1"}>صحفه اصلی{">"}</div>
                <div className={"text2"}>خفه گی</div>
            </Path>

            <Container>

                <img src={require('../public/kh.jpg')} alt={'movie'}/>
                <Info>
                    <div>
                        <h6>خفه گی</h6>
                        <span>| درام</span>
                    </div>
                    <div className={'time'}>
                        <img src={require("../public/clock.png")} alt='clock'/>
                        2 ساعت و 10دقیقه
                    </div>
                    <div className={'actors'}>
                        <div>کارگردان : فریدون جیرانی</div>
                        <div>
                            <div>بازیگران:</div>
                            <div>الناز شاکردوست</div>
                            <div>نوید محمدزاده</div>
                            <div>پردیس احمدیه</div>
                        </div>
                    </div>
                    <div className="year"> سال تولید :1399</div>


                </Info>
            </Container>
            <Summary>
                <h6> خلاصه فیلم :</h6>
                صحرا مشرقی (الناز شاکردوست) پرستار بیمارستان روانی، مجرد
                و در آستانه میانسالی ست. داستان فیلم از جایی آغاز می‌شود که زن جوانی بنام نسیم (پردیس احمدیه) که ظاهراً
                مشکل روانی پیدا کرده
                را شوهرش مسعود (نوید محمدزاده) به تیمارستان جهت بستری می‌آورد،
                صحرا در همان ابتدا پی به مرموز بودن مسئله می‌برد و اوضاع را تماماً غیرعادی می‌بیند او با مشاهده
                رفتارهای این زن به حقایقی عجیب از زندگی او دست میابد و ناخواسته درگیر زندگی آن‌ها می‌شود و تصمیم می‌گیرد
                به او کمک کند اما...
            </Summary>
            <LinkBox>
                <h6>خرید لینک</h6>
                <div>
                    <div>
                        <div>کیفیت 480p</div>
                        <div>10,000 تومان</div>
                        <button>پرداخت</button>
                    </div>
                    <div className='center'>
                        <div>کیفیت 480p</div>
                        <div>15,000 تومان</div>
                        <button>پرداخت</button>
                    </div>
                    <div>
                        <div>کیفیت 480p</div>
                        <div>20,000 تومان</div>
                        <button>پرداخت</button>
                    </div>
                </div>
            </LinkBox>

        </>
    );
}

export default Detail;