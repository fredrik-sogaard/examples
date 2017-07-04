import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar/ProgressBar'

const Skeleton = ({match}) => (
  <section className='vh-100'>
    <Route path={match.url} render={() => <ProgressBar loading />} />
    <article className='pt6 bg-white'>
      <section className='mw7 ph3 ph4-ns center mt6 mb5 mv6-ns'>
        <span className='f5 f4-ns lh-copy neuzeit-book brand-dark mt0 mb4 skeleton'>
          This text is for loading purpses only.
        </span>
        <span className='f5 f4-ns lh-copy neuzeit-book brand-dark mt0 mb4 skeleton'>
          This text is for loading purpses only. This text is for loading purpses only.
        </span>
        <span className='f5 f4-ns lh-copy neuzeit-book brand-dark mt0 mb4 skeleton'>
          This text is for loading purpses only.
        </span>
      </section>
    </article>
  </section>
)

Skeleton.PropTypes = {
  match: PropTypes.object.isRequired
}

export default Skeleton
