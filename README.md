# Simple React Skeleton
Simple React JS Skeleton with simple route and component currently just for view only, next update will can be connect to API / Database. 

## How to use?
Follow this step to use or install the skeleton :
- Install Node JS from official website https://nodejs.org/en/
- Open `CMD` or `Terminal`
- Go to `htdocs` or `www` folder
- Install `Gulp` with Node JS just run `npm install -g gulp`
- Clone this repo `git clone https://github.com/muhibbudins/simple-react-skeleton.git`
- Go to folder `simple-react-skeleton`
- Run `npm install`
- Finally run `gulp`
- Open browser with URL http://localhost/simple-react-skeleton/

## Simple Docs
This skeleton including React, React Router, React DOM, jQuery and Bootstrap.

### Include Component
Include all component inside `autoload.js` using ES6 syntax `import`
```
import Home from './Component/Home';
import Search from './Component/Search';
import About from './Component/About';
import Github from './Component/Github';
import NotFound from './Component/NotFound';
```

### Router
You can see route inside `autoload.js`
```
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
```

### Component
Sample for simple component syntax.
```
"use strict";

// Include React
import React from 'react';

// Include another component like directive
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
            			Hello World!
            		</div>
            	</div>
            </div>
        );
    }
});
```

## Change log
- 9/17/2016 : Initial project just view skeleton

## License
This project under MIT License
