import React from 'react';
import { CssBaseline, Container, Typography, Card, CardContent, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import pinkTheme from '../../../../themes/pinkTheme';
import VirtualizedTable from '../../components/table/Table';
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import DashboardLayout from '../../components/dashboardLayout/DashboardLayout';

import './UserLists.css';

const userColumns = [
  { id: 'name', label: 'نام', minWidth: 150 },
  { id: 'email', label: 'ایمیل', minWidth: 200 },
  { id: 'role', label: 'نقش', minWidth: 100 },
];

const users = [
  ...Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: `کاربر ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: i % 2 === 0 ? 'کارمند' : 'کاربر',
  })),
];

const UserListPage = () => {
  return (
    <ThemeProvider theme={pinkTheme}>
      <CssBaseline />
      <DashboardLayout title="کاربران" icon={PermIdentityIcon}>
        <Card className="user-table-card animated-fadein" >
          <CardContent>
            <VirtualizedTable columns={userColumns} data={users} height={500} />
          </CardContent>
        </Card>
      </DashboardLayout>
    </ThemeProvider>
  );
};

export default UserListPage;
