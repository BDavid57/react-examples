import { PropsWithChildren, useState } from "react";
import { DynamicBlock, ScrollableContainer } from "./dummy-components";

const calculatePosition = (scrollValue: number) => 170 - scrollValue / 2;

const calculateColor = (position: number) => {
  const normalizedPosition = Math.min(Math.max(position, 0), 255);
  return `rgb(${normalizedPosition}, ${255 - normalizedPosition}, 150)`;
};

export default function ScrollableContentFix({children}: PropsWithChildren) {
  const [position, setPosition] = useState(170);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const newPosition = calculatePosition(e.currentTarget.scrollTop);
    setPosition(Math.max(113, newPosition));
  };

  const blockColor = calculateColor(position);

  return (
    <ScrollableContainer onScroll={handleScroll}>
      <DynamicBlock top={position === 113 ? 113 : position} color={blockColor}>
        🛒
      </DynamicBlock>
      {children}
    </ScrollableContainer>
  );
}
