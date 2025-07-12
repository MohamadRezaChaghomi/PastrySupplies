import React from 'react';
import './Table.css';

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  Paper,
} from '@mui/material';
import { FixedSizeList as List } from 'react-window';

function VirtualizedTable({ columns, data, rowHeight = 50, height = 400 }) {
  const Row = ({ index, style }) => {
    const row = data[index];
    return (
      <TableRow
        style={{
          ...style,
          display: 'flex',
          flexDirection: 'row', // ترتیب ستون‌ها حفظ می‌شود
          width: '100%',
          direction: 'rtl',
        }}
        key={index}
      >
        {columns.map((col, colIndex) => (
          <TableCell
            key={col.accessor}
            align="right"
            style={{
              flex: 1,
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              borderBottom: '1px solid rgba(224, 224, 224, 1)',
              boxSizing: 'border-box',
              textAlign: 'right',
            }}
          >
            {row[col.accessor]}
          </TableCell>
        ))}
      </TableRow>
    );
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ direction: 'rtl', width: '100%', maxWidth: 800 }}
    >
      <Table stickyHeader aria-label="virtualized table" sx={{ tableLayout: 'fixed' }}>
        <TableHead>
          <TableRow style={{ display: 'flex', flexDirection: 'row', direction: 'rtl', width: '100%' }}>
            {columns.map((col) => (
              <TableCell
                key={col.accessor}
                align="right"
                style={{ flex: 1, fontWeight: 'bold', whiteSpace: 'nowrap', textAlign: 'right' }}
              >
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <List
            height={height}
            itemCount={data.length}
            itemSize={rowHeight}
            width="100%"
            style={{ overflowX: 'hidden' }}
          >
            {Row}
          </List>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default VirtualizedTable;