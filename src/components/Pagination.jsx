import React from 'react';
import { DiVim } from 'react-icons/di';

const Pagination = ({ totalUsers, usersPerPage, paginate }) => {
  const pageNum = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNum.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNum.map((num) => (
          <li key={num}>
            <a onClick={() => {
              paginate(num)
            }} href="#!">{num}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
