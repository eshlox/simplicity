import '../styles/styles'

import baguetteBox from 'baguettebox.js'
import Headroom from 'headroom.js'
import LazyLoad from 'vanilla-lazyload'

document.addEventListener('DOMContentLoaded', function(event) {
  // LazdyLoad
  const myLazyLoad = new LazyLoad();

  // Lightbox
  baguetteBox.run('main', {})

  // Hide header
  const navbar = document.querySelector('nav');
  const headroom = new Headroom(navbar, {
    'offset': 205,
    'tolerance': 5,
    'classes': {
      'initial': 'animated',
      'pinned': 'slideDown',
      'unpinned': 'slideUp'
    }
  })
  headroom.init()

  // Article progress bar
  const progressBar = document.getElementsByClassName('progress-bar')
  if (progressBar.length) {
    window.onscroll = function () {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      document.getElementsByClassName('progress-bar')[0].style.width = scrolled + '%'
    }
  }
})
