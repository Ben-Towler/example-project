import { SubmitHandler, useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Card,
  Heading,
  VStack,
  StackItem,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { proposalsSlice } from '../common/proposalsSlice'
import { toast } from 'react-toastify';
import short from "short-uuid";

type FormValues = { name: string };

export const NewProposalForm = () => {
  const { handleSubmit, register, formState: { errors, isSubmitting }, reset} = useForm<FormValues>()
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    dispatch(proposalsSlice.actions.addProposal({
      name: values.name,
      date: new Date().toLocaleString(),
      id: short().new(),
    }))

    reset();
    toast.success("Proposal added");
  };

  return (
    <Card p={5}>
      <VStack>
        <StackItem width="100%">
          <Heading size="md">Create new proposal</Heading>
        </StackItem>
        <StackItem width="100%">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.name}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                placeholder="name"
                bg="white"
                {...register("name", {
                  required: "This is required",
                  minLength: { value: 2, message: "Min length should be 2" },
                })}
              />
              <FormErrorMessage>
                <>{errors.name && errors.name.message}</>
              </FormErrorMessage>
            </FormControl>
            <Button mt={4} colorScheme="blue" isLoading={isSubmitting} type="submit">
              Submit
            </Button>
          </form>
        </StackItem>
      </VStack>
    </Card>
  )
}