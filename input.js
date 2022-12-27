const fetcher = async (method, ep, body = {}) => {
  if (method == "GET") {
    const result = await getData(ep); //✅
    return result;
  } else {
    deleteData(ep); //✅
  }
};

const getData = (ep) => {
  return new Promise((resolve, reject) => {
    fetch(`https://63a962a3594f75dc1db4202f.mockapi.io/${ep}`)
      .then((res) => {
        if (!res.ok)
          return Promise.reject(new Error(`HTTP Error ${res.status}`));

        return res.json();
      })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

const deleteData = (id) => {
  if (confirm("apakah kamu yakin?")) {
    fetch(`https://63a962a3594f75dc1db4202f.mockapi.io/dataUser/${id}`, {
      method: "delete",
    })
      .then((res) => {
        if (!res.ok)
          return Promise.reject(new Error(`HTTP Error ${res.status}`));

        return res.json();
      })
      .then((data) => {
        document.getElementById(`listOuput-${data.id}`).remove();
      })
      .catch((err) => console.error(err));
  } else {
    alert("oke batal");
  }
};
