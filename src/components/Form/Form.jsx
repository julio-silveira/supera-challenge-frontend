import { Box, Button, Stack, TextField } from '@mui/material'
import PropTypes from 'prop-types'

function Form() {
  return  <Box >
  <Stack direction="row">
    <TextField
      label="Data de início"
    />
    <TextField
      label="Data de fim"
    />
    <TextField
      label="Nome operador transacionado"
    />
  </Stack>
 <Button>Pesquisar</Button>
</Box>
}

Form.propTypes = {
  children: PropTypes.node
}

export default Form
