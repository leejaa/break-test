import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import CustomIconButton from 'break-ui/components/Button/CustomIconButton';
import ShoppingCardIcon from 'break-ui/components/Icons/ShoppingCartIcon';
import ThreeLineIcon from 'break-ui/components/Icons/ThreeLineIcon';
import UserIcon from 'break-ui/components/Icons/UserIcon';
import colors from 'break-ui/styles/colors';
import SearchIcon from '../Icons/SearchIcon';

function IconButtonSection() {
  return (
    <Box marginLeft="auto" display="flex" alignItems="center" gap="13.5px">
      <CustomIconButton>
        <SearchIcon sx={{ color: colors.white }} />
      </CustomIconButton>
      <CustomIconButton>
        <UserIcon sx={{ color: colors.white }} />
      </CustomIconButton>
      <CustomIconButton>
        <ThreeLineIcon sx={{ color: colors.white }} />
      </CustomIconButton>
    </Box>
  );
}

export default IconButtonSection;
