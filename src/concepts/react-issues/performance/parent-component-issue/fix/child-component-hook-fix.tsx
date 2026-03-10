import { Button } from "../components/button";
import { ModalDialog } from "../components/modal-dialog";
import useToggleDialog from "../hooks/useDialog";

export const ChildComponentHookFix = () => {
  const {isVisible, show, hide} = useToggleDialog();

  console.log('Only child component re-rendered')

  return (
    <>
      <Button onClick={show}>Open Dialog</Button>
      {isVisible ? <ModalDialog onClose={hide} /> : null}
    </>
  )
}
