import React from 'react';
import Display from './parts/Display';
import  rd3 from 'rd3';

const BarChart = rd3.BarChart;

function barGraphData(results) {
    const data = {values: []};
    Object.keys(results).map(function(choice) {
        data.values.push({'x': choice, 'y': results[choice]});
    });
    return [data];
}

function Board({status, currentQuestion, results}) {
    return (
        <div id="scoreboard">
            <Display if={status === 'connected' && currentQuestion}>
                <BarChart data={barGraphData(results)} 
                    title={currentQuestion.q}
                    height={window.innerHeight * 0.6}
                    width={window.innerWidth * 0.9}
                />
            </Display>

            <Display if={status === 'connected' && !currentQuestion}>
                <h3>Awaiting a question...</h3>
            </Display>
        </div>
    );
};

export default Board;
