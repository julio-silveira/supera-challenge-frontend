import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Box, Button, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import { Form } from './components/Form'
import { CustomTable } from './components/CustomTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box >
      <Form />
      <CustomTable />
    </Box>
  )
}

export default App
