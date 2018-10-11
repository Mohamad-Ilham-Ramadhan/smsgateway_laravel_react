import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Login extends Component {
    render() {
        return (
            <section className="is-fullheight bg-gray-200">
                <div className="container is-fullheight">
                    <div className="row align-items-center is-fullheight">
                        <div className="col">
                            <h1 className="text-center h2 font-weight-bold">
                                Puskesmas Rau
                            </h1>
                            <h1 className="text-center h2 font-weight-light">
                                SMS Gateway
                            </h1>

                            <form
                                action="{{ base_url() }}login/authenticate"
                                method="POST"
                                className="form-login"
                            >
                                <input
                                    type="hidden"
                                    name="{{ csrf_token_name }}"
                                    value="{{ csrf_hash }}"
                                />
                                <div className="form-group icons-right">
                                    <input
                                        name="username"
                                        type="text"
                                        className="form-control"
                                        required
                                    />
                                    <span className="icon is-right">
                                        <i className="fas fa-user" />
                                    </span>
                                </div>
                                <div className="form-group icons-right">
                                    <input
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        required
                                    />
                                    <span className="icon is-right">
                                        <i className="fas fa-lock" />
                                    </span>
                                </div>
                                <div className="form-row clearfix">
                                    <div className="col-6">
                                        <div className="custom-control custom-checkbox float-left">
                                            <input
                                                name="remember_me"
                                                type="checkbox"
                                                value="TRUE"
                                                className="custom-control-input"
                                                id="rememberMe"
                                            />
                                            <label
                                                className="custom-control-label"
                                                for="rememberMe"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <button
                                            className="btn btn-primary float-right"
                                            type="submit"
                                        >
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

if ( document.getElementById('login')) {
    ReactDOM.render(
        <Login />,
        document.getElementById('login')
    );
}
