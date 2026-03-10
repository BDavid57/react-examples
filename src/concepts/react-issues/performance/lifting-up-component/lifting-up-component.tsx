import { ReRenderedComponent, ReRenderedComponentFix } from "."
import { AdditionalComplexThings } from "./components"

export const LiftingUpComponent = () => {
  return (
    <>
      <ReRenderedComponent />
      {/* <ReRenderedComponentFix blablaComponent={<BlaBla />} additionalComplexThingsComponent={<AdditionalComplexThings />} /> */}
    </>
  )
}
