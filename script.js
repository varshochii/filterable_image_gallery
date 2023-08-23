


// Get elements from DOM 
const btns = document.querySelectorAll('.buttons button');
const imgs = document.querySelectorAll('.images img');

// Add a click event to all buttons 
for(let i = 1; i < btns.length; i++){
     btns[i].addEventListener('click', filterImg);
}

// set active button on click 
function setActiveBtn(e){
   
       //Remove active class from all buttons 
       btns.forEach(btn => {
           btn.classList.remove('btn-clicked');
       });

       // Add active class to clicked button  
} 


function filterImg(e){

    // run the active button function
    setActiveBtn(e);

    //// loop through all images 
    imgs.forEach(img => {
        img.classList.remove('img-shrink');
        img.classList.add('img-expand');

        /// Get data from data attribute
        // get images type data 
        const imgType = parseInt(img.dataset.img);

        // get button type data 
        const btnType = parseInt(e.target.dataset.btn);

        // if the image type and type of the clicked button are not the same 
        if(imgType !== btnType){
               // Hide the image 
               img.classList.remove('img-expand');
               img.classList.add('img-shrink');
        }

    });
}


//// set click event for the all button 
btns[0].addEventListener('click', (e) => {
     
     //// run the active button function 
     setActiveBtn(e);

     imgs.forEach(img => {
         img.classList.remove('img-shrink');
        img.classList.add('img-expand');
     })
})