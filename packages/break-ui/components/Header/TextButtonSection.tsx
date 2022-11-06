import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextButton from 'break-ui/components/Button/TextButton';
import { HStack } from 'break-ui/components/HStack';
import Icon from 'break-ui/components/Icons/Icon';
import colors from 'break-ui/styles/colors';

function TextButtonSection() {
  return (
    <HStack marginLeft="auto" alignItems="center" gap="13.5px">
      <TextButton sx={{ color: 'white' }}>
        <Typography variant="caption2" color={colors.lemon}>
          즉시 팔고 싶은 카드가 있다면?
        </Typography>
        <Icon
          icon="arrowRightSmall"
          sx={{ color: colors.lemon, fontSize: '10px', marginLeft: '2px' }}
        />
      </TextButton>
    </HStack>
  );
}

export default TextButtonSection;
