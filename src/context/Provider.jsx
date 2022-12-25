import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import AppContext from './AppContext';
import { useLocation } from 'react-router-dom';
import { fetchAllTransactions } from '../helpers/fetch';



function Provider(props) {
  const { children } = props
  const location = useLocation()
  const [totalBalance, setTotalBalance] = useState(20);
  const [allTransactions, setAllTransactions] = useState([]);

  useEffect(()=>{
    async function getAllTransactions() {
      const id = location.pathname.split("/")[1] || 1
      const data = await fetchAllTransactions({id})
      setAllTransactions(data)
    }
    getAllTransactions()
  },[location])

  return(
    <AppContext.Provider value={{
      totalBalance,
      setTotalBalance,
      allTransactions,
      setAllTransactions
    }}>
      {children}
    </AppContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node
}

export default Provider
