// src/pages/UsersPage.js
import React from 'react';
import SimpleTable from '../../../../components/Table/Table';

function Category() {
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
    <div style={{ padding: '20px' }}>
      <h2>لیست دست بندی ها </h2>
      <SimpleTable columns={columns} data={data} />
    </div>
  );
}

export default Category;
