import {AddMovieContainer, Button, Input, Input2, TextArea} from "../../StyledComponent/adminPanel-style";

function AddMovie(props) {
    return (
       <>
           <AddMovieContainer>
               <div className='info'>

                   <div className='right_section'>
                       <div>نام فیلم :</div>
                       <Input2/>
                       <div>نام بازیگران :</div>
                       <Input2 margin/>
                       <Input2 margin/>
                       <Input2 margin/>
                       <div>امتیاز</div>
                       <Input2/>
                   </div>

                   <div className='left_section'>
                       <div>نام کارگردان :</div>
                       <Input2/>
                       <div>ژانر :</div>
                       <Input2/>
                       <div>مدت زمان :</div>
                       <Input2/>
                       <div>کشور سازنده :</div>
                       <Input2/>
                   </div>
               </div>
               <div>خلاصه :</div>
               <TextArea/>
               <div>لینک 480p :</div>
               <Input2 width/>
               <div>لینک 720p :</div>
               <Input2 width/>
               <div>لینک 1080p :</div>
               <Input2 width/>
               <Button >تایید</Button>
           </AddMovieContainer>
       </>
    );
}

export default AddMovie;