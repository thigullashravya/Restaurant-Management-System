const searchicon1= document.querySelector('#searchicon1');
const srchicon1=document.querySelector('#srchicon1');
const search1=document.querySelector('#searchinput1');
searchicon1.addEventListener('click',function(){
    search1.style.display='flex';
    searchicon1.style.display='none';
})
const searchicon2= document.querySelector('#searchicon2');
const srchicon2=document.querySelector('#srchicon2');
const search2=document.querySelector('#searchinput2');
searchicon2.addEventListener('click',function(){
    search2.style.display='flex';
    searchicon2.style.display='none';
})
const bar=document.querySelector('.fa-bars');
const cross=document.querySelector('#xcross');
const headerbar=document.querySelector('.headerbar');

bar.addEventListener('click',function(){
    setTimeout(()=>{
        cross.style.display='block';
    },200);
    headerbar.style.right='0%';
})
cross.addEventListener('click',function(){
    cross.style.display='none';
    headerbar.style.right='-100%';
})
cross.addEventListener('click',function(){
    cross.style.display='none';
    headerbar.style.right='-100%';
})

const submit=document.querySelector('#submitjj');
submit.addEventListener('click',function(){
     submit.style.dispaly='none';
     headerbar.style.right='0%';
})
// Get the elements
const signupTrigger = document.getElementById('user-mb');
const signupOverlay = document.getElementById('signup-overlay');
const closeBtn = document.getElementById('close-btn');

// Show the form when the icon is clicked
signupTrigger.addEventListener('click', function() {
    signupOverlay.style.display = 'flex'; // Display the overlay with the form
});

// Close the form when the close button is clicked
closeBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    signupOverlay.style.display = 'none'; // Hide the overlay
});
