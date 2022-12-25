import React from 'react';
import PropTypes from 'prop-types'
import AppContext from './AppContext';
import { useState } from 'react';


function Provider(props) {
  const { children } = props
  const [totalBalance, setTotalBalance] = useState(20)

  return(
    <AppContext.Provider value={{
      totalBalance,
      setTotalBalance
    }}>
      {children}
    </AppContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node
}

export default Provider
