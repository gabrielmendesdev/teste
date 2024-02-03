import React from 'react';

interface OptionProps extends React.HTMLProps<HTMLOptionElement> {}

const Option: React.FC<OptionProps> = ({ ...rest }) => {
  return <option {...rest}></option>;
};

export default Option; 