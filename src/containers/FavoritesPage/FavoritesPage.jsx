
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import PeopleList from '@components/PeoplePage/PeopleList';

import styles from './FavoritesPage.module.css';

const FavoritesPage = () => {
    const [people, setPeople] = useState([]);

    const personFavoriteDate = useSelector(state => state.personFavorite);

    useEffect(() => {
        const arr = Object.entries(personFavoriteDate);

        if (arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    ...item[1]
                }
            })

            setPeople(res);
        }
    }, []);

    return (
        <>
            <h1 className="header__text">Favorites</h1>
            {people.length
                ? <PeopleList people={people} />
                : <h2 className={styles.comment}>No data</h2>
            }
        </>
    )
}

export default FavoritesPage;