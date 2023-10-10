const getTricks = async () => {
  const response = await fetch('http://localhost:3001/api/v1/tricks');
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}


const postTrick = async (newTrick) => {
  const response = await fetch("http://localhost:3001/api/v1/tricks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTrick),
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.json();
};


const deleteTrickFromAPI = async (id) => {
  const response = await fetch(`http://localhost:3001/api/v1/tricks/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.json();
};

export {getTricks, postTrick, deleteTrickFromAPI}




