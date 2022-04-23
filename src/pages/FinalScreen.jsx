import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {RESET} from '../app/reducer'

export const FinalScreen = () => {
  const { score } = useSelector(state => state.entities)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handelClick = () => {
    dispatch(RESET(score))
    navigate('/')
   }

  return (
    <Box mt={5}>
      <Typography variant='h3' color="lightblack">
        score: {score}
      </Typography>
      <Button
        onClick={handelClick}
        variant="contained"
        component="div"
        sx={{ mt: 5 }}
        color='error' >
        back
      </Button>
    </Box>
  )
}

