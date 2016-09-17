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
            				<h3>Hello World!</h3>
            				<h4>Simple react skeleton ready to use..</h4>
            			</div>
            			<p>See full <a href="https://github.com/muhibbudins/simple-react-skeleton">docs</a> in <a href="https://github.com/muhibbudins/simple-react-skeleton">github</a>.</p>
            		</div>
            	</div>
            </div>
        );
    }
});