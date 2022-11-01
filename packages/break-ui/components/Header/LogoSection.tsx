import Box from '@mui/material/Box';
import CustomIconButton from 'break-ui/components/Button/CustomIconButton';
import LogoIcon from '../Icons/LogoIcon';

function LogoSection() {
  return (
    <Box>
      <CustomIconButton>
        <LogoIcon />
      </CustomIconButton>
    </Box>
  );
}

export default LogoSection;
