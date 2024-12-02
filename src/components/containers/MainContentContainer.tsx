import React from "react";
import { useLocation } from "react-router-dom";

interface IProps {
  children?: React.ReactNode;
}

export const MainContentContainer: React.FC<IProps> = (props) => {
  const { pathname } = useLocation();
  const { children } = props;
  return (
    <div className="p-10">
      <div className="col-span-12 h-full w-full"></div>
      {children}
    </div>
  );
};
