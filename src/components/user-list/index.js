import React, { Fragment } from 'react';
import getUserListData from '../../user-list-api';

const UserList = () => {
    return(
        <Fragment>
            <form className="ui form">
                <div className="ui bottom attached segment">
                    <table id="myTable" className="ui sortable celled table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getUserListData && getUserListData.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.phoneno}</td>
                                    <td>{item.address}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </form>
        </Fragment>
    );
}

export default UserList;