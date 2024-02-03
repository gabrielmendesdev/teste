import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from '@mui/icons-material/Group';
import SideIcon from "./SideIcon";
import './style.css'

interface SideNavigationBarProps {
  className?: string;
}

const SideNavigationBar: React.FC<SideNavigationBarProps> = ({ className }) => {
  return (
    <div className={`${className} sidebar h-100`}>
        <SideIcon>
          <DashboardIcon sx={{width: 40, height: 40}} /> 
        </SideIcon>
        <SideIcon>
          <GroupIcon sx={{width: 40, height: 40}} />
        </SideIcon>
    </div>
  );
};

export default SideNavigationBar;
 