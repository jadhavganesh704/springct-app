import React, { Component } from 'react';
import Input from '../../shared/input';
import Button from '../../shared/button';
import history from './../../history';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            phoneno: '',
            role: 'admin',
            username: '',
            password: '',
            errorUsername: '',
            errorPassword: '',
        };
    }

    handleChange = event => {
        console.log('===>', this.state.role)
        this.setState({
            [event.target.name]: event.target.value,
            errorUsername: '',
            errorPassword: ''
        });
    };

    validation = (username, password) => {
        if (username === '') {
            this.setState({
                errorUsername: 'Required',
            })
            return true;
        }
        if (password === '') {
            this.setState({
                errorPassword: 'No password provided.'
            })
            return true;
        }
        return false;
    }
    handleSubmit = event => {
        event.preventDefault();
        const { username, password, role } = this.state;
        if (!this.validation(username, password)) {
            // console.log("Submitting");
            localStorage.setItem('is-login', username);
            localStorage.setItem('isRole', role);

            history.push('/dashboard');

        }

    };
    render() {
        return (
            <div>
                <div className="ui center aligned middle aligned grid" style={{ height: '100vh' }}>
                    <div className="column" style={{ maxWidth: 450 }}>
                        <div className="ui form" size='large'>
                            <div className="ui segment">
                                <div className="field">
                                    <Input
                                        name="name"
                                        fluid
                                        icon='user'
                                        iconPosition='left'
                                        placeholder='Name'
                                        value={this.state.email}
                                        handleChange={this.handleChange}
                                    />
                                </div>
                                <div className="field">
                                    <Input
                                        name="address"
                                        fluid
                                        icon='home'
                                        iconPosition='left'
                                        placeholder='Address'
                                        value={this.state.email}
                                        handleChange={this.handleChange}
                                    />
                                </div>
                                <div className="field">
                                    <Input
                                        name="phoneno"
                                        type="number"
                                        fluid
                                        icon='phone'
                                        iconPosition='left'
                                        placeholder='Phone Number'
                                        value={this.state.email}
                                        handleChange={this.handleChange}
                                    />
                                </div>
                                <div className="field">
                                    {/* <label>Role</label> */}
                                    <select
                                        className="ui fluid dropdown"
                                        value={this.state.role}
                                        onChange={e => this.setState({ role: e.target.value })}
                                    >
                                        <option value="admin">Admin</option>
                                        <option value="normal">Normal</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <Input
                                        name="username"
                                        fluid
                                        icon='user'
                                        iconPosition='left'
                                        placeholder='Username'
                                        value={this.state.username}
                                        handleChange={this.handleChange}
                                        errors={this.state.errorUsername}
                                    />
                                </div>
                                <div className="field">
                                    <Input
                                        name="password"
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Password'
                                        type='password'
                                        value={this.state.password}
                                        handleChange={this.handleChange}
                                        errors={this.state.errorPassword}
                                    />
                                </div>
                                <Button color='teal' fluid size='large' value="Login" handleSubmit={this.handleSubmit} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default LoginForm