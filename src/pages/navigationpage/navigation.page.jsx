import { Link } from "react-router-dom";
import "./navigation.style.css";

const Navigation = () => {
  return (
    <div class="topnav">
      <Link to="/" className="active">
        Home
      </Link>
      <Link to="/home">Home Sub Content</Link>
      <Link to="/invoice">Invoices</Link>
      <Link to="/expenses">Expenses</Link>
    </div>
  );
};

export default Navigation;
