import PropTypes from 'prop-types';
import styles from './PeoplePage.module.css';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import PeopleList from '@components/PeoplePage/PeopleList';
import { Navigate } from "react-router-dom";


const PeoplePage = (props) => {


    const peopleList = props.people.map(({name, url}) => {

        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
            id,
            name,
            img,
            }
        }
    )

    if(props.isError) return <Navigate to="/error"/> 
    
    return (
        <> 
            {peopleList.length > 0 && <PeopleList {...props} people={peopleList}/>}
        </>
    )
}

PeoplePage.propTypes = {
    people: PropTypes.array,
}

export default PeoplePage;