import React from 'react'
import PropTypes from 'prop-types'

const Image = ({
  backgroundFillColor,
  useFullWidth,
  full
}) => {
  if (backgroundFillColor && backgroundFillColor !== '#ffffff') {
    if (useFullWidth) {
      return (
        <section style={{background: backgroundFillColor}} className='pv4 pv5-ns'>
          <div className='mw8 ph3 ph4-ns mv4 mv5-ns center image db'>
            <img src={`http://feed.dev${full}`} alt='' />
          </div>
        </section>
      )
    }
    return (
      <section style={{background: backgroundFillColor}} className='mw8 center mv4 mv5-ns pa4 pa5-ns'>
        <img src={`http://feed.dev${full}`} alt='' />
      </section>
    )
  }
  return (
    <section className='ph3 ph4-ns mw8 center'>
      <img src={`http://feed.dev${full}`} alt='' />
    </section>
  )
}

Image.propTypes = {
  backgroundFillColor: PropTypes.string.isRequired,
  useFullWidth: PropTypes.bool.isRequired,
  full: PropTypes.string.isRequired
}

export default Image
