import { Link, Outlet } from "react-router-dom";
function Card({ link, name }) {
  return (
    <div className="card-group">
      <div className="card rounded-4 shadow-3 border-1 mt-3">
        <div className="card-body">
          <Link to={link} className="card-title text-decoration-none">
            {name}
          </Link>
          <Outlet /> {/* Render nested content within the card */}
        </div>
      </div>
    </div>
  );
}
export default Card;
