import React from "react";
interface BasicComponentProps {
  name: string;
}
const BasicComponent = ({ name }: BasicComponentProps) => {
  return <div>Hello, Iam {name}</div>;
};

export default BasicComponent;
