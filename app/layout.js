import Header from "@/components/Header";
import "./globals.css";
import ThemeProvider from "@/context/ThemeProvider";

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
        <ThemeProvider>
          <Header />
          <div className="body-container">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
