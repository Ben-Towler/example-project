import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogProps, Button } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { proposalsSlice } from "../common/proposalsSlice";
import { useRef } from "react";
import { toast } from "react-toastify";
import { RootState } from "../../../lib/redux";

export const DeleteProposalDialog = ({ isOpen, onClose }: Pick<AlertDialogProps, "isOpen" | "onClose">) => {
  const cancelRef = useRef(null);
  const dispatch = useDispatch();
  const activeProposalId = useSelector((state: RootState) => state.proposals.activeProposal);

  const onConfirmDeleteClick = () => {
    if (!activeProposalId) {
      return;
    }

    dispatch(proposalsSlice.actions.removeProposal({ id: activeProposalId }));
    dispatch(proposalsSlice.actions.resetActiveProposal());

    onClose();
    toast.success("Proposal deleted");
  }

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="2xl" fontWeight="bold" pb={0}>
            Delete Proposal
          </AlertDialogHeader>
          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={onConfirmDeleteClick} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}