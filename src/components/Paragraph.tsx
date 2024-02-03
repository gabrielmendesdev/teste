import React from 'react';

interface ParagraphProps extends React.HTMLProps<HTMLParagraphElement> {
    className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ className, ...rest }) => {
  return (
    <p className={` ${className}`} {...rest}>
      {rest.children}
    </p>
  );
};

export default Paragraph;
