export default function RootLayout({ children }) {
  return (
    <>
      <header
        style={{
          backgroundColor: "orangered",
          padding: "1rem",
          color: "white",
        }}
      >
        This is (Marketing) Header
      </header>
      {children}
      <footer
        style={{ backgroundColor: "green", padding: "1rem", color: "white" }}
      >
        This is (Marketing) Footer
      </footer>
    </>
  );
}
