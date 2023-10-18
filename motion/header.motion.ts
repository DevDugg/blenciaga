import { Variants } from "framer-motion";
import colors from "@/settings/ui/colors";

const variants: { [key: string]: Variants } = {
  tab: {
    initial: {
      border: `1px solid ${colors.BLACK}00`,
    },
    active: {
      border: `1px solid ${colors.BLACK}ff`,
    },
  },
};

export default variants;
