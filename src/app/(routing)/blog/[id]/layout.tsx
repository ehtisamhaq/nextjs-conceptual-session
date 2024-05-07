import React from "react";

function BlogDetailsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-2 p-2 m-2">
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>BlogDetailsLayout</nav>

      {children}
    </section>
  );
}

export default BlogDetailsLayout;
