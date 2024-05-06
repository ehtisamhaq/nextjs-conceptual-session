import React, { ReactNode } from "react";

const AuthTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p>AuthTemplate</p>
      {children}
    </div>
  );
};

export default AuthTemplate;
