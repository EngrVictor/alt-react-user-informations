import React from 'react';
import { ImLocation, ImPhone, ImUser } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { BsFillCalendarDateFill } from 'react-icons/bs';

const Users = ({ users, loading }) => {
  if (loading)
    return (
      <center>
        <img src="https://flevix.com/wp-content/uploads/2019/07/Curve-Loading.gif" />
      </center>
    );

  return (
    <div className="container">
      {users.map((user) => (
        <div className="user-card" key={user.id.name}>
          <img src={user.picture.large} className="image" />
          <div className="text-cont">
            <h2>
              {user.name.title} {user.name.first} {user.name.last}
            </h2>
            <ul>
              <li>
                <ImLocation />
                <h3>
                  {user.location.state}, {user.location.country}
                </h3>
              </li>
              <li>
                <ImPhone />
                <h3>{user.phone}</h3>
              </li>
              <li>
                <MdEmail />
                <h3>{user.email}</h3>
              </li>
              <li>
                <ImUser />
                <h3>{user.gender}</h3>
              </li>
              <li>
                <BsFillCalendarDateFill />
                <h3>{user.dob.age} years</h3>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default Users;
