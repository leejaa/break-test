import Box from '@mui/material/Box';
import HeaderWrapper from 'break-ui/components/Header/HeaderWrapper';
import IconButtonSection from 'break-ui/components/Header/IconButtonSection';
import LogoSection from './LogoSection';

function Header() {
  return (
    <HeaderWrapper>
      <LogoSection />
      <IconButtonSection />
    </HeaderWrapper>
  );
}

export default Header;
