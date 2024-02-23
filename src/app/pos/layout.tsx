import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  searchParams: string;
}

const PosLayout = (props) => {
  console.log(props);

  return <div className="container mx-auto p-4">{/* {children} */}</div>;
};

export default PosLayout;
