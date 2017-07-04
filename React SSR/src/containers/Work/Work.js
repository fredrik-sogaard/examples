import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { Route } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import Intro from '../../components/Intro/Intro'
import Text from '../../components/Text/Text'
import Image from '../../components/Image/Image'
import Footer from '../../components/Footer/Footer'
import Skeleton from '../../components/Skeleton/Skeleton'

class Work extends Component {
  static fetchData (match) {
    // going to want `match` in here for params, etc.
    return fetch(`http://feed.dev/api/work/${match.params.slug}.json`).then(res => res.json())
  }

  constructor (props) {
    super(props)
    const {data} = this.props.initialData || false
    this.state = { data }
  }

  componentDidMount () {
    if (!this.state.data) {
      this.constructor.fetchData(this.props.match)
        .then(json => this.setState({...json}))
    }
  }

  renderPageBlocks (block) {
    if (block.type === 'image') {
      return <Image key={block.id} {...block} />
    }
    if (block.type === 'text') {
      return <Text key={block.id} {...block} />
    }
  }

  render () {
    if (!this.state.data) {
      return (
        <Skeleton match={this.props.match} />
      )
    }

    const {
      data: {
        title,
        intro,
        pageBuilder,
        nextProject
      }
    } = this.state

    return (
      <section className='vh-100 bg-white'>
        <Route path={this.props.match.url} render={() => <ProgressBar loading={false} />} />
        <article className='pt6'>
          <Intro title={title} intro={intro} />
          {pageBuilder && pageBuilder.map(block => this.renderPageBlocks(block))}
        </article>
        <Footer {...nextProject} />
      </section>
    )
  }
}

export default Work
