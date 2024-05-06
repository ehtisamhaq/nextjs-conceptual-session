import React, { ReactNode } from "react";

const RoutingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p>RoutingLayout</p>
      {children}
    </div>
  );
};

export default RoutingLayout;
