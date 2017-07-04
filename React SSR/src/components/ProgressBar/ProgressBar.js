import React from 'react'
import PropTypes from 'prop-types'
import NProgress from 'nprogress'
import './ProgressBar.css'

const ProgressBar = ({loading}) => {
  NProgress.configure({ showSpinner: false })
  loading ? NProgress.start() : NProgress.done()
  return (
    null
  )
}

ProgressBar.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default ProgressBar
