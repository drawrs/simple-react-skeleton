"use strict";

import React from 'react';

module.exports = React.createClass({
	componentWillMount() {
		// When component will be mount
	},
	componentDidMount() {
		// When component in mount process
		setTimeout(function() {
			$('a[data-toggle="modal"]').click(function(e) {
				e.preventDefault();
			});
		}.bind(this), 0);
	},
	componentWillUnmount() {
		// When component will be unmount / destroy
		$('.modal').remove();
	},
    render : function() {
        return (
        	<element>
				<nav className="navbar navbar-default">
				    <div className="container-fluid">
				        <div className="navbar-header">
				            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse" aria-expanded="false">
				                <span className="sr-only">Toggle navigation</span>
				                <span className="icon-bar"></span>
				                <span className="icon-bar"></span>
				                <span className="icon-bar"></span>
				            </button>
				            <a className="navbar-brand" href="#/">Home</a>
				        </div>
				        <div className="collapse navbar-collapse" id="collapse">
				            <ul className="nav navbar-nav">
				                <li><a href="#/search">Search</a></li>
				                <li><a href="" data-toggle="modal" data-target="#myModal">Modal</a></li>
				                <li><a href="#/about">About</a></li>
				            </ul>
				            <ul className="nav navbar-nav navbar-right">
				                <li><a href="#/github">Github</a></li>
				            </ul>
				        </div>
				    </div>
				</nav>
				<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
								<h4 className="modal-title" id="myModalLabel">Modal title</h4>
							</div>
							<div className="modal-body">
								Modal Content
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
								<button type="button" className="btn btn-primary">Save changes</button>
							</div>
						</div>
					</div>
				</div>
        	</element>
        );
    }
});