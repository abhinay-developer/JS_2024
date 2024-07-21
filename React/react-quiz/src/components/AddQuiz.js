import { useState } from "react";
import ViewQuiz from "./ViewQuiz";
import QuizStarted from "./QuizStarted";

const javascriptQuestions = [
    {
        question: "What is a closure in JavaScript?",
        option1: "A function with access to its own scope, the scope of the outer function, and the global scope",
        option2: "A function that is immediately invoked",
        option3: "A function that has no access to variables outside its own scope",
        option4: "A function that is used only within another function",
        answer: "A function with access to its own scope, the scope of the outer function, and the global scope"
    },
    {
        question: "Explain the concept of 'hoisting' in JavaScript.",
        option1: "A mechanism where variables and functions are moved to the top of their scope before code execution",
        option2: "A technique of adding multiple event listeners to an element",
        option3: "A method of optimizing code by caching variables",
        option4: "A process of assigning default values to variables",
        answer: "A mechanism where variables and functions are moved to the top of their scope before code execution"
    },
    {
        question: "What is the difference between '==' and '===' in JavaScript?",
        option1: "Both are used for strict comparison",
        option2: "'==' compares values, while '===' compares values and types",
        option3: "'==' compares values and types, while '===' only compares values",
        option4: "There is no difference",
        answer: "'==' compares values, while '===' compares values and types"
    },
    {
        question: "What does the 'this' keyword refer to in JavaScript?",
        option1: "The global object",
        option2: "The current object",
        option3: "The function in which it is used",
        option4: "The parent object",
        answer: "The current object"
    },
    {
        question: "What is an Immediately Invoked Function Expression (IIFE)?",
        option1: "A function that is defined and executed later",
        option2: "A function that is defined and executed immediately",
        option3: "A function that can only be called once",
        option4: "A function that is passed as an argument",
        answer: "A function that is defined and executed immediately"
    },
    {
        question: "What is the purpose of the 'use strict' directive in JavaScript?",
        option1: "To enable modern JavaScript syntax",
        option2: "To catch common coding mistakes and 'unsafe' actions",
        option3: "To make the code run faster",
        option4: "To allow the use of newer features",
        answer: "To catch common coding mistakes and 'unsafe' actions"
    },
    {
        question: "What is event delegation in JavaScript?",
        option1: "A technique to add multiple event listeners to an element",
        option2: "A pattern to handle events at a higher level in the DOM",
        option3: "A way to delay event handling until a condition is met",
        option4: "A method to prevent the default event action",
        answer: "A pattern to handle events at a higher level in the DOM"
    },
    {
        question: "What is the difference between 'null' and 'undefined' in JavaScript?",
        option1: "'null' means a variable has no value, 'undefined' means a variable has not been assigned a value",
        option2: "'undefined' means a variable has no value, 'null' means a variable has not been assigned a value",
        option3: "'null' and 'undefined' are interchangeable",
        option4: "There is no difference",
        answer: "'null' means a variable has no value, 'undefined' means a variable has not been assigned a value"
    },
    {
        question: "What is the purpose of the 'bind' method in JavaScript?",
        option1: "To permanently bind an event to an element",
        option2: "To create a new function with a specific 'this' context",
        option3: "To bind multiple functions together",
        option4: "To handle asynchronous operations",
        answer: "To create a new function with a specific 'this' context"
    },
    {
        question: "What is the event loop in JavaScript?",
        option1: "A loop that runs continuously to check for and execute events",
        option2: "A loop that executes synchronous code",
        option3: "A mechanism to prevent infinite loops",
        option4: "A method to handle errors in asynchronous code",
        answer: "A loop that runs continuously to check for and execute events"
    }
];



function AddQuiz() {

    const [question, setQuestion] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [answer, setAnswer] = useState('');
    const [questionList, setQuestionList] = useState(javascriptQuestions);
    const [isStartQuiz, setIsStartQuiz] = useState(false);

    const handleAddQuiz = (e) => {
        e.preventDefault();
        // const ans = Number(answer);
        const form = { question, option1, option2, option3, option4, answer };
        setQuestionList(prev => [...prev, form]);
        setQuestion("");
        setOption1('');
        setOption2('');
        setOption3('');
        setOption4('');
        setAnswer('');
    }

    const startQuiz = () => {
        console.log("Quiz started");
        setIsStartQuiz(true);
    }

    return (
        <main>
            <form onSubmit={(e) => handleAddQuiz(e)}>
                <div className='add-quiz'>
                    <h1>Add Quiz</h1>
                    <div>
                        <input type="text" placeholder='Enter Question' value={question} onChange={(e) => setQuestion(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" placeholder='Option 1' value={option1} onChange={(e) => setOption1(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" placeholder='Option 2' value={option2} onChange={(e) => setOption2(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" placeholder='Option 3' value={option3} onChange={(e) => setOption3(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" placeholder='Option 4' value={option4} onChange={(e) => setOption4(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" placeholder='Enter Answer' value={answer} onChange={(e) => setAnswer(e.target.value)} />
                    </div>
                    <div>
                        <button type='submit' className='btn-quiz'>Add Quiz</button>
                    </div>
                </div>
            </form>
            <div>
                <button type="button" className='btn-quiz' style={{ width: '20%' }} onClick={() => startQuiz()}>
                    {!isStartQuiz ? 'Start Quiz' : 'Quiz Started'}
                </button>
            </div>
            <section>

                {/* {
                    isStartQuiz && <ViewQuiz questionList={questionList} setQuestionList={setQuestionList} />
                } */}

                {
                    isStartQuiz && <QuizStarted questionList={questionList} />
                }

            </section>
        </main>
    )
}

export default AddQuiz;