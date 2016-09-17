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
						<h3>Sample Form and Table</h3>
						<div className="input-group input-lg">
							<input type="text" className="form-control" placeholder="Search for..."/>
							<span className="input-group-btn">
								<button className="btn btn-default" type="button">Go!</button>
							</span>
						</div>
						<table className="table table-bordered table-striped">
						    <thead>
						        <tr>
						            <th>#</th>
						            <th>First Name</th>
						            <th>Last Name</th>
						            <th>Username</th>
						        </tr>
						    </thead>
						    <tbody>
						        <tr>
						            <th scope="row">1</th>
						            <td>Mark</td>
						            <td>Otto</td>
						            <td>@mdo</td>
						        </tr>
						        <tr>
						            <th scope="row">2</th>
						            <td>Jacob</td>
						            <td>Thornton</td>
						            <td>@fat</td>
						        </tr>
						        <tr>
						            <th scope="row">3</th>
						            <td>Larry</td>
						            <td>the Bird</td>
						            <td>@twitter</td>
						        </tr>
						    </tbody>
						</table>
					</div>
				</div>
            </div>
        );
    }
});