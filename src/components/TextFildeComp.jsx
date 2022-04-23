import { FormControl, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch } from 'react-redux'
import {
  CHANGE_AMOUNT
} from '../app/reducer'


export const TextFildeComp = () => {
  const dispatch = useDispatch()

  const handelChange = (e) => {
    const { value } = e.target
    dispatch(CHANGE_AMOUNT(value))
  }


  return (
    <Box width="100%" mt={3}>
      <FormControl fullWidth>
        <TextField
          label="Amount of Questions"
          variant='outlined'
          type="number"
          size='small'
          onChange={handelChange}
        />
      </FormControl>
    </Box>
  )
}
