import { FC, MouseEventHandler, useState } from 'react';
import { Button, ButtonProps, Stack, TextField } from '@mui/material';
import { PURCHASE_SERVICE } from '../../service/purchase.service';
import { useNavigate } from 'react-router';
import { getStyles } from './styles';

export type PurchaseFormProps = {
  ml_id: string;
};

const PurchaseForm: FC<PurchaseFormProps> = ({ ml_id }) => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(1);
  const [purchased, setPurchased] = useState<boolean>(false);
  const [purchasing, setPurchasing] = useState<boolean>(false);
  const [styles] = useState(getStyles());

  const purchase: MouseEventHandler<HTMLButtonElement> = () => {
    setPurchasing(true);
    PURCHASE_SERVICE.purchase(ml_id, amount)
      .then(() => {
        setPurchased(true);
        setTimeout(() => {
          setPurchased(false);
          navigate('/purchase');
        }, 2000);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setAmount(1);
        setPurchasing(false);
      });
  };

  const buttonProps = (): ButtonProps => {
    if (purchasing) {
      return { variant: 'contained', color: 'primary', disabled: true, children: 'Comprando' };
    } else if (purchased) {
      return { variant: 'contained', color: 'success', children: 'Comprado' };
    } else {
      return { variant: 'contained', color: 'primary', onClick: purchase, children: 'Comprar' };
    }
  };

  return (
    <Stack component="form" sx={styles.form} spacing={2} noValidate autoComplete="off">
      <TextField
        label="Cantidad"
        variant="standard"
        value={amount}
        type="number"
        sx={styles.amount}
        slotProps={{ htmlInput: { min: 1 } }}
        onChange={(e) => setAmount(+e.target.value)}
      />
      <Button {...buttonProps()} />
    </Stack>
  );
};

export default PurchaseForm;
