import PropTypes from 'prop-types';
import styles from './PeopleList.module.css';
import Paginator from '@components/common/Paginator/Paginator';
import { Link, NavLink } from 'react-router-dom';

const PeopleList = ({people, pageSize, totalPeopleCount, currentPage, onPageChanged, portionSize}) => {

    return (
        <>
        <Paginator pageSize={pageSize} totalPeopleCount={totalPeopleCount} onPageChanged={onPageChanged} currentPage={currentPage} portionSize={portionSize}/>

        <ul className={styles.list__container}>
            {people.map(({ id, name, img }) => 
                <li className={styles.list__item} key={id}>
                    <NavLink to={`${id}`}>
                        <img className={styles.person__photo} src={img} alt={name} />
                        <p>{name}</p>
                    </NavLink>
                </li>
            )}
        </ul>
        </>
    )
}

PeopleList.propTypes = {
    people: PropTypes.array,
}

export default PeopleList;