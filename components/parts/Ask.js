import React from 'react';
import Display from './Display';

const buttonTypes =[
    'primary',
    'success',
    'warning',
    'danger',
];

class Ask extends React.Component {
    constructor() {
        super();
        this.state = {
            choices: [],
            answer: undefined,
        };
        this.addChoiceButtons = this.addChoiceButtons.bind(this);
        this.select = this.select.bind(this);
    }

    componentWillMount() {
        this.setUpChoices();
    }

    componentWillReceiveProps() {
        this.setUpChoices();
    }

    setUpChoices() {
        const choices = Object.keys(this.props.question);
        choices.shift();
        this.setState({choices, answer: sessionStorage.answer});

    }

    select(question, choice, emit) {
        emit('answer', {
            choice,
            question,
        });
        this.setState({answer: choice});
        sessionStorage.answer = choice;
    }


    addChoiceButtons(question, emit) {
        return this.state.choices.map((choice, i) =>
            <button key={i} 
                className={`col-xs-12 col-sm-6 btn btn-${buttonTypes[i]}`}
                onClick={this.select.bind(null, question, choice, emit )}
            >
                {choice}: {question[choice]}
            </button>
        );
    }

    render() {
        const {question, emit} =  this.props;
        const {choices, answer} = this.state;
        return (
            <div id="currentQuestion">
                <Display if={answer}>
                    <h3>You answered: {answer} </h3>
                    <p>{question[answer]}</p>
                </Display>

                <Display if={!answer}>
                    <h2>{question.q}</h2>
                    <div className="row">
                        {this.addChoiceButtons(question, emit)}
                    </div>
                </Display>
            </div>
        );
    }
}

export default Ask;
