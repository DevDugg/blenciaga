import colors from "@/settings/ui/colors";

interface IProps {
  name: string;
  striked?: boolean;
}

const Size = ({ name, striked }: IProps) => {
  return (
    <span
      className="size uppercase text-[10.5px]"
      style={striked ? { textDecoration: "line-through", color: colors.GRAY } : {}}
    >
      {name}
    </span>
  );
};
export default Size;
