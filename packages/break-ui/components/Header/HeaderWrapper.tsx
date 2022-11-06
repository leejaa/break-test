import { Box, BoxProps } from '@mui/material';
import colors from 'break-ui/styles/colors';

interface HeaderWrapperProps extends BoxProps {}

function HeaderWrapper({ children }: HeaderWrapperProps) {
  return <Box padding="10px 20px">{children}</Box>;
}

export default HeaderWrapper;
