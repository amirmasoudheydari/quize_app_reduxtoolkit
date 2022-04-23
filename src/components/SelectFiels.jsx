import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'




import {
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_TYPE
} from '../app/reducer'

export const SelectFieldes = props => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const { lable, option } = props

  const handelChange = e => {
    setValue(e.target.value)
    switch (lable) {
      case 'Category':
        dispatch(CHANGE_CATEGORY(e.target.value))
        break;
      case 'Difficulty':
        dispatch(CHANGE_DIFFICULTY(e.target.value))
        break;
      case 'Type':
        dispatch(CHANGE_TYPE(e.target.value))
        break;
      default:
        break;
    }

  }

  return (
    <Box width="100%" mt={3}>
      <FormControl fullWidth size='small'>
        <InputLabel>{lable}</InputLabel>
        <Select
          label={lable}
          value={value}
          onChange={handelChange}
        >
          {option.map(({ id, name }) => {
            return (

              <MenuItem key={id} value={id}>{name}</MenuItem>
            )
          })}
        </Select>
      </FormControl >
    </Box>

  )
}
