import axios from 'axios';

import config from '../config';

const userInstance = axios.create({ baseURL: config.API_URL });

async function create(fields) {
    let formData = new FormData();

    Object.keys(fields).forEach(key => formData.append(key, fields[key]));

    try {
        const { data } = await userInstance.post('/user', fields);
        return data;
    } catch (err) {
        throw err;
    }
}

export default { create };