import React from "react";

const footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-content">
          <h5>
            Developed with ❤️ by Adebakin Fuad © {new Date().getFullYear()}
          </h5>
        </div>
      </footer>
    </div>
  );
};

export default footer;
