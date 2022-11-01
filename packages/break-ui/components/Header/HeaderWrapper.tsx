import { Box, BoxProps } from '@mui/material';
import colors from 'break-ui/styles/colors';

interface HeaderWrapperProps extends BoxProps {}

function HeaderWrapper({ children }: HeaderWrapperProps) {
  return (
    <Box
      display="flex"
      padding="10px 20px"
      sx={{
        backgroundColor: colors.black,
      }}
    >
      {children}
    </Box>
  );
}

export default HeaderWrapper;
