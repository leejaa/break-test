import Box from '@mui/material/Box';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Box maxWidth="500px" margin="auto">
      {children}
    </Box>
  );
}

export default Layout;
