import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import iconList from 'break-ui/components/Icons/IconList';

type IconType = keyof typeof iconList;

interface IconProps extends SvgIconProps {
  icon: IconType;
}

function Icon({ icon, ...props }: IconProps) {
  return <SvgIcon {...props}>{iconList[icon]}</SvgIcon>;
}

export default Icon;
