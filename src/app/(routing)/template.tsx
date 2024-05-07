import React, { ReactNode } from "react";

const RoutingTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div className="border-2">
      RoutingTemplate
      {children}
    </div>
  );
};

export default RoutingTemplate;
