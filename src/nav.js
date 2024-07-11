import './nav.css'
import createMenu from './menu'
import createPage from './load'


export default function createNav(){
    const header = document.getElementById('header')
    const homeBtn = document.getElementById('home_btn')
    const menuBtn = document.getElementById('menu_btn')
    const aboutBtn = document.getElementById('about_btn')
    
    menuBtn.addEventListener('click', ()=>{
        createMenu()
    })

    homeBtn.addEventListener('click', ()=>{
        createPage()
    })

}