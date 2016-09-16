import React from 'react';
import ReactDOM from 'react-dom';

class JoinSpeaker extends React.Component {
    constructor () {
        super();
        this.start = this.start.bind(this);
    }

    start() {
        const name = ReactDOM.findDOMNode(this.refs.name).value;
        const title = ReactDOM.findDOMNode(this.refs.title).value;
        this.props.emit('start', { name, title});
    }

    render() {
        return (
            <form action="javascript:void(0)" onSubmit={this.start}>
                <label>Full Name</label>
                <input ref="name"
                    className="form-control"
                    placeholder="enter your full name..."
                    required
                />
                <label>Presentation title</label>
                <input ref="title"
                    className="form-control"
                    placeholder="enter a title for this presentation..."
                    required
                />
                <button className="btn btn-primary">Join</button>
            </form>
        );
    }
}


export default JoinSpeaker;
