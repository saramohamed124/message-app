import "./stylemsg.css";
import envelope_icon from "../assets/icons/envelope_icon.svg";
import { Link } from "react-router-dom";

function SidebarDash() {
  const handleDrawer = () => {
    let home = document.querySelector(".table-mgs td.home");
    if (home !== null) home.classList.toggle("drawer");
  };
  const handleClick = (e) => {
    document
      .querySelectorAll(".sidebar-content .link")
      .forEach((e) => e.classList.remove("active"));
    e.currentTarget.classList.toggle("active");
  };
  return (
    <div className="parent-sidebardash">
      <div className="d-flex">
      <ul className="sidebar-content">
       
      <Link
          to="/message-app/message"
          className="d-flex msg-side link active"
          onClick={(e) => {
            handleClick(e);
            handleDrawer();
          }}
        >
          <img src={envelope_icon} alt="envelope" />
          <p>Message</p>
        </Link> 
       
        </ul>
</div>       
    </div>
  );
}
export default SidebarDash;
