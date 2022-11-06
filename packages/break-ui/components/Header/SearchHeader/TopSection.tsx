import { Box } from '@mui/material';
import LogoSection from 'break-ui/components/Header/LogoSection';
import TextButtonSection from 'break-ui/components/Header/TextButtonSection';
import { HStack } from 'break-ui/components/HStack';

interface TopSectionProps {}

function TopSection() {
  return (
    <HStack width={1}>
      <LogoSection />
      <TextButtonSection />
    </HStack>
  );
}

export default TopSection;
