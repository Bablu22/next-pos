import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  searchParams: string;
}

const PosLayout = ({ children }: { children: ReactNode }) => {
  return <div className="">{children}</div>;
};

export default PosLayout;
