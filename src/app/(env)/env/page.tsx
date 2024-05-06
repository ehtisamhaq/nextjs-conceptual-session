"use client";
import React from "react";

const EnvPage = () => {
  const NAME = process.env.NEXT_PUBLIC_API_KEY;
  const USERNAME = process.env.PRIVATE_API_KEY;

  console.log({ NAME, USERNAME });
  return (
    <div>
      <p>
        My Name: {process.env.NEXT_PUBLIC_API_KEY} | {NAME}
      </p>
      <p>
        Username: {process.env.PRIVATE_API_KEY} | {USERNAME}
      </p>
    </div>
  );
};

export default EnvPage;
