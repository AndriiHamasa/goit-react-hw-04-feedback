import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ options }) => {
  const getTotal = () =>
    Object.values(options).reduce((acc, number) => (acc += number), 0);

  const getPosFeed = () => {
    const countGood = options.good;
    if (getTotal() !== 0) {
      return Math.round((countGood / getTotal()) * 100);
    }
  };

  return (
    <ul className={css.list}>
      <li className={css.text}>Good: {options.good}</li>
      <li className={css.text}>Neutral: {options.neutral}</li>
      <li className={css.text}>Bad: {options.bad}</li>
      <li className={css.text}>Total: {getTotal()}</li>
      <li className={css.text}>Positive feedback: {getPosFeed()}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
