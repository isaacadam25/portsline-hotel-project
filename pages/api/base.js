import axios from 'axios';

export default axios.create({
  baseURL: "https://portslinebackend.herokuapp.com/api/",
});
