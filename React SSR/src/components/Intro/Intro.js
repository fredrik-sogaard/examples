import React from 'react'
import PropTypes from 'prop-types'

const Intro = ({title, intro}) => (
  <section className='mw7 ph3 ph4-ns center mt6 mb5 mv6-ns'>
    <p className='f5 f4-ns lh-copy neuzeit-book brand-dark mt0 mb4'>
      <span className='f5 f4-ns lh-copy brand-dark b'>{title} </span>
      {intro}
    </p>
  </section>
)

Intro.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired
}

export default Intro
