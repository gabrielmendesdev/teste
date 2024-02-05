import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from '@mui/icons-material/Group';
import SideIcon from "./SideIcon";
import { useNavigate } from "react-router-dom";
import './style.css'


interface SideNavigationBarProps {
  className?: string;
}

const SideNavigationBar: React.FC<SideNavigationBarProps> = ({ className }) => {
  
  const navigate = useNavigate()
  
  return (
    <div className={`${className} sidebar h-100`}>
        <div 
        className="cursor-pointer side-icons"
        onClick={() => navigate("/")}>
          <SideIcon>
            <DashboardIcon sx={{width: 40, height: 40}}/>
          </SideIcon>
        </div>
        <div 
        className="cursor-pointer side-icons"
        onClick={() => navigate("/users")}>
          <SideIcon>
            <GroupIcon sx={{width: 40, height: 40}} />
          </SideIcon>
        </div>
    </div>
  );
};

export default SideNavigationBar;
 