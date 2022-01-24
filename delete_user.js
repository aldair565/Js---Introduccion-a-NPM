const axios = require('axios');

async function makeDeleteRequest() {

    let params = {
        id: 2
    };

    let res = await axios.delete('http://localhost:3000/users',{headers: params})
    .then(res => {
        console.log(res.status);
    });

}

makeDeleteRequest();