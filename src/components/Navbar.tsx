import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<Element | null>(document.getElementById("Home"));

  useEffect(() => {
    const sections = document.querySelectorAll("#pages > div[id]");
    setActiveSection(sections[0]);
    const handleScroll = () => {
      sections.forEach((section) => {
        const htmlElelemnt = section as HTMLElement;
        if (window.scrollY >= htmlElelemnt.offsetTop - 100) {
          setActiveSection(section);
        }
      });
      if (window.scrollY >= document.documentElement.scrollHeight - window.innerHeight - 100) {
        setActiveSection(sections[sections.length - 1]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ position: "fixed", right: "0px", zIndex: 999 }}>
      {Array.from(document.querySelectorAll("#pages > div[id]")).map((section) => (
        <div
          key={section.id}
          className={`sectionTag ${activeSection === section ? "sectionTagActive" : ""}`}
          onClick={() => section.scrollIntoView({ behavior: "smooth" })}
        >
          {section.id}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
