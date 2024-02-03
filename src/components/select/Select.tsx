import React from 'react';

interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ children, ...rest }) => {
  return <select {...rest}>{children}</select>;
};

export default Select;