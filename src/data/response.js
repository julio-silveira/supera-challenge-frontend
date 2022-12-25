const response = [
	{
		id: 1,
		data: "2019-01-01T12:00:00",
		valor: 30895.5,
		tipo: "DEPOSITO",
		nome: null,
		conta: {
			id: 1,
			nome_responsavel: "Fulano"
		}
	},
	{
		id: 3,
		data: "2019-05-04T08:12:45",
		valor: -500.5,
		tipo: "SAQUE",
		nome: null,
		conta: {
			id: 1,
			nome_responsavel: "Fulano"
		}
	},
	{
		id: 5,
		data: "2020-06-08T10:15:01",
		valor: 3241.23,
		tipo: "TRANSFERENCIA",
		nome: "Beltrano",
		conta: {
			id: 1,
			nome_responsavel: "Fulano"
		}
	}
]

export default response
