import { Container, CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { FinalScreen, Questions, Setting } from './pages'

const App = () => {

  return (
    <Router>
      <CssBaseline />
      <Container maxWidth='sm'>
        <Box textAlign='center' mt={5}>
          <Routes>
            <Route path='/' element={<Setting />} />
            <Route path='/questions' element={<Questions />} />
            <Route path='/finalscreen' element={<FinalScreen />} />
          </Routes>
        </Box>

      </Container>

    </Router>
  )
}

export default App;