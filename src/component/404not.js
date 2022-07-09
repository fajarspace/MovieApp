import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <>
        <div className="not-found">
          <h1>Halaman tidak ditemukan</h1>
          <Link to="/">BACK TO HOME</Link>
        </div>
      </>
    );
  }
}

export default NotFound;
