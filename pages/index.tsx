import {
  Box,
  createTheme,
  CssBaseline,
  Paper,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material'
import Head from 'next/head'
import { useState } from 'react'

import splitbee from '@splitbee/web'
import BottomBar from '../components/BottomBar'
import Choices from '../components/Choices'
import PaperList from '../components/PaperList'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default function App() {
  const [papers, setPapers]: [any, any] = useState([])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Exam Finder: State Exam Papers</title>
      </Head>
      <Stack
        direction="column"
        spacing={3}
        justifyContent="flex-start"
        alignItems="center"
        sx={{ minHeight: '100vh' }}
      >
        <Choices papers={papers} setPapers={setPapers} />
        <Stack>
          <a
            href="https://www.examinations.ie/misc-doc/BI-EX-7266997.pdf"
            target="_blank"
            style={{
              textDecoration: 'none',
              display: 'inline-block',
            }}
            rel="noreferrer"
            onClick={() => splitbee.track('Formula and Tables')}
          >
            <Paper elevation={5}>
              <Box
                sx={{
                  background: '#f44336',
                  paddingX: 2,
                  paddingY: 1,
                  borderRadius: 1,
                }}
              >
                <Typography variant="h6">Formula and Tables Book</Typography>
              </Box>
            </Paper>
          </a>
        </Stack>
        <PaperList papers={papers} />
        <Box sx={{ flexGrow: 1 }}></Box>
        <BottomBar />
      </Stack>
    </ThemeProvider>
  )
}
