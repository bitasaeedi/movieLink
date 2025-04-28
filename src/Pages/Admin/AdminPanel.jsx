import {Container, Menu} from "../../StyledComponent/adminPanel-style";
import {NavLink, Outlet, useLocation} from "react-router-dom";
import Delete from "./Delete";

function AdminPanel(props) {
    return (
        <>

            <Menu>
                <img src={require('../../public/Group 14.png')} alt={'pro'}/>
                <nav>
                    <NavLink to={'/admin/addMovie'} activeClassName="active">افزودن فیلم</NavLink>
                    <NavLink to={'/admin/deleteMovie'} activeClassName="active">حذف فیلم</NavLink>
                    <NavLink to={'/admin/updateLink'} activeClassName="active">تغییر قیمت</NavLink>
                </nav>
            </Menu>
            <Outlet/>
        </>
    );
}

export default AdminPanel;