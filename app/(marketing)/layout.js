export default function RootLayout({ children }) {
  return (
    <>
      <header
        style={{
          backgroundColor: "green",
          padding: "1rem",
          color: "white",
        }}
      >
        This is (Marketing) Header
      </header>
      {children}
      <footer
        style={{ backgroundColor: "purple", padding: "1rem", color: "white" }}
      >
        This is (Marketing) Footer
      </footer>
    </>
  );
}
