import React from 'react';
import VirtualizedTable from '../../../../components/Table/Table';
import './UserLists.css';

function UserLists() {
  const columns = [
    { label: 'شماره', accessor: 'number' },
    { label: 'نام کاربر', accessor: 'name' },
    { label: 'ایمیل', accessor: 'email' },
  ];

  const data = new Array(1000).fill(0).map((_, i) => ({
    number: `${i + 1}`,
    name: `کاربر ${i + 1}`,
    email: `user${i + 1}@example.com`,
  }));

  return (
    <div className="user-list-page">
      <h2 className="user-list-title"> لیست کاربران</h2>
      <div className="table-fade-in">
        <VirtualizedTable columns={columns} data={data} />
      </div>
    </div>
  );
}

export default UserLists;