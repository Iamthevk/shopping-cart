import { useState } from "react";

function useFetch(url) {
  const [loading, setLoading] = useState(true);

  function get() {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch((error) => {
          setLoading(false);
          reject(error);
        });
    });
  }
  function post(url, body) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        ...{
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch((error) => {
          setLoading(false);
          reject(error);
        });
    });
  }
  return { get, post, loading };
}

export default useFetch;
