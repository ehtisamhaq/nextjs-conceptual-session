import React from "react";
import img from "../../../../assets/image.jpg";
import Image from "next/image";
import { notFound } from "next/navigation";
import BlogDetailsLoading from "./loading";

// Dynamic metadata
export async function generateMetadata({ params }: { params: { id: string } }) {
  console.log({ params });
  return {
    title: `Blog details | ${params.id}`,
    description: "Blog details page",
  };
}

const SingleBlogPage = ({ params }: { params: { id: string } }) => {
  // notFound();
  // if (true) return <BlogDetailsLoading />;

  // throw new Error("Testing error");

  return (
    <div>
      <div className="w-2/3 m-auto">
        {/* <Image
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
        /> */}

        <Image
          src="https://media.istockphoto.com/id/1408387701/photo/social-media-marketing-digitally-generated-image-engagement.jpg?s=1024x1024&w=is&k=20&c=Bck-z2Z287uKcEDpoLS7F1VA9NzdBbF7gY0ZTyYPoTs="
          width={700}
          height={700}
          quality={10}
          // placeholder="blur"
          // fill
          alt="online image"
        />
      </div>
      <p>SingleBlogPage</p>
      <p>Blog ID: {params.id}</p>{" "}
    </div>
  );
};

export default SingleBlogPage;
