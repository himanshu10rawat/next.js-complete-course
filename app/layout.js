import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Tech Company",
    default: "Tech Company",
  },
  description: "This is the best tech company",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        <div className="body-container">{children}</div>
      </body>
    </html>
  );
}
