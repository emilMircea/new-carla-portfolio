import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

const Content = styled.div`
  text-align: center;
  margin-top: 10px;
  p {
    font-weight: bold;
  }
`

const CV = props => {
  return (
    <div>
      <Content>
        <h1>CV page</h1>
        <p>This page is using Emotion.</p>
      </Content>
    </div>
  )
}

CV.propTypes = {}

export default CV
