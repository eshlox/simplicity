document.addEventListener('DOMContentLoaded', function(event) {
  // LazdyLoad
  const myLazyLoad = new LazyLoad()

  // Lightbox
  baguetteBox.run('main', {})

  // Hide header
  const navbar = document.querySelector('nav')
  if (navbar) {
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
  }
})
