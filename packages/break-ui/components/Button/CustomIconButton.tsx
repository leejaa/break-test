import { ButtonProps } from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { SxProps } from '@mui/material/styles';

interface CustomIconButtonProps extends ButtonProps {
  buttonType?: string;
  sx?: SxProps;
}

function CustomIconButton({ children, ...rest }: CustomIconButtonProps) {
  return <IconButton sx={{ padding: '0px' }}>{children}</IconButton>;
}

export default CustomIconButton;
