import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import './SiteGlobalSettings.css';

const SiteGlobalSettings = () => {
  const [siteInfo, setSiteInfo] = useState({
    footer: '',
    logoUrl: '',
  });

  const handleChange = (e) => {
    setSiteInfo({ ...siteInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert('تنظیمات سایت ذخیره شد!');
  };

  return (
    <>
      <h3 className="site-global-title">تنظیمات کلی سایت</h3>
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
