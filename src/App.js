import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Users from './components/Users';
import Pagination from './components/Pagination';
import './style.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3);

  useEffect(() => {
    setLoading(true);
    fetch('https://randomuser.me/api/?results=50')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = pageNum => {
    setCurrentPage(pageNum)
  }

  return (
    <div>
      <header>
        {' '}
        <h1 style={{ textAlign: 'center', margin: '0 0 20px 0' }}>
          User's Information
        </h1>
      </header>
      <Users users={currentUser} loading={loading} />
      <Pagination totalUsers={users.length} usersPerPage={usersPerPage} paginate={paginate}/>
    </div>
  );
};

export default App;
