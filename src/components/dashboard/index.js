import React from 'react'
import Header from '../../shared/header';
import UserList from '../user-list';
import history from './../../history';


const DashboardComponent = () => {
    return (
        <div className="ui container" style={{ marginTop: '30px' }}>
            <Header />
            <div className="ui grid">
                <div className="left floated two wide column">
                    <div className="title">List of Users</div>
                </div>
                {localStorage.getItem('isRole') === 'admin' &&
                    <div className="right floated two wide column">
                        <div className="ui small positive button" onClick={() => history.push('/addUser')}>Add User</div>
                    </div>}
            </div>
            <br />
            {/* User list*/}
            <UserList />
        </div>
    )
}
export default DashboardComponent;