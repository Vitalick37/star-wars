import React, { Suspense, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './PersonPage.module.css';
import { Navigate } from 'react-router';
import { getPeopleImage } from '@services/getPeopleData';
import Preloader from '@components/common/Preloader/Preloader';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhotoContainer from '@components/PersonPage/PersonPhoto/PersonPhotoContainer';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';
// import PersonFilms from '@components/PersonPage/PersonFilms';

const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'));


const PersonPage = ({person, isError, id, personFavorite, setPersonFavorite}) => {

    let personInfo = [
        { title: 'Height', data: person.height },
        { title: 'Mass', data: person.mass },
        { title: 'Hair Color', data: person.hair_color },
        { title: 'Skin Color', data: person.skin_color },
        { title: 'Eye Color', data: person.eye_color },
        { title: 'Birth Year', data: person.birth_year },
        { title: 'Gender', data: person.gender },
    ];
    let personName = String(person.name);
    let personPhoto = getPeopleImage(id);
    let personFilms = person.films;
    

    if(isError) return <Navigate to="/error"/> 

    return (
        <>
        <PersonLinkBack />

        <div className={styles.wrapper}>
            <span className={styles.person__name}>{personName}</span>
            <div className={styles.container}>

                <PersonPhotoContainer
                    personId={id}
                    personPhoto={personPhoto}
                    personName={personName}
                    personFavorite={personFavorite}
                    setPersonFavorite={setPersonFavorite}
                />

                {personInfo && <PersonInfo personInfo={personInfo} />}
                {personFilms && (
                    <Suspense fallback={<Preloader />}>
                        <PersonFilms personFilms={personFilms} />
                    </Suspense>
                )}
            </div>
        </div>
        </>
    )
}

PersonPage.propTypes = {
    // match: PropTypes.string,
}

export default PersonPage;