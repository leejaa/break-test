import Box from '@mui/material/Box';
import CustomIconButton from 'break-ui/components/Button/CustomIconButton';
import Icon from 'break-ui/components/Icons/Icon';
import colors from 'break-ui/styles/colors';

function IconButtonSection() {
  return (
    <Box marginLeft="auto" display="flex" alignItems="center" gap="13.5px">
      <CustomIconButton>
        <Icon icon="search" sx={{ color: colors.white }} />
      </CustomIconButton>
      <CustomIconButton>
        <Icon icon="user" sx={{ color: colors.white }} />
      </CustomIconButton>
      <CustomIconButton>
        <Icon icon="threeLine" sx={{ color: colors.white }} />
      </CustomIconButton>
    </Box>
  );
}

export default IconButtonSection;
