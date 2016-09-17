import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import Home from './Component/Home';
import Search from './Component/Search';
import About from './Component/About';
import Github from './Component/Github';
import NotFound from './Component/NotFound';

global.$ = global.jQuery = window.jQuery = require('../assets/js/jquery.min.js');
require('../assets/js/bootstrap.min.js');

ReactDom.render(
    <Router history={hashHistory}>
    	<Route path="/" component={Home}/>
    	<Route path="/search" component={Search}/>
    	<Route path="/about" component={About}/>
    	<Route path="/github" component={Github}/>
	    <Route path="*" component={NotFound}/>
    </Router>,
    document.getElementById('app')
);