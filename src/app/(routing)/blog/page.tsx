import { Metadata } from "next";
import React, { Suspense } from "react";
import SingleBlogPage from "./[id]/page";
import BlogDetailsLoading from "./[id]/loading";
import ClientData from "@/app/(rendering)/client/components/ClientData";
import ServerPage from "@/app/(rendering)/server/page";

// Static metadata
export const metadata: Metadata = {
  title: "Blog Page",
};

const BlogPage = () => {
  return (
    <div>
      BlogPage
      {/* <ServerPage /> */}
      <Suspense fallback={<BlogDetailsLoading />}>
        <ServerPage />
      </Suspense>
    </div>
  );
};

export default BlogPage;
