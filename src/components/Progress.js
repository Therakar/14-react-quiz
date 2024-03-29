import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();

  return (
    <header className="progress">
      {/* If there is no answer, then is false, 
      so Number() will convert that fault to a 0, BUT if there is an answer
      Number will convert it to 1 that gets summed to the index.
      I do that so that the bar gets updated as the user gives the answer
      and not by clicking to the next button.  */}
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
