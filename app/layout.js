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
      <body style={{ margin: "0", backgroundColor: "#222" }}>
        <div style={{ backgroundColor: "white", color: "black" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
