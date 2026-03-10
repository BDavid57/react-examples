import { AdditionalComplexThings, BlaBla } from "./components/dummy-components";
import ScrollableContentFix from "./components/scrollable-content-fix";
import { SlowComponent } from "./components/slow-component";

export default function ScrollableComponentFix() {
  return (
    <ScrollableContentFix>
      <SlowComponent />
      <BlaBla />
      <AdditionalComplexThings />
    </ScrollableContentFix>
  );
}
