import React, { useState } from 'react'

export default function QuizStarted({ questionList }) {
    const [counter, setCounter] = useState(0);
    const [scoreCard, setScoreCard] = useState(0);

    const nextQuestion = () => {
        setCounter(prev => prev + 1);
    }

    const handleQuestion = (selectedValue) => {//A function with access to its own scope, the scope of the outer function, and the global scope
        questionList.filter((question) => {
            if (question.answer === selectedValue) {
                setScoreCard(prev => prev + 1);
            }
        })

        //5  FAIL  5-7  GOOD  8-9  VERY GOOD  10 EXCELLENT
    }

    return (
        <div className='view-quiz'>
            {           //10 >=  (0+1)=1 ==>  10 >=1=true
                //10>=11 ==false
                questionList.length >= (counter + 1) ? <div>

                    <ul>
                        <h2>{counter + 1} . {questionList[counter].question}</h2>
                        <li><input type="radio" name='option'
                            onChange={() => handleQuestion(questionList[counter].option1)}
                        />
                            {questionList[counter].option1}
                        </li>
                        <li> <input type="radio" name='option' onChange={() => handleQuestion(questionList[counter].option2)} />
                            {questionList[counter].option2}
                        </li>
                        <li> <input type="radio" name='option' onChange={() => handleQuestion(questionList[counter].option3)} />
                            {questionList[counter].option3}
                        </li>
                        <li> <input type="radio" name='option' onChange={() => handleQuestion(questionList[counter].option4)} />
                            {questionList[counter].option4}
                        </li>
                    </ul>
                    <button type='button' className='btn-quiz' onClick={() => nextQuestion()}>
                        {questionList.length === (counter + 1) ? 'COMPLETE' : 'NEXT'}
                        {/* 10  ===  0+1 =1 //NEXT
                               2
                               9+1=10 */}
                    </button>
                </div> : <div>
                    <h1>Happy Coding !!! Quiz Completed  Your Score is {scoreCard} / {questionList.length}</h1>
                </div>
            }
        </div>
    )
}
