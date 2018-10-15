import React from 'react';
import { Provider, connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

import routes from '@/routes';

import store from '@/configureStore';

import NoMatch from '@/components/pages/NoMatch';

// partials
import VisibleSidebar from '@/components/containers/VisibleSidebar';
import VisibleNavbar from '@/components/containers/VisibleNavbar';
import VisibleFooter from '@/components/containers/VisibleFooter';


class Root extends React.Component {

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

    componentDidUpdate(prevProps) {
        const body = document.body;

        if ( prevProps.isSidebarHide !== this.props.isSidebarHide ) {
            body.classList.remove('is-show-mobile');
            if ( this.props.isSidebarHide ) {
                body.classList.add('is-hide');
            } else {
                body.classList.remove('is-hide');
            }
        }

        if ( prevProps.isSidebarShowMobile !== this.props.isSidebarShowMobile ) {
            body.classList.remove('is-hide');
            if ( this.props.isSidebarShowMobile ) {
                body.classList.add('is-show-mobile');
            } else {
                body.classList.remove('is-show-mobile');
            }
        }



    }

    render() {
        const routeComponents = routes.map( (route, key) => <Route exact path={route.path} component={route.component} key={key}/> );
        return (
            <BrowserRouter>
                <React.Fragment>
                        <VisibleSidebar />
                        <VisibleNavbar />
                        <div className="container-fluid" style={ {width: 'auto', paddingBottom: '70px'} }>
                            <Switch>
                                {routeComponents}
                                <Route component={NoMatch} />
                            </Switch>
                        </div>
                    <VisibleFooter />
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isSidebarHide: state.UI.isSidebarHide,
        isSidebarShowMobile: state.UI.isSidebarShowMobile,
    }
}

Root = connect(mapStateToProps)(Root);

export default Root;


if (document.getElementById('app')) {
    ReactDOM.render(
        <Provider store={store}>
            <Root />
        </Provider>,
        document.getElementById('app'));
}
