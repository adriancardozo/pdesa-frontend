import { ChipProps, Grid2Props } from '@mui/material';

export type MetricItemStyles = {
  root: Grid2Props['sx'];
  label: Grid2Props['sx'];
  number: ChipProps['sx'];
  content: Grid2Props['sx'];
};

export function getStyles(): MetricItemStyles {
  return {
    root: { display: 'flex', flexDirection: 'row', alignItems: 'center', flex: '1 1 0' },
    label: { flex: '0.5 1 0', display: 'flex', flexDirection: 'row', alignItems: 'center' },
    number: { marginLeft: '8px', flexGrow: 1 },
    content: { flex: '1 1 0' },
  };
}
