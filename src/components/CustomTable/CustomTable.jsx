import { Box } from '@mui/system'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import response from '../../data/response'
import { toBrDate, toBRL } from '../../helpers/toLocale'

const tableHeaders = ["Data", "Valor", "Tipo", "Nome operador transacionado"]

function CustomTable() {

  const { totalBalance } = useContext(AppContext)
  return (
    <TableContainer>
      <Box>
        <Typography variant='body1'>{`Saldo Total: ${toBRL(totalBalance)}`}</Typography>
      </Box>
      <Table>
      <TableHead>
        <TableRow>
          {tableHeaders.map((head) =>(
            <TableCell key={head}>{head}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {response.map(({data, valor, tipo, nome})=> (
          <TableRow key={`${data}${valor}`}>
            <TableCell>{toBrDate(data)}</TableCell>
            <TableCell>{toBRL(valor)}</TableCell>
            <TableCell>{tipo}</TableCell>
            <TableCell>{nome}</TableCell>
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
