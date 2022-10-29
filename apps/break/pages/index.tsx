import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";

export default function Break() {
  const theme = useTheme();

  return (
    <div>
      <h1>Break</h1>
      <Button>버튼2</Button>
    </div>
  );
}
