import React, { useState } from 'react';

import Exercise from './components/exercise/Exercise';
import './App.css';
const data = {
  id: 27,
  order: 1,
  documents: [
    { type: 'TEXT', id: 1, value: '바나나' },
    { type: 'TEXT', id: 2, value: '고구마는 맛있다.' },
    { type: 'TEXT', id: 3, value: '당근은 맛있다.' },
    { type: 'TEXT', id: 4, value: '우유는 맛있다.' },
  ],
  name: '다음 중 틀린 것은?',
};

const App = () => {
  const [answer, setAnswer] = useState([]);
  return (
    <div>
      <Exercise
        data={data}
        answer={answer}
        isCorrect={null}
        onAnswerUpdate={(e) => {
          const { value } = e.target;
          setAnswer((prevAnswer) => {
            const answer = [...prevAnswer];
            if (answer.find((elem) => elem === value)) {
              return answer.filter((elem) => elem !== value);
            } else {
              answer.push(value);
            }
            return answer;
          });
        }}
        onExerciseSubmit={() => {}}
      />
    </div>
  );
};

export default App;
