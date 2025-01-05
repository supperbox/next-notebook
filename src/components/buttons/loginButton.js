import { auth, signIn, signOut } from "auth";

export function LoginButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <button>请先登录</button>
    </form>
  );
}

// react 关于服务端组件还是客户端组件弄得相当苛刻
