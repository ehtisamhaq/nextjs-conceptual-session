"use client";

import React, { useEffect, useState } from "react";

const ClientData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/jokes/programming/ten")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <ul>
      {data?.map(
        (data: { id: React.Key | null | undefined; punchline: string }) => (
          <li key={data.id}>{data.punchline}</li>
        )
      )}
    </ul>
  );
};

export default ClientData;
