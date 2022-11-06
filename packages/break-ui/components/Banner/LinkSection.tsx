import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextButton } from 'break-ui/components/Button';
import { HStack } from 'break-ui/components/HStack';
import colors from 'break-ui/styles/colors';

function LinkSection() {
  return (
    <HStack marginTop="28px" gap="8px" alignItems="center">
      <TextButton color="inherit">
        <Typography variant="Button2">판매 가이드라인 보러가기</Typography>
      </TextButton>
      <Box
        width="16px"
        height="0px"
        border={`1px solid ${colors.white}`}
        sx={{
          transform: 'rotate(90deg)',
        }}
      ></Box>
      <TextButton color="inherit">
        <Typography variant="Button2">즉시 판매하기</Typography>
      </TextButton>
    </HStack>
  );
}

export default LinkSection;
