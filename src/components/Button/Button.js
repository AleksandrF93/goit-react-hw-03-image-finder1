import s from '../Button/Button.module.css'
import PropTypes from 'prop-types';

export default function Button({onClickBtn}) {
  return (
    <button type="button" className={s.Button} onClick={onClickBtn}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClickBtn: PropTypes.func.isRequired,
};