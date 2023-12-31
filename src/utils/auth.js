import { checkResponse } from './weatherApi';

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://api.wtwr.zmurk.com'
    : 'http://localhost:3001';

const newBaseUrl = 'http://localhost:3001';
function getToken() {
  return localStorage.getItem('jwt');
}

function signup(data) {
  const { name, avatar, email, password } = data;

  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(checkResponse);
}

function signin(data) {
  const { email, password } = data;

  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
}

function editProfileData(data) {
  // const { email, avatar, name } = data;

  return fetch(`${baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(data),
  }).then(checkResponse);
}

// Like clothing item
function likeClothingItem(itemId) {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
  }).then(checkResponse);
}

// Dislike clothing item
function dislikeClothingItem(itemId) {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
  }).then(checkResponse);
}

//get Token
function checkToken(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
}

export {
  signin,
  signup,
  checkToken,
  editProfileData,
  likeClothingItem,
  dislikeClothingItem,
};
