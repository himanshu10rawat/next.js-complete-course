import Link from "next/link";

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
          backgroundColor: "#222",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ padding: "1rem" }}>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              paddingInlineStart: "0",
              marginBlock: "0",
            }}
          >
            <li
              style={{
                backgroundColor: "#fff",
                flexGrow: "1",
                borderRadius: "0.5rem",
              }}
            >
              <Link
                style={{
                  color: "#222",
                  textDecoration: "none",
                  textAlign: "center",
                  display: "block",
                  paddingBlock: "1rem",
                }}
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li
              style={{
                backgroundColor: "#fff",
                flexGrow: "1",
                borderRadius: "0.5rem",
              }}
            >
              <Link
                style={{
                  color: "#222",
                  textDecoration: "none",
                  textAlign: "center",
                  display: "block",
                  paddingBlock: "1rem",
                }}
                href={"/about"}
              >
                About
              </Link>
            </li>
            <li
              style={{
                backgroundColor: "#fff",
                flexGrow: "1",
                borderRadius: "0.5rem",
              }}
            >
              <Link
                style={{
                  color: "#222",
                  textDecoration: "none",
                  textAlign: "center",
                  display: "block",
                  paddingBlock: "1rem",
                }}
                href={"/blogs"}
              >
                Blogs
              </Link>
            </li>
            <li
              style={{
                backgroundColor: "#fff",
                flexGrow: "1",
                borderRadius: "0.5rem",
              }}
            >
              <Link
                style={{
                  color: "#222",
                  textDecoration: "none",
                  textAlign: "center",
                  display: "block",
                  paddingBlock: "1rem",
                }}
                href={"/services"}
              >
                Services
              </Link>
            </li>
          </ul>

          {children}
        </div>
      </body>
    </html>
  );
}
