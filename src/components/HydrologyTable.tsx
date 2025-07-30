import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import DataHour from '../interface/DataHour';

interface HydrologyTableProps {
  data: DataHour[] | null;
  loading: boolean;
  error: string | null;
}

export default function HydrologyTable({ data, loading, error }: HydrologyTableProps) {
  const rows = data ?? [];

  if (loading) {
    return <Typography>Cargando datos...</Typography>;
  }
  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Fecha</TableCell>
              <TableCell align="center">Mazar</TableCell>
              <TableCell align="center">Molino</TableCell>
              <TableCell align="center">Sopladora</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length ? (
              rows.map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.Fecha}
                  </TableCell>
                  <TableCell align="center">{row.Mazar}</TableCell>
                  <TableCell align="center">{row.Molino}</TableCell>
                  <TableCell align="center">{row.Sopladora}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">No hay datos</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      
    </>
  );
}

