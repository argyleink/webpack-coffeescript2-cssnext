import styles from './style.css'

HelloWorld = ->
  element = document.createElement('div')

  element.className = 'hello-world'
  element.innerHTML = "Hello from Webpack"

  return element

export default HelloWorld