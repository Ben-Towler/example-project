import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi';
import { dashboardSlice } from '../common/dashboardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../lib/redux';

export const TickerSearch = () => {
  const searchQuery = useSelector((state: RootState) => state.dashboard.searchQuery)
  const dispatch = useDispatch()

  const handleChange = (value: string) => {
    dispatch(dashboardSlice.actions.setSearchQuery(value))
  };

  return (
    <InputGroup width="320px">
      <InputLeftElement pointerEvents='none'>
        <FiSearch color='gray.300' />
      </InputLeftElement>
      <Input
        value={searchQuery}
        placeholder="Search"
        bg="white"
        onChange={({ target: { value }}) => handleChange(value)}
      />
    </InputGroup>
  )
};
