import errorResponse from '../data/response'

const isInvalidField = (field) => field === '' || !field

const handleName = (name) => (isInvalidField(name)) ?  '' : `name=${name}`

const handleSDate = (startingDate) => (isInvalidField(startingDate)) ?  '' : `startingDate=${startingDate}T00:00:00&`

const handleEDate = (endingDate) => (isInvalidField(endingDate)) ?  '' : `$endingDate=${endingDate}T00:00:00&`

const getURL = ({id, startingDate, endingDate, name}) => {
  return `http://localhost:8080/transacoes/${id}?${handleSDate(startingDate)}${handleEDate(endingDate)}${handleName(name)}`
}

export const fetchAllTransactions = async (inputData) => {
  try{
  if(isInvalidField(inputData.id)) throw new Error("O id não pode ser vazio ou undefined")
  const url = getURL(inputData)
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await  fetch(url,options);
  const data = await response.json();
  const sortedByDate = data.sort((a,b)=> new Date(a.data) - new Date(b.data))
  return sortedByDate;
  } catch (err) {
    console.log(err);
    return errorResponse
  }
}

