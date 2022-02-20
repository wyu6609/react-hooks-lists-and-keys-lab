import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let linksElements = links.map((link) => {
    return (
      <a key={link} href={"#" + link}>
        {link}
      </a>
    );
  });
  return <nav>{linksElements}</nav>;
}

export default NavBar;
