import Button, { ButtonProps } from '@mui/material/Button';

interface TextButtonProps extends ButtonProps {}

function TextButton({ children, ...rest }: TextButtonProps) {
  return (
    <Button
      sx={{
        padding: 0,
        ':hover': {
          background: 'none',
        },
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default TextButton;
