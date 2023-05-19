import {useState} from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const addFeedback = type => {
        if (type === 'good') {
        setGood(prevGood => prevGood + 1);
        } else if (type === 'neutral') {
        setNeutral(prevNeutral => prevNeutral + 1);
        } else if (type === 'bad') {
        setBad(prevBad => prevBad + 1);
        }
    };

    const totalFeedback = good + neutral + bad;

    const positiveFeedback = () => {
        const totalReaction = totalFeedback;

        if (!totalReaction) return 0;

        return Math.round((good * 100) / totalReaction);
    };

    return (
        <div>
            <Section title="Please leave feedback">
                <FeedbackOptions onLeaveFeedback={addFeedback} options={['good', 'neutral', 'bad']}/>
            </Section>

            <Section title="Statistics">
                <div>
                    {!totalFeedback ? (<Notification message="There is no feedback" />) : (<Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={totalFeedback}
                        positivePercentage={positiveFeedback()}/>
                    )}
                </div>
            </Section>
        </div>
    );
}

export default App;