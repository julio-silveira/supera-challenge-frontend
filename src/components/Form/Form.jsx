import { Box, Button, Stack, TextField } from '@mui/material'
import PropTypes from 'prop-types'
import { useContext } from 'react';
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { fetchAllTransactions } from '../../helpers/fetch';

function Form() {
  const {setAllTransactions} = useContext(AppContext)
  const [startingDate, setStartingDate] = useState('');
  const [endingDate, setEndingDate] = useState('');
  const [name, setName] = useState('');
  const location = useLocation();

  const handleStartingDate = ({target: {value}}) => setStartingDate(value)
  const handleEndingDate = ({target: {value}}) => setEndingDate(value)
  const handleName = ({target: {value}}) => setName(value)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const id = location.pathname.split("/")[1] || 1
    const data = await fetchAllTransactions({id, startingDate, endingDate, name})
    setAllTransactions(data)
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
