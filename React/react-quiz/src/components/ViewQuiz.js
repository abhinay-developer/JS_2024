import React from 'react'

export default function ViewQuiz({ questionList, setQuestionList }) {
    const handleDelete = (index) => {//0             0!== 0         [1,2,3,4,5]==> 2,4
        const questions = questionList.filter((_, i) => index !== i);
        setQuestionList(questions);
    }

    return (
        <>
            <div className='view-quiz'>
                {
                    questionList && questionList.map((question, index) => <ul> 0 1 2
                        <h2>
                            {index + 1}.{question.question}
                        </h2>
                        <li>{question.option1}</li>
                        <li> {question.option2}</li>
                        <li>{question.option3}</li>
                        <li>{question.option4}</li>
                        <li><button type="button" onClick={() => handleDelete(index)}>Delete</button></li>
                    </ul>)
                }
            </div>
        </>
    )
}
