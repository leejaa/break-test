import Box from '@mui/material/Box';
import IconButtonSection from 'break-ui/components/Header/IconButtonSection';
import colors from 'break-ui/styles/colors';
import LogoSection from './LogoSection';

function Header() {
  return (
    <Box
      display="flex"
      padding="10px 20px"
      sx={{
        backgroundColor: colors.black,
      }}
    >
      <LogoSection />
      <IconButtonSection />
    </Box>
  );
}

export default Header;
