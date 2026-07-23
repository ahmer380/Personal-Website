function Home() {
  const bio: JSX.Element = (
    <>
      Hi, my name is <strong>Ahmer Alam</strong> and I'm a recent <strong>Computer Science</strong> graduate from{" "}
      <strong>King's College London</strong>. Over the past few months, I've been working on leveraging different <strong>Reinforcement Learning</strong> techniques to explore strategy and game balance in the board game Risk, resulting in a recently completed academic paper. Read more about my work below!
    </>
  );
  return (
    <div id='Home'>
      <div
        style={{
          backgroundImage: "url(./extras/home_image.jpg)",
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
          justifyContent: "center",
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
          src='./extras/profile_picture.png'
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
