import HeaderWrapper from 'break-ui/components/Header/HeaderWrapper';
import BottomSection from 'break-ui/components/Header/SearchHeader/BottomSection';
import TopSection from 'break-ui/components/Header/SearchHeader/TopSection';
import { VStack } from 'break-ui/components/VStack';

interface SearchHeaderProps {}

function SearchHeader() {
  return (
    <HeaderWrapper>
      <TopSection />
      <BottomSection />
    </HeaderWrapper>
  );
}

export default SearchHeader;
