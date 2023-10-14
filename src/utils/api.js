import { checkResponse } from './weatherApi';

/* const baseUrl =
  'https://my-json-server.typicode.com/Wylerlight/se_project_react'; */

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://api.wtwr.zmurk.com'
    : 'http://localhost:3001';

const newBaseUrl = 'http://localhost:3001';

function getToken() {
  return localStorage.getItem('jwt');
}

// GET Items
export function getItems() {
  return fetch(`${baseUrl}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkResponse);
}

// POST Items
export function postItems({ name, weather, imageUrl }) {
  return fetch(`${baseUrl}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(checkResponse);
}

// DELETE Items
export function deleteItems(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
  }).then(checkResponse);
}
