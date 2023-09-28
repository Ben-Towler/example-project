import { useNavigate, useParams } from "react-router-dom";
import { SymbolDetails } from "../features/symbol/components/SymbolDetails";
import { Layout } from "../components/layout";
import { Button, HStack, Heading, StackItem, VStack } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";

export const SymbolPage = () => {
  const { symbol } = useParams();
  const navigate = useNavigate();

  const onBackClick = () => navigate("/");

  if (!symbol) {
    return <>No symbol</>
  }

  return (
    <Layout>
      <VStack gap={4} width="100%">
        <HStack width="100%" justifyContent="space-between">
          <Heading size="lg">{symbol}</Heading>
          <Button
            variant="outline"
            leftIcon={<FiArrowLeft />}
            onClick={onBackClick}
            bg="white"
          >
            Back
          </Button>
        </HStack>
        <StackItem width="100%">
          <SymbolDetails symbol={symbol} />
        </StackItem>
      </VStack>
    </Layout>
  );
}
