/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/



/**
 * Define Global Variables
 * 
*/
const sections = Array.from(document.querySelectorAll('section'));
const navList = document.getElementById('navbar__list');





// build the nav
function createNav(){
    for(sec of sections){
        //create list tags in each section
        list = document.createElement('li');

        //fill ul with list
        list.innerHTML = `<a class="menu__link">${sec.getAttribute('data-nav')}</a>`;

        navList.insertAdjacentElement('beforeend',list)
        secid =sec.id;
        console.log(secid);

       
        list.addEventListener('click', function(){
            sec.scrollIntoView({behavior: "smooth"});

        })



    }
}
createNav();






// Add class 'active' to section when near top of viewport
function activeViewPort(){
    //loop through all sections

    sections.forEach(function(sec){
        //get distance from top (in px)
        const distanceUp = sec.getBoundingClientRect().top;

        //define corrosponding id to the section in order to retrive nav
        secid= sec.id.slice(7,8) -1 ;
        
        

        //add active class if the top distace is between 0px and 100px, otherwise it will be removed
        if(distanceUp>=0 && distanceUp<300 ){
            sec.classList.add('your-active-class');
            navList.childNodes[secid].style.backgroundColor="grey";
           
        }
        else{sec.classList.remove('your-active-class')
        navList.childNodes[secid].style.backgroundColor="unset";
        }
        

    })
    
}






// calling function when scroll through the document body
document.body.setAttribute('onscroll','activeViewPort()');


