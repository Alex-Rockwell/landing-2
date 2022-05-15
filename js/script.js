
////////////////////////////// Tabs //////////////////////////////////////

document.getElementById("defaultOpen").click();

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



////////////////////////////// Modal Windows //////////////////////////////////////

let buttons = document.querySelectorAll(".tarif");
let modals =  document.querySelectorAll('.modal')
let overlay =  document.querySelector('.overlay')
let closeButtons = document.querySelectorAll('.close-button')
let currentModal
let currentButton

buttons.forEach(el => {
  el.addEventListener('click', showModal)
})

function showModal(e) {
  let btnNum = e.currentTarget.getAttribute('data-model-btn')
  modals.forEach(el => {
    wNum = el.getAttribute('data-modal-window')
    if (btnNum == wNum) {
      el.classList.add('active')
      currentModal = el
      closeButtons[wNum - 1].addEventListener('click', hideModal) 
      overlay.addEventListener('click', hideModal)
    }
  })
  overlay.classList.add('active')
}

function hideModal() {
  currentModal.classList.remove('active')
  overlay.classList.remove('active')
}


/////////////////////////// Accordion ////////////////////////////////

const title = document.querySelector('.time__arrow')
const contentBlock = document.querySelector('.time__content')

title.addEventListener('click', function() {
  contentBlock.classList.toggle('time__content--active')
  title.classList.toggle('time__arrow--active')
})



/////////////////////////////////////////////////////////////////////////
// Accordion

// const titles = document.querySelectorAll('.guides-accordion__title')
// const contentBlocks = document.querySelectorAll('.guides-accordion__content')

// titles.forEach(title => {

//   title.addEventListener('click', function() {

//     const block = this.nextElementSibling
    
//     contentBlocks.forEach(el => {
//       if (el == block) {
//         block.classList.toggle('guides-accordion__content--active')
//         return
//       }

//       el.classList.remove('guides-accordion__content--active')
//     })
//   })
  
// })

//////////////////////////////////////////////////////////////////////////

// var tabNavs = document.querySelectorAll(".nav-tab");
// var tabPanes = document.querySelectorAll(".tab-pane");

// for (var i = 0; i < tabNavs.length; i++) {

//   tabNavs[i].addEventListener("click", function(e){
//     e.preventDefault();
//     var activeTabAttr = e.target.getAttribute("data-tab");

//     for (var j = 0; j < tabNavs.length; j++) {
//       var contentAttr = tabPanes[j].getAttribute("data-tab-content");

//       if (activeTabAttr === contentAttr) {
//         tabNavs[j].classList.add("active");
//         tabPanes[j].classList.add("active"); 
//       } else {
//         tabNavs[j].classList.remove("active");
//         tabPanes[j].classList.remove("active");
//       }
//     };
//   });
// }





















// titles.forEach(title => title.addEventListener('click', function() {

//   const item = this.nextElementSibling
  
//   contentBlocks.forEach(block => {
//     if (block === item) {
//       item.classList.toggle('guides-accordion__content--active')
//       return
//     }

//     item.classList.remove('guides-accordion__content--active')
    
//   })
  
// }

// ))

// function toggleAccordion() {


// }






// const titles = document.querySelectorAll('.guides-accordion__title')
// const siblings = document.querySelectorAll('.guides-accordion__content')

// titles.forEach(title => {

//   title.addEventListener('click', function() {
    
//     siblings.forEach(sibling => {
//         sibling.classList.remove('guides-accordion__content--active')
//     })
    
//     if (!this.nextElementSibling.classList.contains('guides-accordion__content--active')) {
//       this.nextElementSibling.classList.add('guides-accordion__content--active')
//     }
//     // if (this.nextElementSibling.classList.contains('guides-accordion__content--active')) {
//     //   this.nextElementSibling.classList.remove('guides-accordion__content--active')
//     // }

//   })

// })