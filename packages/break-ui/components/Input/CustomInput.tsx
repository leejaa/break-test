import Input, { InputProps } from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Icon from 'break-ui/components/Icons/Icon';
import colors from 'break-ui/styles/colors';

interface CustomInputProps extends InputProps {}

function CustomInput(props: CustomInputProps) {
  const { type = 'text', value, placeholder } = props;

  return (
    <Input
      fullWidth
      type={type}
      value={value}
      startAdornment={
        <InputAdornment position="start">
          <Icon
            icon="search"
            sx={{ color: colors.grey[500], fontSize: '20px' }}
          />
        </InputAdornment>
      }
      placeholder={placeholder}
      inputProps={{
        style: {},
      }}
      sx={{
        backgroundColor: '#252525',
        borderRadius: '5px',
        '&.MuiInput-root': {
          padding: '10px 12px',
          ':before': {
            borderBottom: 'none',
          },
          ':hover': {
            borderBottom: 'none',
            ':not(.Mui-disabled):before': {
              borderBottom: 'none',
            },
          },
          ':after': {
            borderBottom: 'none',
          },
          input: {
            '&::placeholder': {
              color: colors.grey[500],
            },
            color: colors.grey[500],
            padding: '0px',
          },
        },
      }}
    />
  );
}

export default CustomInput;
