import { useState } from "react";
import { AdditionalComplexThings, BlaBla, DynamicBlock, ScrollableContainer } from "./components/dummy-components";
import { SlowComponent } from "./components/slow-component";

const calculatePosition = (scrollValue: number) => 170 - scrollValue / 2;

const calculateColor = (position: number) => {
  const normalizedPosition = Math.min(Math.max(position, 0), 255);
  return `rgb(${normalizedPosition}, ${255 - normalizedPosition}, 150)`;
};

export const ScrollableComponent = () => {
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
      <SlowComponent />
      <BlaBla />
      <AdditionalComplexThings />
    </ScrollableContainer>
  );
}
