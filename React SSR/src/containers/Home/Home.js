import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { Link } from 'react-router-dom'

class Home extends Component {
  static fetchData (match) {
    // going to want `match` in here for params, etc.
    return fetch('http://feed.dev/api/work.json').then(res => res.json())
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

  render () {
    return (
      <div>
        <div id='color-bg' className='bg-black-10 h-200 fixed absolute--fill z--999' />
        <div id='slides' className='relative'>
          {this.state.data && this.state.data.map((post, index) => (
            <article
              data-color='{project.projectColor}'
              key={index}
              className='vh-adapt vh-100-ns vw-100 flex flex-column flex-row-ns items-center justify-between pv5 ph4 pa6-ns'
            >
              <div className='w-100 w-50-ns mb4 ph3 order-last-ns'>
                <img
                  width={post.coverImage.width}
                  src={`http://feed.dev${post.coverImage.original}`}
                  className='center db'
                  alt={post.coverImage.title}
                />
              </div>
              <section className='titles'>
                <h1 className='mv0 neuzeit-book f3 f1-ns lh-title'>{post.title}</h1>
                <h2 className='neuzeit-book f5 f3-ns lh-copy pv3'>{post.subtitle}</h2>
                <Link className='db neuzeit-book f5 f3-ns link no-underline' to={`/work/${post.slug}`}>
                  View case study
                </Link>
              </section>
            </article>
          ))}
        </div>
      </div>
    )
  }
}

export default Home
