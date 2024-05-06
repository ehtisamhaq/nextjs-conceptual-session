import React from "react";
import img from "../../../../assets/image.jpg";
import Image from "next/image";

// Dynamic metadata
export async function generateMetadata({ params }: { params: { id: string } }) {
  console.log({ params });
  return {
    title: `Blog details | ${params.id}`,
    description: "Blog details page",
  };
}

const singleBlogPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <div className="w-2/3 m-auto">
        <Image
          src={img}
          placeholder="blur"
          // fill
          // sizes="300px"
          quality={20}
          alt="image"
          style={
            {
              // objectFit: "contain",
            }
          }
        />
      </div>
      <p>SingleBlogPage</p>
      <p>Blog ID: {params.id}</p>{" "}
    </div>
  );
};

export default singleBlogPage;
