import { Link } from "react-router";

// Navigation components
export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>CRYPTO PRICES</div>
      </Link>

      <Link to="/currencies">
        <div>CURRENCIES</div>
      </Link>
    </div>
  );
}