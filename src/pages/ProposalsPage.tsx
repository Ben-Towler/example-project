import { Grid, Heading, StackItem, VStack } from "@chakra-ui/react";
import { Layout } from "../components/layout";
import { NewProposalForm } from "../features/proposals/components/NewProposalForm";
import { ProposalList } from "../features/proposals/components/ProposalList";
import { AdminAccessGate } from "../components/access-gate/AdminAccessGate";

export const ProposalsPage = () => (
  <Layout>
    <VStack gap={4} width="100%">
      <StackItem width="100%">
        <Heading size="lg">Proposals</Heading>
      </StackItem>
      <StackItem width="100%">
        <Grid templateColumns="auto 350px" gap="30px">
          <ProposalList />
          <AdminAccessGate>
            <NewProposalForm />
          </AdminAccessGate>
        </Grid>
      </StackItem>
    </VStack>
  </Layout>
);
