import css from "./Feedback.module.css";

export const Feedback = ({ rates: { good, neutral, bad } }) => {
  const totalFeedback = good + bad + neutral;
  const positiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);

  if (totalFeedback > 0) {
    return (
      <div>
        <ul className={css.list}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive: {positiveFeedback}%</li>
        </ul>
      </div>
    );
  }
  return <p>No feedback yet</p>;
};
