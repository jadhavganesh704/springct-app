import React, { Component, Fragment } from 'react';
import Input from '../../shared/input';
import Button from '../../shared/button';
import getUserListData from '../../user-list-api';
import Modal from '../../shared/modal';

import history from './../../history';

class AddUser extends Component {
    state = {
        ismodal: false,
        userListData: getUserListData,
        name: '',
        phoneno: null,
        address: '',
        errorName: '',
        errorPhoneno: '',
        errorAddress: '',
    };

    handleSubmit = () => {
        const { userListData, address, name, phoneno } = this.state;
        const newUser = {
            "id": userListData && userListData[userListData.length - 1].id + 1,
            "name": name,
            "phoneno": phoneno,
            "address": address,
            "role": 'normal',
        }
        userListData.push(newUser);
        history.push('/dashboard');
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            errorName: '',
            errorPhoneno: '',
            errorAddress: '',
        });
    };

    addUser = () => {
        console.log('====>')
        const { name, phoneno,address } = this.state;
        console.log('====>', name, phoneno,address)
        if(name === "") {
            this.setState({errorName: 'Enter the Name'})
        } else  if(phoneno === null || phoneno === undefined || phoneno === '') {
            this.setState({errorPhoneno: 'Enter the Phone Number'})
        } else  if(address === '') {
            this.setState({errorAddress: 'Enter the Address'})
        } else {
            this.setState({ ismodal: true })
        }
    }
    render() {
        return (
            <Fragment>
                {this.state.ismodal && <Modal handleSubmit={this.handleSubmit}/>}
                <div className="ui center aligned middle aligned grid" style={{ height: '100vh' }}>
                    <div className="column" style={{ maxWidth: "50%" }}>
                        <div className="ui form" size='large'>
                            <div className="ui segment">
                                <div className="field">
                                    <Input
                                        name="name"
                                        fluid
                                        icon='user'
                                        iconPosition='left'
                                        placeholder='Name'
                                        value={this.state.name}
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
                                        value={this.state.address}
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
                                        value={this.state.phone}
                                        handleChange={this.handleChange}
                                    />
                                </div>
                                <Button color='teal' fluid size='large' value="Submit" handleSubmit={this.addUser} />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default AddUser;