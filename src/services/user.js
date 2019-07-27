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

async function reply(to, drone_email, subject, message) {
  try {
    const payload = { to, drone_email, subject, message };

    const { data } = await userInstance.post('/reply', payload);

    if (data.success) {
      return data;
    }
  } catch (e) {
    throw e;
  }
}

export default { create, reply };
