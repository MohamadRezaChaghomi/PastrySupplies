// src/pages/UserListPage.jsx
import React from 'react';
import { CssBaseline, Container, Typography, Stack } from '@mui/material';
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { ThemeProvider } from '@mui/material/styles';
import pinkTheme from '../../../../themes/pinkTheme';
import VirtualizedTable from '../../components/table/Table';

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
        <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={1} sx={{ mb: 2 }}>
          <Typography variant="h4" color="primary">
            لیست کاربران
          </Typography>
          <PermIdentityIcon color="primary" fontSize="large" />
        </Stack>
        <VirtualizedTable columns={userColumns} data={users} height={500} />
      </Container>
    </ThemeProvider>
  );
};

export default UserListPage;
