import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      session.user.isAdmin = session.user.email === "keerthanajiva@gmail.com"; // Replace with your GitHub email
      session.user.isAdmin = session.user.email === "jivanandham@gmail.com";
      return session;
    },
  },
});
