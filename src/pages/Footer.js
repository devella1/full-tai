// Footer.js
import React from "react";

/**
 * A simple footer with a GitHub link
 */
function Footer() {
  return (
    <footer className="site-footer">
      <p>
        &copy; 2025 TaiScript. View the code on{" "}
        <a
          href="https://github.com/kamal-dev/taiscript"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
