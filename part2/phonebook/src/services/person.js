import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request;
};

const create = newPerson => {
  const request = axios.post(baseUrl, newPerson);
  return request;
};

const remove = id => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request;
};

export default {
  getAll,
  create,
  remove
};
