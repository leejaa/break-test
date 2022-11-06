import Typography from '@mui/material/Typography';
import colors from 'break-ui/styles/colors';

function CaptionSection() {
  return (
    <Typography variant="caption1" marginTop="12px" color={colors.grey[500]}>
      개별 카드는 텍스트 검색으로 쉽게 <br />
      대량 등록도 손쉽게
    </Typography>
  );
}

export default CaptionSection;
