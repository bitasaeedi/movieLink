import {Button, Input, UpdateContainer} from "../../StyledComponent/adminPanel-style";
import {Info} from "../../StyledComponent/Detail-style";

function UpdateLinks(props) {
    return (
        <>
            <UpdateContainer>
                <div>قیمت لینک  480p:</div>
                <Input/>
                <div>قیمت لینک  720p:</div>
                <Input/>
                <div>قیمت لینک  1080p:</div>
                <Input/>
                <Button type={'updatePage'} > تغییر قیمت ها</Button>
            </UpdateContainer>
        </>
    );
}

export default UpdateLinks;