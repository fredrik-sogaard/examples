import Barba from 'barba.js'
import anime from 'animejs'
import ScrollMagic from 'scrollmagic'

export const initHomepage = () => {
  // Loop over each slide on homepage, add ScrollMagic triggers,
  // and set up animations for background color and titles.
  document.querySelectorAll('#slides > article').forEach((slide, index) => {
    new ScrollMagic.Scene({
      triggerElement: `#slide-${index}`,
      duration: window.innerHeight
      // offset: -200
    })
    .on('enter', function (e) {
      anime({
        targets: document.getElementById('color-bg'),
        backgroundColor: slide.dataset.color,
        duration: 400,
        easing: 'linear'
      })
      anime({
        targets: document.querySelectorAll(`#slide-${index} > .titles > *`),
        easing: 'easeOutExpo',
        duration: 400,
        delay: function (target, index) {
          return index * 50 + 150
        },
        translateY: function (target, index) {
          return [50 + 10 * index, 0]
        },
        opacity: {
          value: [0, 1],
          duration: 400,
          easing: 'linear'
        }
      })
    })
    .on('leave', function (e) {
      anime({
        targets: document.querySelectorAll(`#slide-${index} > .titles > *`),
        opacity: {
          value: [1, 0],
          duration: 200,
          easing: 'linear'
        }
      })
    })
    .addTo(new ScrollMagic.Controller())
  })
}

// Views Setup
export const Homepage = Barba.BaseView.extend({
  namespace: 'homepage',
  onEnter: function () {
    // The new Container is ready and attached to the DOM.
    // console.log(this.namespace, 'On Enter')
    // window.scrollTo(0, 0)
  },
  onEnterCompleted: function () {
    // The Transition has just finished.
    // console.log(this.namespace, 'Enter Complete')
    document.getElementById('color-bg').style.background = document.getElementById('slide-0').dataset.color
  },

  onLeave: function () {
    // A new Transition toward a new page has just started.
    // console.log(this.namespace, 'On Leave')
  },
  onLeaveCompleted: function () {
    // The Container has just been removed from the DOM.
    // console.log(this.namespace, 'On Leave Complete')
    // Best way to put this is here?
    // window.scrollTo(0, 0)
  }
})
