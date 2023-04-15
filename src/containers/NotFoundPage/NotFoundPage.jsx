import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import img from '@static/not-found.png';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
    let location = useLocation();
    
    return (
        <>
            <img className={styles.img} src={img} alt="Not Found"/>
            <div className={styles.text}>Page Not Found</div>
            <div className={styles.text}>No match for <span>{location.pathname}</span> </div>
            <NavLink className={styles.link} to="/" end>Home</NavLink>
        </>
    )
}

export default NotFoundPage;
