import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <p>AuthLayout</p>
      {children}
    </main>
  );
};

export default AuthLayout;
