import Box from '@mui/material/Box';
import { Banner, Header } from 'break-ui';
import { SearchHeader } from 'break-ui/components/Header';
import colors from 'break-ui/styles/colors';

function Home() {
  return (
    <Box
      sx={{
        backgroundColor: colors.black,
      }}
    >
      <SearchHeader />
      <Banner />
    </Box>
  );
}

export default Home;
