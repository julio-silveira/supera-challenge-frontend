import { Box, Button, Stack, TextField } from '@mui/material'
import PropTypes from 'prop-types'
import { useState } from 'react'

function Form() {
  const [startingDate, setStartingDate] = useState('');
  const [endingDate, setEndingDate] = useState('');
  const [name, setName] = useState('');

  const handleStartingDate = ({target: {value}}) => setStartingDate(value)
  const handleEndingDate = ({target: {value}}) => setEndingDate(value)
  const handleName = ({target: {value}}) => setName(value)

  const handleSubmit = (event) => {
    event.preventDefault()
  }


  return  (
  <Box component="form" onSubmit={handleSubmit} >
    <Stack direction="row" spacing={1}>
      <TextField
        onChange={handleStartingDate}
        value={startingDate}
        variant='standard'
        helperText="Data de início"
        type="date"

      />
      <TextField
        onChange={handleEndingDate}
        value={endingDate}
        variant='standard'
        helperText="Data de fim"
        type="date"
      />
      <TextField
        onChange={handleName}
        value={name}
        variant='standard'
        helperText="Nome operador transacionado"
      />
    </Stack>
    <Button
      type='submit'
      variant='contained'
      color='success'
    >
      Pesquisar
    </Button>
  </Box>)
}

Form.propTypes = {
  children: PropTypes.node
}

export default Form
