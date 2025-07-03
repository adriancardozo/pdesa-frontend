import { FC, ReactNode, useState } from 'react';
import NavBar from '../nav-bar';
import { Grid2 } from '@mui/material';
import { getStyles } from './style';

export type PageContainerProps = {
  appBar?: boolean;
  children?: ReactNode;
};

const PageContainer: FC<PageContainerProps> = ({ appBar, children }) => {
  const [styles] = useState(getStyles());

  return (
    <>
      {(appBar ?? true) && <NavBar />}
      <Grid2 sx={styles.root}>{children}</Grid2>
    </>
  );
};

export default PageContainer;
