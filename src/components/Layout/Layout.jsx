import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

// const setActive = ({isActive}) => isActive ? 'active_link' : '';

const Layout = () => {
    return (
        <>
            <header>
                <NavLink  to="/" end>Home</NavLink>
                <NavLink  to="/people">People</NavLink>
            </header>

            <Outlet />
        </>
    )
}


export default Layout;