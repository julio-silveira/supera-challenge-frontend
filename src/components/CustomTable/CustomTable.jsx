import { Box } from '@mui/system'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { toBrDate, toBRL } from '../../helpers/toLocale'

const tableHeaders = ["Data", "Valor", "Tipo", "Nome operador transacionado"]

function CustomTable() {

  const { totalBalance, allTransactions, currentBalance } = useContext(AppContext)
  return (
    <TableContainer sx={{
      width: "80%",
      bgcolor: "#ffa726",
      color: "white"
    }}

    component={Paper}
    elevation="5"
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly'}}>
        <Typography py={2} variant='h5'>{`Saldo Total: ${toBRL(totalBalance)}`}</Typography>
        <Typography  py={2} variant='h5'>{`Saldo Atual: ${toBRL(currentBalance)}`}</Typography>
      </Box>
      <Table >
      <TableHead>
        <TableRow>
          {tableHeaders.map((head) =>(
            <TableCell sx={{fontWeight: 700 ,textAlign: 'center'}} key={head}>{head}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {allTransactions.map(({data, valor, tipo, nome})=> (
          <TableRow  hover key={`${data}${valor}`}>
            <TableCell sx={{textAlign:'center'}}>{toBrDate(data)}</TableCell>
            <TableCell sx={{textAlign:'center'}}>{toBRL(valor)}</TableCell>
            <TableCell sx={{textAlign:'center'}}>{tipo}</TableCell>
            <TableCell sx={{textAlign:'center'}}>{nome || "-"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      </Table>
    </TableContainer>
  )
}

CustomTable.propTypes = {
  children: PropTypes.node
}

export default CustomTable
