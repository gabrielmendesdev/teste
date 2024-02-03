import React from 'react';

interface TitleProps extends React.HTMLProps<HTMLHeadingElement> {
    className?: string;
}

const Title: React.FC<TitleProps> = ({ className, ...rest }) => {
  return (
    <h1 className={` ${className}`} {...rest}>
      {rest.children}
    </h1>
  );
};

export default Title;
