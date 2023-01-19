import { action, makeAutoObservable } from 'mobx';
import axios from 'axios';

class UserData {
  data = []
  lastFetched = null
  isFetching = false
  isSynced = false
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
        this.isFetching = false
        this.isSynced = true
        this.error = null
        console.log('Successfully fetched data from server');
      }))
      .catch(action(err => {
        this.error = err
        this.isFetching = false
        console.log('Error while fetching data from server');
      }))
  };

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