import {Container} from "../StyledComponent/payment-style";

function Unsuccessful(props) {
    return (
        <>
            <Container>
                <img alt={'x'} src={require('../public/x.png')}/>
                <div>پرداخت موفقیت آمیز نبود.</div>
            </Container>
        </>
    );
}

export default Unsuccessful;