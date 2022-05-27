import PropTypes from "prop-types";
import s from "./ErrorView.module.css";

function ErrorView({ error }) {
  return (
    <div role="alert" className={s.wrapper}>
      <p className={s.text}>{error}</p>
    </div>
  );
}

ErrorView.propTypes = {
  texterror: PropTypes.string.isRequired,
};

export default ErrorView;
