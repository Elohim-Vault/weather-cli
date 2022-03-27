import yargs from 'yargs';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config()
const baseUrlWithKey = `${process.env.BASE_URL}?key=${process.env.KEY}`;

const argv = yargs(process.argv.slice(2)).options({
    state: { type: 'string' },
    city: { type: 'string' },
}).argv;

const location = `${argv['city']},${argv['state']}`

axios.get(`${baseUrlWithKey}&city_name=${location}`).then(res => {
    console.log(`
    O clima em ${res.data.results.city} está ${res.data.results.description.toLowerCase()}. agora fazem ${res.data.results.temp}°C.`);
});