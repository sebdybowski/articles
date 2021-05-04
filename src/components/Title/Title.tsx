import React, { FC, ReactNode } from 'react';
import './Title.scss';

type TitleProps = {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const Title: FC<TitleProps> = ({ children, level = 1 }): JSX.Element => {
  const TitleTag = `h${level}` as HeadingTag;

  return (
    <TitleTag className="Title" data-testid="Title">
      {children}
    </TitleTag>
  );
};

export default Title;
