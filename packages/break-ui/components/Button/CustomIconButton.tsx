import { ButtonProps } from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

interface CustomIconButtonProps extends ButtonProps {}

function CustomIconButton({ children }: CustomIconButtonProps) {
  return <IconButton sx={{ padding: '0px' }}>{children}</IconButton>;
}

export default CustomIconButton;
