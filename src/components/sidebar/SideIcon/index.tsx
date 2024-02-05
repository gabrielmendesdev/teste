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
 