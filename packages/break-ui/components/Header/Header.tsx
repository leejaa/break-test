import Box from '@mui/material/Box';
import HeaderWrapper from 'break-ui/components/Header/HeaderWrapper';
import IconButtonSection from 'break-ui/components/Header/IconButtonSection';
import { HStack } from 'break-ui/components/HStack';
import LogoSection from './LogoSection';

function Header() {
  return (
    <HeaderWrapper>
      <HStack>
        <LogoSection />
        <IconButtonSection />
      </HStack>
    </HeaderWrapper>
  );
}

export default Header;
