import { Section } from './Section';
import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { useAddFeddBack } from 'hooks/useAddFeedBack';

const INITIAL_NAMES = {
  GOOD: 'good',
  NEUTRAL: 'neutral',
  BAD: 'bad'
}

export const App = () => {
  const [good, setGood] = useAddFeddBack(0);
  const [neutral, setNeutral] = useAddFeddBack(0);
  const [bad, setBad] = useAddFeddBack(0);

  const handleLeaveFeedback = event => {
    const value = event.target.textContent;

    if ((value === INITIAL_NAMES.GOOD)) setGood();
    if ((value === INITIAL_NAMES.NEUTRAL)) setNeutral();
    if ((value === INITIAL_NAMES.BAD)) setBad();
  };

  return (
    <div
      style={{
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.values(INITIAL_NAMES)}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {Object.values({good, neutral, bad}).some(el => el !== 0) ? (
          <Statistics options={{good, neutral, bad}} />
        ) : (
          <p>No feedback given</p>
        )}
      </Section>
    </div>
  );
};

export default App;
