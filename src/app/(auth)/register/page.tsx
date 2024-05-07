import { getUsers, registerUser } from "@/lib/actions";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";

const RegisterPage = async () => {
  // const user = await getUsers();

  const res = await fetch(`${process.env.API_URL}`, {
    next: {
      tags: ["user"],
    },
  });
  const user = await res.json();
  console.log({ user: user.data });

  return (
    <div className="">
      <form action={registerUser} className="space-y-4 ">
        <label className="block" htmlFor="name">
          <span className="block text-sm font-medium text-slate-100">Name</span>
          <input
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-slate-900"
            type="text"
            id="name"
            name="name"
            required
          />
        </label>

        <label className="block" htmlFor="email">
          <span className="block text-sm font-medium text-slate-100">
            Email
          </span>
          <input
            className="inputField"
            type="text"
            id="email"
            name="email"
            required
          />
        </label>

        <button
          type="submit"
          className="bg-blue-400 hover:bg-blue-600 ring-1 px-10 py-2 rounded-md"
        >
          Submit
        </button>
      </form>

      <div className="border-2 m-3 p-3 grid grid-cols-3 gap-2">
        {user.data.map((user: { id: Key; name: string; email: string }) => (
          <div key={user.id} className="border">
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegisterPage;
