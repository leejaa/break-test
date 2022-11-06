import Box from '@mui/material/Box';
import CustomInput from 'break-ui/components/Input/CustomInput';

interface BottomSectionProps {}

function BottomSection() {
  return (
    <Box marginTop="2px">
      <CustomInput placeholder="카드정보를 검색해보세요" />
    </Box>
  );
}

export default BottomSection;
