import HeaderWrapper from 'break-ui/components/Header/HeaderWrapper';
import LogoSection from 'break-ui/components/Header/LogoSection';
import TextButtonSection from 'break-ui/components/Header/TextButtonSection';

interface SearchHeaderProps {}

function SearchHeader() {
  return (
    <HeaderWrapper>
      <LogoSection />
      <TextButtonSection />
    </HeaderWrapper>
  );
}

export default SearchHeader;
