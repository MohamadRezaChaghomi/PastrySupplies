import React from 'react';
import { Paper, Typography, useTheme } from '@mui/material';
import { TableVirtuoso } from 'react-virtuoso';
import './Table.css';

const VirtualizedTable = ({ columns, data, height = 400 }) => {
  const theme = useTheme();

  // تعریف متغیرهای CSS پویا برای رنگ‌ها از تم
  React.useEffect(() => {
    document.documentElement.style.setProperty('--primary-main', theme.palette.primary.main);
    document.documentElement.style.setProperty('--primary-light', theme.palette.primary.light);
    document.documentElement.style.setProperty('--bg-paper', theme.palette.background.paper);
  }, [theme]);

  return (
    <Paper
      className="virtualizedTable"
      style={{ height }}
      elevation={3}
    >
      <TableVirtuoso
        data={data}
        style={{ height, width: '100%' }}
        components={{
          Table: (props) => <table {...props} />,
          TableHead: (props) => <thead {...props} />,
          TableRow: (props) => <tr {...props} />,
          TableBody: React.forwardRef(({ style, children }, ref) => (
            <tbody ref={ref} style={style}>
              {children}
            </tbody>
          )),
        }}
        fixedHeaderContent={() => (
          <tr>
            {columns.map((column) => (
              <th key={column.id} style={{ minWidth: column.minWidth }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {column.label}
                </Typography>
              </th>
            ))}
          </tr>
        )}
        itemContent={(index, row) =>
          columns.map((column) => (
            <td key={column.id}>{row[column.id]}</td>
          ))
        }
      />
    </Paper>
  );
};

export default VirtualizedTable;
