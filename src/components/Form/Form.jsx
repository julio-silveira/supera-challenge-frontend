import { Box, Button, Stack, TextField } from '@mui/material'
import PropTypes from 'prop-types'

function Form() {
  return  <Box >
  <Stack direction="row" spacing={1}>
    <TextField
      variant='standard'
      helperText="Data de início"
      type="date"

    />
    <TextField
      variant='standard'
      helperText="Data de fim"
      type="date"
    />
    <TextField
      variant='standard'
      helperText="Nome operador transacionado"
    />
  </Stack>
 <Button variant='contained' color='success' >Pesquisar</Button>
</Box>
}

Form.propTypes = {
  children: PropTypes.node
}

export default Form
