import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import PropTypes from 'prop-types'
import response from '../../data/response'

const tableHeaders = ["Data", "Valor", "Tipo", "Nome operador transacionado"]

function CustomTable() {


  return (
    <TableContainer>
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
            <TableCell>{data}</TableCell>
            <TableCell>{valor}</TableCell>
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
