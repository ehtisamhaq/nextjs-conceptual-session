import Link from "next/link";

export default function BlogDetailsNotFound() {
  return (
    <div className="bg-red-300 text-center">
      <h2 className="text-2xl">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="px-8 my-2 bg-green-700">
        Return Home
      </Link>
    </div>
  );
}
