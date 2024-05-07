import React from "react";

function BlogDetailsTemplate({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-2 p-2 m-2">
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>BlogDetailsTemplate</nav>

      <div className="border-2 p-2 m-2">{children}</div>
    </section>
  );
}

export default BlogDetailsTemplate;
