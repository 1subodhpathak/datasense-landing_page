import { IconType } from "react-icons";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
  image: string;
  buttonText: string;
  onButtonClick?: () => void;
  reverse?: boolean;
}