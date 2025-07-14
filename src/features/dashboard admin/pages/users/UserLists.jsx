import React from 'react';
import { CssBaseline, Container, Typography, Card, CardContent, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import pinkTheme from '../../../../themes/pinkTheme';
import VirtualizedTable from '../../components/table/Table';
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

import './UserLists.css';

const userColumns = [
  { id: 'name', label: 'نام', minWidth: 150 },
  { id: 'email', label: 'ایمیل', minWidth: 200 },
  { id: 'role', label: 'نقش', minWidth: 100 },
];

const users = [
  { id: 1, name: 'علی رضایی', email: 'ali@example.com', role: 'مدیر' },
  { id: 2, name: 'مریم احمدی', email: 'maryam@example.com', role: 'کارمند' },
  { id: 3, name: 'حسین موسوی', email: 'hossein@example.com', role: 'کاربر' },
  ...Array.from({ length: 1000 }, (_, i) => ({
    id: i + 4,
    name: `کاربر ${i + 4}`,
    email: `user${i + 4}@example.com`,
    role: i % 2 === 0 ? 'کارمند' : 'کاربر',
  })),
];

const UserListPage = () => {
  return (
    <ThemeProvider theme={pinkTheme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 6, direction: 'rtl' }}>
        <Box className="user-list-title">
          <PermIdentityIcon className="user-icon" fontSize="large" sx={{ mr: 1, color: 'primary.main' }}/>
          <Typography variant="h4" component="h1" className="user-title-text" >
           کاربران
          </Typography>
        </Box>

        <Card className="user-table-card animated-fadein" >
          <CardContent>
            <VirtualizedTable columns={userColumns} data={users} height={500} />
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default UserListPage;
