import {Button, Delete_container, DeleteContainer, Input} from "../../StyledComponent/adminPanel-style";

function Delete(props) {
    return (
        <>
            <DeleteContainer>
                <div>نام فیلمی که می خواهید حذف کنید را وارد کنید :</div>
                <Input/>
                <Button >حذف</Button>
            </DeleteContainer>


        </>
    );
}

export default Delete;