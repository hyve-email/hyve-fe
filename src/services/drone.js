import axios from 'axios';
import config from '../config';

const droneInstance = axios.create({ baseURL: config.API_URL });

async function create(target_email, category) {
  const account_id = await localStorage.getItem('account_id');

  if (account_id && account_id != null) {
    try {
      const account_id = await localStorage.getItem('account_id');

      const payload = {
        account_id,
        target_email,
        category,
      };

      const { data } = await droneInstance.post('/drone', payload);

      console.log({ data });

      if (data.success) {
        return data;
      }
    } catch (err) {
      throw err;
    }
  }
}

async function read() {
  const account_id = await localStorage.getItem('account_id');

  if (account_id && account_id != null) {
    try {
      const { data } = await droneInstance.get(
        `/drone?account_id=${account_id}`
      );

      if (data.success) {
        return data;
      }
    } catch (err) {
      throw err;
    }
  }
}

async function update(muted, drone_email, target_email, category) {
  try {
    const account_id = await localStorage.getItem('account_id');
    const payload = {
      account_id,
      muted,
      drone_email,
      target_email,
      category,
    };

    const { data } = await droneInstance.put('/drone', payload);

    if (data.success) {
      return data;
    }
  } catch (err) {
    throw err;
  }
}

async function remove(drone_email) {
  try {
    const { data } = await droneInstance.delete(
      `/drone?drone_email=${drone_email}`
    );

    if (data.success) {
      return data;
    }
  } catch (e) {
    throw e;
  }
}

export default { read, update, create, remove };
