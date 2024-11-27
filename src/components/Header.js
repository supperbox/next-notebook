import { signIn, signOut, auth } from "auth";

function SignIn({ provider, ...props }) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <button {...props}>登录</button>
    </form>
  );
}

function SignOut(props) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button {...props}>登出</button>
    </form>
  );
}

export default async function Header() {
  const session = await auth();
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "20px",
      }}
    >
      {session?.user ? (
        <span style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {session?.user.name}
          <SignOut />
        </span>
      ) : (
        <SignIn />
      )}
    </header>
  );
}
