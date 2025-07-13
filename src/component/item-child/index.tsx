import { FC, ReactNode } from 'react';

export type ItemChildProps = {
  title: string;
  content: ReactNode;
};

const ItemChild: FC<ItemChildProps> = ({ title, content }) => {
  return (
    <>
      {title}: {content}
    </>
  );
};

export default ItemChild;
