/* getAllUser */

    axios.get(`http://localhost:3000/api/user/getAllUser`)


/* register  */

    axios.post(`http://localhost:3000/api/user/register`,
    {
      "userFullName": "khalil kraiem",
      "userEmail": "khalilkraiemmedia@gmail.com",
      "userPassword": "11019029",
      "userDateOfBirth": "1992-10-21",
      "userPhone": "52701262"
    })

/* Login */

    axios.post(`http://localhost:3000/api/user/login`,
    {
      "userEmail": "khalilkraiemmedia@gmail.com",
      "userPassword": "11019029"
    })


  /* update Password params=>userId  */

    axios.put(`http://localhost:3000/api/user/updatePassword/:userId`,
    {
      "current": "11019029",
      "newPassword": "11019029khalil"
    })
/* update Email params=>userId  */

    axios.put(`http://localhost:3000/api/user/updateEmail/:userId`,
    {
      "newEmail": "m.khalilkraiem@gmail.com"
    })

/* update Name params=>userId  */

    axios.put(`http://localhost:3000/api/user/updateFullname/:userId`,
    {
      "newFullName": "khalilkraiem"
    })

/* update Phone params=>userId  */

    axios.put(`http://localhost:3000/api/user/updatePhone/:userId`,
    {
      "newPhone": "52701262"
    })

