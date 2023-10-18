import { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  className?: string;
  withPadding?: boolean;
}

const Container = ({ children, className, withPadding }: IProps) => {
  return (
    <div
      className="max-w-[1920px] mx-auto w-full transition-all max-lg:px-6 overflow-hidden max-md:px-4"
      style={withPadding ? { padding: "0 12px", maxWidth: 1944 } : { padding: 0 }}
    >
      {className ? <div className={className}>{children}</div> : children}
    </div>
  );
};

export default Container;
