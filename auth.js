import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    // 对路由跳转进行校验 判断是否已经登录
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      console.log(pathname, auth);
      if (pathname.startsWith("/note/edit")) return !!auth;
      return true;
    },
  },
});

// import GitHub from "next-auth/providers/github"
// export const { handlers, auth, signIn, signOut } = NextAuth({ providers: [ GitHub ] })
