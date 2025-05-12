import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";
import type { Metadata } from "next";

type Props = { children: React.ReactNode };

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}

export const metadata: Metadata = {
	title: {
		template: "%s | Acme Dashboard",
		default: "Acme Dashboard",
	},
	description: "The official Next.js Learn Dashboard built with App Router.",
	metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};
