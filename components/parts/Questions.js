import React from 'react';

function ask(question, emit) {
    emit('ask', question);
}

function addQuestions(questions, emit) {
    return questions.map((question, i) => 
        <div key={i} className="col-xs-12 col-sm-6 col-md-3">
            <span onClick={ask.bind(null, question, emit)}>{question.q}</span>
        </div>
    );
}

function Questions({questions, emit}) {
    return (
        <div id="questions" className="row">
            <h2>Questions</h2>
            {addQuestions(questions, emit)}
        </div>
    );
}

export default Questions;