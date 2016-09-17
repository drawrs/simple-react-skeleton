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
    render : function() {
        return (
            <div className="app">
            	<Navbar/>
            	<div className="row">
            		<div className="col-md-12">
            			<div className="jumbotron">
            				<h3>Simple React Skeleton</h3>
            				<h4>Made with <span className="glyphicon glyphicon-heart"></span> from single man in saturday night :(. Just joke :v</h4>
            			</div>
            		</div>
            	</div>
            </div>
        );
    }
});