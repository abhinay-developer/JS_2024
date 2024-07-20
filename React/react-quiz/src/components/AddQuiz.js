import { useState } from "react";
import ViewQuiz from "./ViewQuiz";

function AddQuiz() {

    const [question, setQuestion] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [answer, setAnswer] = useState(null);
    const [questionList, setQuestionList] = useState([]);

    const handleAddQuiz = (e) => {
        e.preventDefault();
        const ans = Number(answer);
        const form = { question, option1, option2, option3, option4, ans };
        setQuestionList(prev => [...prev, form]);
    }

    return (
        <main>
            <form onSubmit={(e) => handleAddQuiz(e)}>
                <div className='add-quiz'>
                    <h1>Add Quiz</h1>
                    <div>
                        <input type="text" placeholder='Enter Question' onChange={(e) => setQuestion(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" placeholder='Option 1' onChange={(e) => setOption1(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" placeholder='Option 2' onChange={(e) => setOption2(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" placeholder='Option 3' onChange={(e) => setOption3(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" placeholder='Option 4' onChange={(e) => setOption4(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" placeholder='Enter Answer' onChange={(e) => setAnswer(e.target.value)} />
                    </div>
                    <div>
                        <button type='submit' className='btn-quiz'>Add Quiz</button>
                    </div>
                </div>
            </form>
            <section>
                <ViewQuiz questionList={questionList} setQuestionList={setQuestionList} />
            </section>
        </main>
    )
}

export default AddQuiz;