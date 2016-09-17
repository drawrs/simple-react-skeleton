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
            			<div className="jumbotron" style={{textAlign:'center'}}>
            				<h1><span className="glyphicon glyphicon-gift"></span></h1>
            				<h4>Fork this repository on <a href="https://github.com/muhibbudins/simple-react-skeleton">Github</a> and submit issue if you found some error. Thank you</h4>
            			</div>
            		</div>
            	</div>
            </div>
        );
    }
});