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
      <body
        style={{
          margin: "0",
          fontFamily: "sans-serif",
          backgroundColor: "#111",
          color: "#fff",
        }}
      >
        {children}
      </body>
    </html>
  );
}
