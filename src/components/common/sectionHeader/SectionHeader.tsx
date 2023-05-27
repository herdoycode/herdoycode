import { ReactNode } from "react";
import "./SectionHeader.css";

interface Props {
  children: ReactNode;
}

const SectionHeader = ({ children }: Props) => {
  return (
    <div className="section-header">
      <h2 className="section-title">{children}</h2>
    </div>
  );
};

export default SectionHeader;
