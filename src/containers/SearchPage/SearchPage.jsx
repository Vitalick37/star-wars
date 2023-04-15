import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import Preloader from '@components/common/Preloader/Preloader';

import UiInput from '@ui/UiInput';
// import SearchPageInfo from '@components/SearchPage/SearchPageInfo';

import { getPeopleImage, getPeopleId } from '@services/getPeopleData';

import styles from './SearchPage.module.css';

const SearchPageInfo = React.lazy(() => import('@components/SearchPage/SearchPageInfo'));



const SearchPage = () => {
    
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [people, setPeople] = useState([]);


    const getApiResource = async (url) => {
        try {
            const res = await fetch(url);

            if (!res.ok) {
                console.error('Could not fetch.', res.status);
                return false;
            }
    
            return await res.json();
        } catch (error) {
            console.error('Could not fetch.', error.message);
            return false;
        }
    }

    const getResponse = async param => {
        const res = await getApiResource(`https://swapi.dev/api/people/?search=${param}`);


        if(res) {
            const peopleList = res.results.map(({ name, url}) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);
                
                return {
                    id,
                    name,
                    img,
                }
            });

            setPeople(peopleList);
        }
        
    };

    useEffect(() => {
        getResponse('');
    }, []);


    const debouncedGetResponse = useCallback(
        debounce(value => getResponse(value), 300),
        []
    );
        


    const handleInputChange = value => {
        setInputSearchValue(value);
        debouncedGetResponse(value);
    }

    return (
        <>
            <h1 className="header__text">Search</h1>

            <UiInput
                value={inputSearchValue}
                handleInputChange={handleInputChange}
                placeholder="Input character's name"
                classes={styles.input__search}
            />
            <Suspense fallback={<Preloader />}>
                <SearchPageInfo people={people} />
            </Suspense>
        </>
    )
}

SearchPage.propTypes = {
	setErrorApi: PropTypes.func,
}

export default SearchPage;