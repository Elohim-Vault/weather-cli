import yargs from 'yargs';
import fetch from 'node-fetch';
import * as dotenv from 'dotenv';

dotenv.config()
const baseUrlWithKey = `${process.env.BASE_URL}?key=${process.env.KEY}`;

const argv = yargs(process.argv.slice(2)).options({
    state: { type: 'string' },
    city: { type: 'string' },
}).argv;

const location = `${argv['city']},${argv['state']}`;

fetch(`${baseUrlWithKey}&city_name=${location}`)
    .then(res => res.json())
    .then(data => {
        console.log(`O clima em ${data.results.city} está ${data.results.description.toLowerCase()}. agora fazem ${data.results.temp}°C.`);
    });

// (async () => {
//     let res = await fetch(`${baseUrlWithKey}&city_name=${location}`);
//     console.log(res.json());
// })()