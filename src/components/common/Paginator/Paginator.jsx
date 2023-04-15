import PropTypes from "prop-types";
import styles from "./Paginator.module.css";
import { useState, useEffect } from "react";

import UIButton from "@ui/UIButton/";

const Paginator = ({ pageSize, totalPeopleCount, currentPage, onPageChanged, portionSize}) => {

    useEffect(()=> {
        setPortionNumber(Math.ceil(currentPage/portionSize))
    },[currentPage]);

    let pagesCount = Math.ceil(totalPeopleCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;


    return (
    <>

        <div className={styles.container}>

        {portionNumber > 1 && <UIButton onClick={() => setPortionNumber(portionNumber - 1)} text={'Prev'}/>}

        <ul className={styles.list__pages}>
        {pages
            .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
            .map((e, index) => {
            return (
            <li
                onClick={() => { onPageChanged(e)}}
                className={ currentPage === e ? styles.item__pages_active : styles.item__pages}
                key={index}
            >
                {e}
            </li>
            );
        })}
        </ul>

        {portionCount > portionNumber && <UIButton onClick={() => setPortionNumber(portionNumber + 1)} text={'Next'}/>}

        </div>


    </>
    );
};

Paginator.propTypes = {
    text: PropTypes.string,
};

export default Paginator;
