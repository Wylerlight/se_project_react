const newBaseUrl = 'http://localhost:3001';
function getToken() {
  return localStorage.getItem('jwt');
}

function signup(data) {
  const { name, avatar, email, password } = data;

  return fetch(`${newBaseUrl}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
}

function signin(data) {
  const { email, password } = data;

  return fetch(`${newBaseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
}

function editProfileData(data) {
  // const { email, avatar, name } = data;

  return fetch(`${newBaseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
}

// Like clothing item
function likeClothingItem(itemId) {
  return fetch(`${newBaseUrl}/items/${itemId}/likes`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
}

// Dislike clothing item
function dislikeClothingItem(itemId) {
  return fetch(`${newBaseUrl}/items/${itemId}/likes`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
}

//get Token
function checkToken(token) {
  return fetch(`${newBaseUrl}/users/me`, {
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