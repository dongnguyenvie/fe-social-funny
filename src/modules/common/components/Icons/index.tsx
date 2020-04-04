import React from "react";
import Icon, { IconProps } from "@material-ui/core/Icon";

interface IIcons extends IconProps {
  icon: string;
}

export default function Icons(props: IIcons) {
  const { icon } = props;
  return <Icon {...props}>{icon}</Icon>;
}
