import styles from './hello-world.css'

export default HelloWorld = ->
  element = document.createElement('div')

  element.className = 'hello-world'
  element.innerHTML = 'Sup Webpack'
  return element