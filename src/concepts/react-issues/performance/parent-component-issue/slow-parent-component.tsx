import { SlowComponent } from "./components/slow-component";
import { AdditionalComplexThings, BlaBla } from "./components/dummy-components";
import { ChildComponentFix } from "./fix/child-component-fix";
import { ChildComponentHookFix } from "./fix/child-component-hook-fix";
import { Button } from "./components/button";
import { useState } from "react";
import { ModalDialog } from "./components/modal-dialog";
import useToggleDialog from "./hooks/useDialog";

export const SlowParentComponent = () => {
  // const [visible, setVisible] = useState(false);
  // const {isVisible, show, hide} = useToggleDialog();

  console.log('Parent component re-rendered')

  return (
    <>
      {/* Non Hook */}
      {/* <Button onClick={() => {
        console.log('Child component re-rendered')
        setVisible(true)
      }}>Open Dialog</Button>
      {visible ? <ModalDialog onClose={() => setVisible(false)} /> : null} */}

      {/* Hook */}
      {/* <Button onClick={show}>Open Dialog</Button>
      {isVisible ? <ModalDialog onClose={hide} /> : null} */}

      <ChildComponentFix />
      {/* <ChildComponentHookFix /> */}

      <SlowComponent />
      <BlaBla />
      <AdditionalComplexThings />
    </>
  );
}
