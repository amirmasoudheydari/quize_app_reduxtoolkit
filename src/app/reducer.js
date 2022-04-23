import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";
import {
  client
} from '../api/useAxios'


export const getCategory = createAsyncThunk('app/getCategory', async () => {

  const response = await client.get({
    url: '/api_category.php'
  })
  return response.data.trivia_categories
})



export const getQuestion = createAsyncThunk('app/getQuestions', async (baseURL) => {
  console.log(baseURL)
  const response = await client.get({
    url: baseURL
  })
  return response.data.results
})

const initialState = {
  status: 'idle',
  category: {},
  entities: {
    question_category: '',
    question_difficulty: '',
    question_type: '',
    amount_of_questions: 10,
    score: 0,
    baseURL: '/api.php?amount=10'
  },
  questions: []
}

const rootReducer = createSlice({
  name: 'app',
  initialState,



  reducers: {
    CHANGE_CATEGORY: (state, action) => {
      const category = action.payload
      state.entities.question_category = category
    },
    CHANGE_AMOUNT: (state, action) => {
      const amount = action.payload
      state.entities.amount_of_questions = amount

    },
    CHANGE_DIFFICULTY: (state, action) => {
      const difficulty = action.payload
      state.entities.question_difficulty = difficulty
    },
    CHANGE_SCORE: (state) => {
      const score = state.entities.score
      state.entities.score = score + 1
    },
    CHANGE_TYPE: (state, action) => {
      const type = action.payload
      state.entities.question_type = type
    },
    RESET: (state) => ({
      ...initialState,
      category: state.category
    }),
    CHANGE_BASE_URL: (state) => {
      let {
        amount_of_questions,
        baseURL,
        question_category,
        question_difficulty,
        question_type,
      } = state.entities
      let final = ''


      amount_of_questions = `amount=${amount_of_questions}`
      question_category = question_category ? `&category=${question_category}` : ''
      question_difficulty = question_difficulty ? `&difficulty=${question_difficulty}` : ''
      question_type = question_type ? `&type=${question_type}` : ''
      final = final + amount_of_questions + question_category + question_difficulty + question_type
      state.entities.baseURL = baseURL.slice(0, 9) + final
    }
  },




  extraReducers: {
    [getCategory.pending]: (state) => {
      state.status = 'loading'
    },
    [getCategory.fulfilled]: (state, action) => {
      state.category = action.payload
      state.status = 'sucess'
    },
    [getCategory.rejected]: (state, action) => {
      console.log(action.payload)
      state.status = 'rejected'
    },
    [getQuestion.pending]: (state) => {
      state.status = 'loading'
    },
    [getQuestion.fulfilled]: (state, action) => {
      if (Object.keys(state.questions).length === 0) {
        state.questions = action.payload
        state.status = 'sucess'
      }
    },
  }
})

export const {
  CHANGE_CATEGORY,
  CHANGE_AMOUNT,
  CHANGE_DIFFICULTY,
  CHANGE_SCORE,
  CHANGE_TYPE,
  RESET,
  CHANGE_BASE_URL
} = rootReducer.actions

export default rootReducer.reducer