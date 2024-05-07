import React, { ReactNode } from "react";

const RoutingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="border-2 p-2 m-2">
      <p>RoutingLayout</p>
      <div>{children}</div>
    </div>
  );
};

export default RoutingLayout;
