// src/services/userService.js

import axios from 'axios';

// Base URL for your backend API
const BASE_URL = 'http://localhost:8000/api/users'; // Update this with your actual backend URL

// Create a new user
export const createUser = async (userData) => {
  try {
    const response = await axios.post(BASE_URL, userData);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

// Get all users
export const getUsers = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

// Get a single user by ID
export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

// Update a user by ID
export const updateUser = async (userId, updatedUserData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${userId}`, updatedUserData);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

// Delete a user by ID
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
