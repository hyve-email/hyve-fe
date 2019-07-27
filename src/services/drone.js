import axios from 'axios';
import config from '../config';

const droneInstance = axios.create({ baseURL: config.API_URL });

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

export default { read };
