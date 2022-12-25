const getBalance = (data) => {
  return data.reduce((prev, {valor}) => valor + prev ,0)
}


export default getBalance
