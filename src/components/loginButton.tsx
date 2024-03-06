import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const LoginButton = () => {
  const { data: session } = useSession();

  console.log(session);

  return session ? (
    <>
      {/* Signed in as {session.user.email} <br /> */}
      <button onClick={() => signOut()}>Sign out</button>
    </>
  ) : (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default LoginButton;
