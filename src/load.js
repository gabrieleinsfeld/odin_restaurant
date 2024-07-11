import restaurant from './restaurant.jpg'
import './load.css'
import odin from './odin.png'
export default function createPage(){
    const content = document.getElementById('content')
    const textContainer = document.createElement('div')
    const imgContainer = document.createElement('div')


    const odinImg = document.createElement('img')
    odinImg.setAttribute('id', 'odin_img')
    odinImg.src = odin
    textContainer.setAttribute('id', 'text_container')
    imgContainer.setAttribute('id', 'img_container')
    imgContainer.appendChild(odinImg)
    


    const heading = document.createElement('h1')
    heading.textContent = 'Welcome to Odin Restaurant'
    textContainer.appendChild(heading)


    const description = document.createElement('p')
    description.textContent = 'This is the restaurant where you can eat and code along'
    textContainer.appendChild(description)

    content.appendChild(textContainer)
    content.appendChild(imgContainer)

}