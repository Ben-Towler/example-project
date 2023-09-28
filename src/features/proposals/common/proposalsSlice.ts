import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Proposal = { name: string; date: string; id: string };

type ProposalsState = {
  proposals: Proposal[];
  activeProposal?: string;
}

const initialState = { proposals: [], activeProposal: undefined } as ProposalsState

export const proposalsSlice = createSlice({
  name: "proposals",
  initialState,
  reducers: {
    addProposal: (state, action: PayloadAction<Proposal>) => {
      state.proposals.push(action.payload);
    },
    removeProposal: (state, action: PayloadAction<{ id: string }>) => {
      state.proposals = state.proposals.filter(({ id }) => id !== action.payload.id);
    },
    setActiveProposal: (state, action: PayloadAction<{ id: string }>) => {
      state.activeProposal = action.payload.id;
    },
    resetActiveProposal: (state) => {
      state.activeProposal = undefined;
    },
  },
});
