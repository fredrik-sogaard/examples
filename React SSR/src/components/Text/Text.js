import React from 'react'
import PropTypes from 'prop-types'

const Text = ({content, backgroundFillColor}) => {
  if (backgroundFillColor && backgroundFillColor !== '#ffffff') {
    return (
      <section style={{background: backgroundFillColor}} className='pv4 pv5-ns'>
        <div
          className='mw7 center ph3 ph4-ns f5 f4-ns lh-copy neuzeit-book brand-dark mt0 mb0'
          dangerouslySetInnerHTML={{__html: content}}
        />
      </section>
    )
  }
  return (
    <section
      className='mw7 ph3 ph4-ns center mt6 mb5 mv6-ns f5 f4-ns lh-copy neuzeit-book brand-dark'
      dangerouslySetInnerHTML={{__html: content}}
    />
  )
}

Text.PropTypes = {
  content: PropTypes.string.isRequired,
  backgroundFillColor: PropTypes.string.isRequired
}

export default Text
