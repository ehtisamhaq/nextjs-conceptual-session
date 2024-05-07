import React, { ReactNode } from "react";

const BlogTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      BlogTemplate
      {children}
    </div>
  );
};

export default BlogTemplate;
