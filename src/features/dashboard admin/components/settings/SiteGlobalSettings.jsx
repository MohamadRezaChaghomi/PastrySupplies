// src/components/settings/SiteGlobalSettings.jsx
import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';

const SiteGlobalSettings = () => {
  const [siteInfo, setSiteInfo] = useState({
    footer: '© همه حقوق محفوظ است.',
    logoUrl: '',
  });

  const handleChange = (e) => {
    setSiteInfo({ ...siteInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // ارسال به سرور
    alert('تنظیمات سایت ذخیره شد!');
  };

  return (
    <>
      <h3 style={{ color: '#e91e63', marginBottom: '16px' }}>تنظیمات کلی سایت</h3>
      <Stack spacing={2}>
        <TextField
          label="آدرس لوگو (URL)"
          name="logoUrl"
          value={siteInfo.logoUrl}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="متن فوتر"
          name="footer"
          value={siteInfo.footer}
          onChange={handleChange}
          fullWidth
          multiline
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          ذخیره تنظیمات
        </Button>
      </Stack>
    </>
  );
};

export default SiteGlobalSettings;
