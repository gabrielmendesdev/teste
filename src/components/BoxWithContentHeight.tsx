interface BoxWithContentHeightProps {
    className?: string;
    children: React.ReactNode;
}

const BoxWithContentHeight: React.FC<BoxWithContentHeightProps> = ({ className, children }) => {
    return(
        <div className={`${className}`}>
            {children}
        </div>
    ) 
}

export default BoxWithContentHeight