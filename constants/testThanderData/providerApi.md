/* getAllProvidersByUserId params=> */

    axios.get(`http://localhost:3000/api/provider/getAllProvidersByUserId/:userId`)
 
/* add new provider */

    axios.post(`http://localhost:3000/api/provider/addNewProvider`,
    {
        "userId":1,
        "providerName":"bilel jouini",
        "providerTel":99999999
    })

/* update provider Name params=>providerId */

    axios.put(`http://localhost:3000/api/provider/updateProviderName/:providerId`,
    {
        "newProviderName":"Bilel Jouini"
    })
/* update provider Tel params=>providerId */

    axios.put(`http://localhost:3000/api/provider/updateProviderName/:providerId`,
    {
        "newProviderTel":"55223366"
    })

