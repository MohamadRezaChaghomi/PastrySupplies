import React from 'react';
import {
  CssBaseline,
  Container,
  Typography,
  Stack,
  ThemeProvider,
  Box,
} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import pinkTheme from '../../../../themes/pinkTheme';
import './Message.css';

const mockMessages = [
  {
    id: 1,
    sender: 'علی رضایی',
    subject: 'سفارش کیک تولد',
    preview: 'سلام، من می‌خواستم درباره کیک تولد سفارشی سوال کنم...',
    date: '۱۴۰۳/۰۴/۲۰',
  },
  {
    id: 2,
    sender: 'مانی احمدی',
    subject: 'تشکر بابت خدمات',
    preview: 'واقعا خوشمزه بود کیکی که تهیه کرده بودید. خواستم فقط تشکر کنم...',
    date: '۱۴۰۳/۰۴/۲۱',
  },
  {
    id: 3,
    sender: 'رضا کاظمی',
    subject: 'سفارش کیک عروسی',
    preview: 'سلام، میشه لطفا قیمت کیک عروسی رو بهم بدید؟',
    date: '۱۴۰۳/۰۴/۲۲',
  },
];

const MessagesPage = () => {
  return (
    <ThemeProvider theme={pinkTheme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 6, direction: 'rtl' }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          className="messages-header"
        >
          <ChatBubbleOutlineIcon className="messages-icon" />
          <Typography className="messages-title-text" variant="h4" component="h1">
            پیام‌ها
          </Typography>
        </Stack>

        <Box className="messages-list">
          {mockMessages.map((msg, index) => (
            <Box
              key={msg.id}
              className="message-card"
              style={{ animationDelay: `${index * 150}ms` }} // اینجا تاخیر می‌ذاریم
            >
              <Typography variant="h6" className="message-sender">
                {msg.sender} - <span className="message-date">{msg.date}</span>
              </Typography>
              <Typography className="message-subject" variant="subtitle1">
                {msg.subject}
              </Typography>
              <Typography className="message-preview" variant="body2">
                {msg.preview}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default MessagesPage;
