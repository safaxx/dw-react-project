import React, { useEffect } from "react";
// import { useLoaderData } from 'react-router-dom';
import { useState } from "react";

function GitHub() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/safaxx")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
    <div>GitHub followers: {data.followers}</div>
    <div>GitHub following: {data.following}</div>
    <div>GitHub repos: {data.public_repos}</div>
    </>
  )
}

export default GitHub;
