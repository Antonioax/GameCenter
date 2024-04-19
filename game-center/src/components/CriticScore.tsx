import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 80 ? "green" : score > 60 ? "yellow" : "";
  return (
    <>
      <Badge paddingX={2} borderRadius={"6px"} fontSize={"14px"} colorScheme={color}>
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
