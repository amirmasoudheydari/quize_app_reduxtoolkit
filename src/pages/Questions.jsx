import { Box, Button, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CHANGE_SCORE } from '../app/reducer'
import { decode } from 'html-entities';
import { getQuestion } from '../app/reducer'
import store from '../app/store'


const getRandom = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}



export const Questions = () => {
  const {questions,status} = useSelector(state => state)
  const {
    score,
    baseURL
  } = useSelector(state => state.entities)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [questionUser, setQeustionUser] = useState({})
  const [option, setoption] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    store.dispatch(getQuestion(baseURL))
  },[baseURL])




  useEffect(() => {

    if (questions.length > 0) {
      setQeustionUser(questions[questionIndex])
    }
    
    
    if (questionUser.type) {
      let answers = [...questionUser.incorrect_answers]
      answers.splice(
        getRandom(answers.length),
        0,
        questionUser.correct_answer
      )
      setoption(answers)
    }

  }, [questions,questionUser,questionIndex])

  if (status == 'loading') {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    )
  }

  const handelClick = (name) => {
    if (name === questionUser.correct_answer) {
      dispatch(CHANGE_SCORE(score + 1))
    }

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1)
    } else {
      navigate('/finalscreen')
    }

  }

  return (
    <Box>
      <Typography variant='h5'>
        {
          decode(questionUser.question)
        }
      </Typography>
      <Typography mt={5}>
        This is the questions: {questionIndex + 1}
      </Typography>
      {option.map((name, id) => {
        return (
          <Box key={id} mt={2}>
            <Button onClick={() => handelClick(name)} variant='contained'>
              {name}
            </Button>
          </Box>
        )
      })}
      <Box mt={5}>
        Score: {score} / {questions.length}
      </Box>
    </Box>
  )
}
