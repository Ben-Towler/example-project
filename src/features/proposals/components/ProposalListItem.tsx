import { useDispatch } from "react-redux";
import { Proposal, proposalsSlice } from "../common/proposalsSlice";
import { Button, Td, Text, Tr } from "@chakra-ui/react";
import { AdminAccessGate } from "../../../components/access-gate/AdminAccessGate";

type Props = {
  onOpen: () => void;
} & Proposal;

export const ProposalListItem = ({ name, date, id, onOpen }: Props) => {
  const dispatch = useDispatch();
  
  const onDeleteProposal = () => {
    dispatch(proposalsSlice.actions.setActiveProposal({ id }));
    onOpen();
  }

  return (
    <Tr>
      <Td>
        <Text>{name}</Text>
      </Td>
      <Td>
        <Text>{date}</Text>
      </Td>
      <Td>
        <Text>{id}</Text>
      </Td>
      <AdminAccessGate>
        <Td>
          <Button colorScheme="red" onClick={onDeleteProposal}>Delete</Button>
        </Td>
      </AdminAccessGate>
    </Tr>
  )
};