import React from "react";
import { MdEmail, MdLocalPhone, MdLocationOn } from "react-icons/md";

interface ContactBannerProps {
  icon: any;
  title: string;
  children?: React.ReactNode;
}

const ContactBanner: React.FC<ContactBannerProps> = ({ icon, title, children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ marginRight: 10 }}>{icon}</div>
      <div>
        <h2 style={{ margin: 0 }}>{title}</h2>
        <p style={{ marginTop: 5 }}>{children}</p>
      </div>
    </div>
  );
};

const LocationBanner: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <ContactBanner icon=<MdLocationOn size={40} /> title='Location'>
      {children}
    </ContactBanner>
  );
};

const MailBanner: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <ContactBanner icon=<MdEmail size={40} /> title='Mail'>
      {children}
    </ContactBanner>
  );
};

const PhoneBanner: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <ContactBanner icon=<MdLocalPhone size={40} /> title='Phone'>
      {children}
    </ContactBanner>
  );
};

export { LocationBanner, MailBanner, PhoneBanner };
