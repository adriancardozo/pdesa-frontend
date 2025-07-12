import { FC } from 'react';
import BackButton from '../back-button';
import NavButtonGroup from '../nav-button-group';
import NavButton from '../nav-button';
import { Role } from '../../enum/role.enum';

export type RoleNavButtonGroupProps = {
  role: Role;
};

const RoleNavButtonGroup: FC<RoleNavButtonGroupProps> = ({ role }) => {
  return role === Role.administrator ? (
    <>
      <BackButton defaultLocation="/admin/home" />
      <NavButtonGroup>
        <NavButton path="/admin/home">Inicio</NavButton>
        <NavButton path="/admin/user">Usuarios</NavButton>
      </NavButtonGroup>
    </>
  ) : (
    <>
      <BackButton />
      <NavButtonGroup>
        <NavButton path="/home">Inicio</NavButton>
        <NavButton path="/favorite">Favoritos</NavButton>
        <NavButton path="/purchase">Compras</NavButton>
      </NavButtonGroup>
    </>
  );
};

export default RoleNavButtonGroup;
