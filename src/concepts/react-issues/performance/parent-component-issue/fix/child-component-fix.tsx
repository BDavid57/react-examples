import { useState } from "react";
import { Button } from "../components/button";
import { ModalDialog } from "../components/modal-dialog";

export const ChildComponentFix = () => {
  const [visible, setVisible] = useState(false);

  console.log('Only child component re-rendered')

  return (
    <>
      <Button onClick={() => setVisible(true)}>Open Dialog</Button>
      {visible ? <ModalDialog onClose={() => setVisible(false)} /> : null}
    </>
  )
}
