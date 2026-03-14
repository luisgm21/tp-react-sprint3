import { Link } from "react-router-dom";

const Navbar = ({ links = [] }) => {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      {links.map((link, index) => (
        <span key={link.to}>
          <Link to={link.to}>{link.label}</Link>
          {index < links.length - 1 ? " | " : ""}
        </span>
      ))}
    </nav>
  );
}

export default Navbar