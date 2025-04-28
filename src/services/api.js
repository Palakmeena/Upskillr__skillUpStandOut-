// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Add response interceptor to handle errors
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // The request was made and server responded with error status
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // The request was made but no response received
      return Promise.reject({ message: 'No response from server' });
    } else {
      // Something happened in setting up the request
      return Promise.reject({ message: error.message });
    }
  }
);

// Resources API
export const getSavedResources = () => api.get('/resources/saved');
export const saveResource = (resourceData) => api.post('/resources/save', resourceData);
export const deleteSavedResource = (id) => api.delete(`/resources/${id}`);

// Auth API
export const login = (credentials) => api.post('/users/login', credentials);
export const register = (userData) => api.post('/users', userData);
export const getCurrentUser = () => api.get('/users/me');

export default api;