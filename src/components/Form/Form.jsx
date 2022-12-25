import { Box, Button, Paper, Stack, TextField } from '@mui/material'
import PropTypes from 'prop-types'
import { useContext } from 'react';
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { fetchAllTransactions } from '../../helpers/fetch';
import getBalance from '../../helpers/getBalance';
import supera from '../../assets/supera.svg'

function Form() {
  const {setAllTransactions, setCurrentBalance} = useContext(AppContext)
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
    const newBalance = getBalance(data)
    setAllTransactions(data)
    setCurrentBalance(newBalance)
    setStartingDate('')
    setEndingDate('')
    setName('')
  }


  return  (
  <Paper
    component="form"
    onSubmit={handleSubmit}
    sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
        my:2,
        bgcolor: "#ffa726",
      }} >
        <img width="250px" src={supera} />
    <Stack direction="row" spacing={1} py={2}>
      <TextField
        onChange={handleStartingDate}
        value={startingDate}
        variant='standard'
        helperText="Data de início"
        type="date"
        color='warning'

      />
      <TextField
        onChange={handleEndingDate}
        value={endingDate}
        variant='standard'
        helperText="Data de fim"
        type="date"
        color='warning'
      />
      <TextField
        onChange={handleName}
        value={name}
        variant='standard'
        helperText="Nome operador transacionado"
        color='warning'
      />
    </Stack>
    <Button
      type='submit'
      variant='contained'
      color='warning'
      sx={{
        bgcolor: 'black'
      }}
    >
      Pesquisar
    </Button>
  </Paper>)
}

Form.propTypes = {
  children: PropTypes.node
}

export default Form
