import $ from 'jquery'
import Barba from 'barba.js'
import NProgress from 'nprogress'
// eslint-disable-next-line
import lazysizes from 'lazysizes'
import { Homepage, initHomepage } from './views/homepage.js'
import { WorkSingle, initWorkSingle } from './views/work-single.js'

// Initial Setup
NProgress.configure({ showSpinner: false })
Barba.Prefetch.init()
Barba.Pjax.Dom.containerClass = 'content-container'
Barba.Pjax.Dom.wrapperId = 'content-wrapper'

Barba.Dispatcher.on('newPageReady', (currentStatus, oldStatus, container) => {
  // console.log(currentStatus.namespace, 'Ready')
  // Put global js inits here
  initWorkSingle()
  initHomepage()
})
Barba.Dispatcher.on('initStateChange', currentStatus => {
  // console.log('initStateChange: ', currentStatus)
})
Barba.Dispatcher.on('transitionCompleted', currentStatus => {
  // console.log('transitionCompleted: ', currentStatus)
})

// Common Page Transition Setup
let CommonTransition = Barba.BaseTransition.extend({
  start: function () {
    NProgress.start()
    Promise
      .all([this.newContainerLoading, this.pageExit()])
      .then(this.pageEnter.bind(this))
  },
  pageExit: function () {
    // TODO: Remove jQuery dependency
    return $(this.oldContainer).addClass('is-exiting').delay(600).promise()
  },
  pageEnter: function () {
    NProgress.done()
    // TODO: Remove jQuery dependency
    $(this.newContainer).addClass('is-entering').delay(600).queue(function () {
      $(this).removeClass('is-entering').dequeue()
    })
    this.done()
  }
})

Barba.Pjax.getTransition = function () {
  return CommonTransition
}

// Wait for DOM ready before starting
document.addEventListener('DOMContentLoaded', function () {
  Homepage.init()
  WorkSingle.init()
  Barba.Pjax.start()
})
