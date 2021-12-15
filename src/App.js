import React from 'react';

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
  return (
    <div>
      <Exercise
        data={data}
        isCorrect={null}
        onAnswerUpdata={() => {}}
        onExerciseSubmit={() => {}}
        answer={[]}
      />
    </div>
  );
};

export default App;
