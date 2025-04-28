import {Container} from "../StyledComponent/payment-style";

function Successful(props) {
    return (
       <>
           <Container type={'successful'}>
               <img src={require('../public/successful.png')} alt={'successful'}/>

               <div>
                   <h6>با موفقیت پرداخت شد.</h6>
                   <div>لینک فیلم خریداری شده :</div>
                   <div className={'link'}>https://dl11.uploding.fun/Movies4/2021/The_Medium_2021/The_Medium_2021_720p_BrRip_YIFY.mkv</div>
                   <a href={'/mymovies'}>مشاهده لیست فیلم های خریداری شده من</a>
               </div>
           </Container>
       </>
    );
}

export default Successful;