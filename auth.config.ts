import type { NextAuthConfig } from "next-auth";

export const authConfig = {
	providers: [], // Add providers with an empty array for now
	pages: {
		signIn: "/login",
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;
			const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
			if (isOnDashboard) return isLoggedIn;
			if (isLoggedIn) return Response.redirect(new URL("/dashboard", nextUrl));
			return true;
		},
	},
} satisfies NextAuthConfig;
