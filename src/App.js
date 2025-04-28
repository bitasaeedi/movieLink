import MyMovies from "./Pages/MyMovies";
import './StyledComponent/global.css'
import Unsuccessful from "./Pages/Unsuccessful";
import Successful from "./Pages/successful";
import Detail from "./Pages/Detail";
import AdminPanel from "./Pages/Admin/AdminPanel";
import {Route, Routes} from "react-router-dom";
import AddMovie from "./Pages/Admin/AddMovie";
import Delete from "./Pages/Admin/Delete";
import UpdateLinks from "./Pages/Admin/UpdateLinks";
import MyMovie from "./Component/MyMovie";
function App() {
    return (
        <>

            <div className="wrapper">
                <Routes>
                    <Route path='/' element={<Detail/>}/>
                    <Route path='/successful' element={<Successful/>}/>
                    <Route path='/detail' element={<Detail/>}/>
                    <Route path='/unsuccessful' element={<Unsuccessful/>}/>

                    <Route  path='/admin' element={<AdminPanel/>}>
                        <Route path='addMovie' element={<AddMovie/>}/>
                        <Route path='deleteMovie' element={<Delete/>}/>
                        <Route path='updateLink' element={<UpdateLinks/>}/>
                    </Route>

                </Routes>
            </div>
        </>);
}

export default App;
