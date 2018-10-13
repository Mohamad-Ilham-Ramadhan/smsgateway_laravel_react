import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '@/components/pages/Login';
import Dashboard from '@/components/pages/Dashboard';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';


class Root extends React.Component {

    state = {
        isHideSidebar: false,
        isShowSidebar: false,
    }

    toggleSidebar = (e) => {
        e.preventDefault();
        if ( window.innerWidth >= 768) {
            this.setState({
                isHideSidebar: !this.state.isHideSidebar,
                isShowSidebar: false
            });
            document.body.classList.toggle('is-hide');
            document.body.classList.remove('is-show');
        } else if ( window.innerWidth <= 767 ) {
            this.setState({
                isShowSidebar: !this.state.isShowSidebar,
                isHideSidebar: false
            });
            document.body.classList.toggle('is-show');
            document.body.classList.remove('is-hide');
        }
    }

    render() {
        const { isHideSidebar, isShowSidebar } = this.state;
        return (
            <BrowserRouter>
            	<div>
                    <Navbar isShow={isShowSidebar} toggleSidebar={this.toggleSidebar}/>
                    <Sidebar isHide={isHideSidebar} isShow={isShowSidebar}/>
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
