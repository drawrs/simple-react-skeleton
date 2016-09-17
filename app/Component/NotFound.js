"use strict";

import React from 'react';
import Navbar from '../Directive/Navbar';

module.exports = React.createClass({
	componentWillMount() {
		// When component will be mount
	},
	componentDidMount() {
		// When component in mount process
	},
	componentWillUnmount() {
		// When component will be unmount / destroy
	},
	_backTo(e) {
		e.preventDefault();
		window.history.back(-1);
	},
    render : function() {
        return (
            <div className="app">
            	<Navbar/>
            	<div className="row">
            		<div className="col-md-12">
        				<h3>Upps, Something wrong!</h3>
        				<h4>This page cannot be displayed, please back to <a href="" onClick={this._backTo}>previous page</a></h4>
            		</div>
            	</div>
            </div>
        );
    }
});