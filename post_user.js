const axios = require('axios');

async function makePostRequest() {

    params = { //parametros a guardar
        id: 7, //en lugar de 7 es 6, realice un post de prueba y se agrego un id 6
        first_name: 'Aldair',
        last_name: 'Meraz',
        email: 'brolyk666@gmail.com'
      }

      let res = await axios.post('http://localhost:3000/users',params); //se utiliza el metodo .post() para realizar un post request en el Json users y se agregan los atributos de params

    console.log(res.data);
}

makePostRequest();
