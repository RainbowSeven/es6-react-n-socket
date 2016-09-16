import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory}  from  'react-router';

import APP from './components/APP';
import Audience from './components/Audience';
import Speaker from './components/Speaker';
import Board from './components/Board';
import Whoops404 from './components/Whoops404';


ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={APP}>
                <IndexRoute component={Audience} />
                <Route name="speaker" path="speaker" component={Speaker} />
                <Route name="board" path="board" component={Board} />
                <Route name="not-found" path="*" component={Whoops404} />
            </Route>
        </Router>
        ), document.getElementById('react-container'));
