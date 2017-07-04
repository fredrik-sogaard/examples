import Barba from 'barba.js'
import inView from 'in-view'

// InView Setup
export const initWorkSingle = () => {
  inView('.image')
    .on('enter', el => el.classList.add('fadeInUp'))
}

// Views Setup
export const WorkSingle = Barba.BaseView.extend({
  namespace: 'work-single',
  onEnter: function () {
    // The new Container is ready and attached to the DOM.
    console.log(this.namespace, 'On Enter')
  },
  onEnterCompleted: function () {
    // The Transition has just finished.
    console.log(this.namespace, 'Enter Complete')
  },

  onLeave: function () {
    // A new Transition toward a new page has just started.
    console.log(this.namespace, 'On Leave')
  },
  onLeaveCompleted: function () {
    // The Container has just been removed from the DOM.
    console.log(this.namespace, 'On Leave Complete')
  }
})
