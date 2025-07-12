import { IconButton } from '@mui/material';
import { FC, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useLocation, useNavigate } from 'react-router';
import { getStyles } from './style';

export type BackButtonProps = {
  defaultLocation?: string;
};

const BackButton: FC<BackButtonProps> = ({ defaultLocation: defaultLocationProp }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const defaultLocation = defaultLocationProp ?? '/home';
  const [styles] = useState(getStyles());

  const back = () => {
    if (location.key !== 'default') {
      navigate(-1);
    } else if (defaultLocation) {
      navigate(defaultLocation);
    }
  };

  const visibility = () => (location.pathname === defaultLocation ? 'hidden' : 'visible');

  return (
    <IconButton sx={{ ...styles.back, visibility: visibility() }} onClick={back}>
      <ArrowBackIosNewIcon />
    </IconButton>
  );
};

export default BackButton;
