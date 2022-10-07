import React from 'react'
import styled from 'styled-components'

const Test = styled.div`
  button {
    box-sizing: border-box;
    padding: 10px;
    font-size: 14px;
  }
`
function App() {
  return (
    <Test>
      <h1>Hello World</h1>
      <button type='submit'>Click</button>
    </Test>
  )
}

export default App
