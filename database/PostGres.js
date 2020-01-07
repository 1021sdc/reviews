const { Client, Pool } = require('pg');p

const client = new Client({
    user: 'sayertindall',
    host: 'localhost',
    database: 'airbnb',
    password: '1111',
    port: 5432,
});

client.connect(err => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('connected')
    }
});

// getRandomInt = (max) => {
//     return Math.floor(Math.random() * Math.floor(max));
// };
//
// for (let i=0; i < 10; i++) {
//
//     let randInt = getRandomInt(1000000);
//     const q = `SELECT reviews FROM reviews WHERE room_id = ${randInt};`;
//
//     pool
//     .query(q)
//     .then((data) => {
//         console.log(data.rows[0]);
//     })
//     .catch(e => console.error(e.stack))
// }
// pool.end();


module.exports = { client };