const idiom = 'pt-BR'
const currencyOptions = { style: 'currency', currency: 'BRL' };

export const toBrDate = (dateString) => new Date(dateString).toLocaleDateString(idiom);

export const toBRL = (value) => value.toLocaleString(idiom, currencyOptions)
