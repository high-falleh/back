/* getAllClientsByUserId params=>userId */

    axios.get(`http://localhost:3000/api/client/getAllClientsByUserId/:userId`)

/* add new Client */

    axios.post(`http://localhost:3000/api/client/addNewClient`,
    {
        "userId":1,
        "clientName":"bilel jouini",
        "clientTel":99999999
    })

/* update Client Name params=>clientId */

    axios.put(`http://localhost:3000/api/client/updateClientName/:clientId`,
    {
        "newClientName":"Bilel Jouini"
    }
/* update Client Tel params=>clientId */

    axios.put(`http://localhost:3000/api/client/updateClientTel/:clientId`,
    {
        "newClientTel":"55223366"
    }

