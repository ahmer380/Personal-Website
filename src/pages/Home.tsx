import backgroundImage from "../assets/home_image.jpg";

function Home() {
  const bio: JSX.Element = (
    <>
      Hi, my name is <strong>Ahmer Alam</strong> and I'm an undergraduate <strong>computer science</strong> student at{" "}
      <strong>King's College London</strong>. In August I will begin a 12 month software engineering internship at <strong>Skyhigh Security</strong>,
      assisting in the development and testing of data protection solutions for clients. Also I'm passionate for <strong>game development</strong>. In
      my spare time I enjoy playing tennis, and I am a keen follower of pretty much every major sport in the world!
    </>
  );
  return (
    <div id='Home'>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ paddingTop: "20vh", textAlign: "center", color: "white" }}>
          <h1 style={{ marginBottom: 0, color: "#f0f0f0" }}>Ahmer Alam</h1>
          <h3 style={{ color: "#f0f0f0" }}>Software Engineer</h3>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "15px",
          margin: "auto",
          marginTop: "100px",
          marginBottom: "100px",
          maxWidth: "800px",
          flexWrap: "wrap",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)",
        }}
      >
        <img
          src='src/assets/logo_images/github.png'
          alt='Twitter'
          style={{ width: "100%", maxWidth: "200px", height: "auto", borderRadius: 100 }}
        />
        <div style={{ flex: 1, minWidth: "200px", padding: "10px" }}>
          <h2 style={{ textDecoration: "underline", marginBottom: 5, marginTop: 0 }}>About Me</h2>
          <p style={{ marginTop: 0, fontSize: "larger", lineHeight: "1.6" }}>{bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
