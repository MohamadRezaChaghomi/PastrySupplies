// AuthModal.jsx
import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent,
  Button, Box, TextField, Typography,
  Tabs, Tab, Divider, Stack, Checkbox, FormControlLabel
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './AuthModal.css';

const AuthModal = ({ open, onClose }) => {
  const [tab, setTab] = useState(0); // 0: login, 1: register
  const [rememberMe, setRememberMe] = useState(true);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (isAdminMode) {
      if (formData.email === 'admin' && formData.password === 'admin123') {
        alert('ورود ادمین موفق!');
        setError('');
        onClose();
      } else {
        setError('نام کاربری یا رمز عبور ادمین نادرست است.');
      }
    } else {
      alert(tab === 0 ? 'ورود موفق!' : 'ثبت‌نام موفق!');
      setError('');
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle className="modal-title">
        <Typography variant="subtitle2" color="textSecondary">
          {isAdminMode ? 'ادمین هستید؟' : 'کارفرما هستید؟'}
        </Typography>
        {!isAdminMode && (
          <Button className="admin-btn" onClick={() => setIsAdminMode(true)}>
            ورود ادمین
          </Button>
        )}
        {isAdminMode && (
          <Button onClick={() => setIsAdminMode(false)}>
            <ArrowBackIcon fontSize="small" />
          </Button>
        )}
      </DialogTitle>

      <DialogContent className="fade-in">
        <Stack spacing={2}>
          {!isAdminMode && (
            <>
              <Button
                variant="contained"
                fullWidth
                startIcon={<GoogleIcon />}
                sx={{ backgroundColor: '#4285F4', color: 'white', '&:hover': { backgroundColor: '#357ae8' } }}
              >
                ورود با گوگل
              </Button>
              <Button
                variant="contained"
                fullWidth
                startIcon={<LinkedInIcon />}
                sx={{ backgroundColor: '#0077b5', color: 'white', '&:hover': { backgroundColor: '#005f8e' } }}
              >
                ورود با لینکدین
              </Button>
              <Divider>یا</Divider>
              <Tabs
                value={tab}
                onChange={(_, newValue) => setTab(newValue)}
                variant="fullWidth"
                className="switch-buttons"
              >
                <Tab className={`switch-btn ${tab === 0 ? 'active' : ''}`} label="ورود کارجو" />
                <Tab className={`switch-btn ${tab === 1 ? 'active' : ''}`} label="ثبت‌نام کارجو" />
              </Tabs>
            </>
          )}

          <TextField
            name="email"
            label={isAdminMode ? 'نام کاربری ادمین' : 'آدرس ایمیل خود را وارد نمایید'}
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="password"
            type="password"
            label="رمز عبور خود را وارد نمایید"
            value={formData.password}
            onChange={handleChange}
            fullWidth
          />

          {!isAdminMode && (
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
              }
              label="مرا به خاطر نگه دار!"
              sx={{ alignSelf: 'start' }}
            />
          )}

          {error && <Typography className="error-message">{error}</Typography>}

          <Button
            className="submit-btn"
            fullWidth
            onClick={handleSubmit}
          >
            {isAdminMode ? 'ورود ادمین' : tab === 0 ? 'وارد شوید' : 'ثبت‌نام کنید'}
          </Button>

          {!isAdminMode && tab === 0 && (
            <Button variant="text" color="primary" size="small">
              بازیابی رمز عبور
            </Button>
          )}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
