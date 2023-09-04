const {Pool} = require('pg');

let mainConnection;
const credentials = {
    user: "postgres",
    host: "localhost",
    database: "usermanagementdb",
    password: "1234",
    port: 5432,
}


const connect=()=>{
    mainConnection= new Pool(credentials);
}

const getConnection=()=>{
    if(mainConnection){
        return mainConnection;
    }
    connect();
    return mainConnection;
}

module.exports={
    instanceofDB:getConnection
}