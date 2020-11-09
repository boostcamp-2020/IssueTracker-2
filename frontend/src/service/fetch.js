export const getFetch = async query => {
  const response = await fetch(`${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
};

export const postFetch = async (query, body) => {
  const response = await fetch(`${query}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return response;
};

export const updateFetch = async (query, body) => {
  const response = await fetch(`${query}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return response;
};

export const deleteFetch = async (query, body) => {
  const response = await fetch(`${query}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return response;
};
