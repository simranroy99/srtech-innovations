import "./App.css";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "30px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <img src="/logo.png" alt="SRTech" style={{ height: "60px" }} />
        <div>
          <h1 style={{ margin: 0 }}>SRTech Innovations</h1>
          <p style={{ margin: 0, color: "gray" }}>
            Websites • Apps • Tech Tools
          </p>
        </div>
      </div>

      <hr style={{ margin: "25px 0" }} />

      <h2>Welcome 🚀</h2>
      <p>
        This is your SRTech Innovations React website.  
        Next step: We will upload it to GitHub and make it LIVE.
      </p>

      <a
        href="#"
        style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "12px 18px",
          background: "black",
          color: "white",
          borderRadius: "10px",
          textDecoration: "none",
        }}
      >
        Apply Now
      </a>
    </div>
  );
}
