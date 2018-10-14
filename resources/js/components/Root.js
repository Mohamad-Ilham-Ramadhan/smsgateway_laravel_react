import React from 'react';
import { Provider, connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

import routes from '@/routes';

import store from '@/configureStore';

import NoMatch from '@/components/pages/NoMatch';

// partials
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


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
        const { isHideSidebar, isShowSidebar, noMatch } = this.state;
        const routeComponents = routes.map( (route, key) => <Route exact path={route.path} component={route.component} key={key}/> );
        return (
            <BrowserRouter>
                <React.Fragment>
                        <Sidebar isHide={isHideSidebar} isShow={isShowSidebar}/>
                        <Navbar isShow={isShowSidebar} toggleSidebar={this.toggleSidebar}/>
                        <Switch>
                            {routeComponents}
                            <Route component={NoMatch} />
                        </Switch>
                    <Footer />
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default Root;


if (document.getElementById('app')) {
    ReactDOM.render(
        <Provider store={store}>
            <Root />
        </Provider>,
        document.getElementById('app'));
}
