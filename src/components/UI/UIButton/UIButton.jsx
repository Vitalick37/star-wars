import PropTypes from 'prop-types';
import styles from './UIButton.module.css';
import '../index.css';
import cn from 'classnames';

const UIButton = ({text, onClick, theme='dark', classes}) => {
    return (
        <button 
            className={cn(styles.button, styles[theme], classes)}
            onClick={onClick}

        >{text}</button>
    )
}

UIButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    theme: PropTypes.string,
    classes: PropTypes.string,
}

export default UIButton;