import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from '@mui/icons-material/Group';

interface SideIconProps {
  children: React.ReactNode;
}

const SideIcon: React.FC<SideIconProps> = ({ children }) => {
  return (
        <div className="p-3">
            {children}
        </div>
  );
};

export default SideIcon;
 