import Button, { ButtonProps } from '@mui/material/Button';

interface TextButtonProps extends ButtonProps {}

function TextButton({ children }: TextButtonProps) {
  return (
    <Button
      sx={{
        padding: 0,
        ':hover': {
          background: 'none',
        },
      }}
    >
      {children}
    </Button>
  );
}

export default TextButton;
