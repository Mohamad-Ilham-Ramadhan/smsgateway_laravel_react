import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '@/components/pages/Login';
import Dashboard from '@/components/pages/Dashboard';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';


class Root extends React.Component {

    render() {
        return (
            <BrowserRouter>
            	<div>
                    <Navbar />
                    <Sidebar />
            		<Route path='/dashboard' component={Dashboard} />
            	</div>
            </BrowserRouter>
        );
    }
}

export default Root;


if (document.getElementById('app')) {
    ReactDOM.render(<Root />, document.getElementById('app'));
}
