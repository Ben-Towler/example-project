import { Card, Table, TableContainer, Tbody, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { RootState } from "../../../lib/redux";
import { AdminAccessGate } from "../../../components/access-gate/AdminAccessGate";
import { ProposalListItem } from "./ProposalListItem";
import { DeleteProposalDialog } from "./DeleteProposalDialog";

export const ProposalList = () => {
  const proposals = useSelector((state: RootState) => state.proposals.proposals);
  const { isOpen, onOpen, onClose} = useDisclosure()

  return (
    <>
      <Card>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Date</Th>
                <Th>Id</Th>
                <AdminAccessGate>
                  <Th>Actions</Th>
                </AdminAccessGate>
              </Tr>
            </Thead>
            <Tbody>
              {proposals.map(proposal => <ProposalListItem key={proposal.id} {...proposal} onOpen={onOpen} />)}
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
      <DeleteProposalDialog isOpen={isOpen} onClose={onClose} />
    </>
  )
}
