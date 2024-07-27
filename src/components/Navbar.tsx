import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<Element | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("#pages > div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
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
