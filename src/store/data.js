import { action, makeAutoObservable } from 'mobx';
import axios from 'axios';

class UserData {
  data = []
  lastFetched = null
  isFetching = false
  isSynced = false
  isSaving = false
  isSaved = false
  error = null

  constructor() {
      makeAutoObservable(this)
  }

  fetchData() {
    this.isFetching = true
    this.isSynced = false
    axios.get('http://localhost:3001/data')
      .then(action(response => {
        this.data = response.data;
        this.lastFetched = Date.now();
        this.isFetching = false;
        this.isSynced = true;
        this.error = null;
        console.log('Successfully fetched data from server');
      }))
      .catch(action(err => {
        this.error = err;
        this.isFetching = false;
        console.log('Error while fetching data from server');
      }))
  };

  updateExistingData(id, name, username, password, custom_fields) {
    this.isSaving = true;
    axios.put(`http://localhost:3001/data/${id}`, {
      name,
      username,
      password,
      custom_fields,
    })
    .then(action(response => {
      this.isSaving = false;
      this.isSaved = true;
      console.log("Successfully saved data to server");
      this.fetchData();
    }))
    .catch(action(err => {
      console.log('id: ' + id);
      console.log(err);
    }));
  }

  getDataFromStore() {
    const timeSinceLastFetch = Date.now() - this.lastFetched;
    const cacheExpiration = 3 * 1000; // 3 seconds

    if (this.lastFetched && timeSinceLastFetch < cacheExpiration) {
      console.log("Data loaded from cache");
    } else {
      this.fetchData();
    }
  }
}


export default new UserData();