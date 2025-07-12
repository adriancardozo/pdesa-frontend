import { IconButton } from '@mui/material';
import { FC, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useLocation, useNavigate } from 'react-router';
import { getStyles } from './style';

const BackButton: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [styles] = useState(getStyles());

  const back = () => {
    if (location.key !== 'default') {
      navigate(-1);
    } else {
      navigate('/home');
    }
  };

  return (
    location.pathname !== '/home' && (
      <IconButton sx={styles.back} onClick={back}>
        <ArrowBackIosNewIcon />
      </IconButton>
    )
  );
};

export default BackButton;
