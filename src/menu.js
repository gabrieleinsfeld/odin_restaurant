import './menu.css'

const menu = [
    {
      topic: "Algorithm Appetizers",
      description: "Kick off your meal with a selection of byte-sized starters designed to get your taste buds looping with delight."
    },
    {
      topic: "Frameworks & Frameworks",
      description: "Savor the structured flavors of our framework-inspired dishes, each crafted to build the foundation of a great meal."
    },
    {
      topic: "Server-Side Salads",
      description: "Fresh and functional, these salads bring the best of server-side ingredients to your plate, ensuring a crisp and refreshing start."
    },
    {
      topic: "Database Delights",
      description: "Dive into our data-driven delights, where each dish is a carefully curated entry in our culinary database."
    },
    {
      topic: "Frontend Favorites",
      description: "Frontend flavors that deliver instant gratification, these favorites are styled to perfection for a visually delicious experience."
    },
    {
      topic: "Backend Bites",
      description: "Robust and reliable, our backend bites are the powerhouse of flavors, offering a satisfying and hearty dining experience."
    },
    {
      topic: "DevOps Dishes",
      description: "Streamlined and efficient, our DevOps dishes bring together a harmonious blend of flavors in a continuous delivery of taste."
    },
    {
      topic: "Full-Stack Feasts",
      description: "A comprehensive culinary journey from frontend to backend, these feasts offer a complete and balanced taste of our kitchen's capabilities."
    }
  ];
  

export default function createMenu(){
    const content = document.getElementById('content')
    content.innerHTML = ''
    content.classList.remove('home')
    content.classList.add('menu')
    const textContainer = document.createElement('div')
    const description = document.createElement('p')
    description.textContent = 'This is our menu:'
    textContainer.setAttribute('id', 'text_container')
    textContainer.appendChild(description)

    const menuContainer = document.createElement('div')
    menuContainer.setAttribute('id', 'menu_container')


    for (let index = 0; index < menu.length; index++) {
        const element = menu[index];
        const div = document.createElement('div')
        const topic = document.createElement('div')
        topic.classList.add('topic')
        topic.textContent = element['topic']

        const description = document.createElement('div')
        description.classList.add('description')
        description.textContent = element['description']

        div.setAttribute('class', 'menu_item')
        div.appendChild(topic)
        div.appendChild(description)
        menuContainer.appendChild(div)
    }

    content.appendChild(textContainer)
    content.appendChild(menuContainer)

}