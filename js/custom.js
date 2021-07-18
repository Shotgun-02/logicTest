/*--------------------------------------------------------------
  # script
  --------------------------------------------------------------*/
(function(){
  main();
})();

function main(){
  let $input = document.querySelectorAll('.custom-control-input');
  $input.forEach(element => {
    element.addEventListener('click', function () {
      let current = this.closest(".slide");
      let next = current.nextElementSibling;
      if(next){
        current.classList.remove('show');
        next.classList.add('show');
        manMove();
      }

      if(next.classList.contains('resultSlide')){
        document.querySelector('.roadScean').style.display = "none";
      }

      console.log(this.value)
    })
  });


  let $preBtn = document.querySelector('.pre-btn');
  $preBtn.addEventListener('click',function(){
    let currentSlide = document.querySelector('.show');
    let preSlide = currentSlide.previousElementSibling;
    if(preSlide){
      currentSlide.classList.remove('show');
      preSlide.classList.add('show');
      manMove();
    }

    if(currentSlide.classList.contains('resultSlide')){
      document.querySelector('.roadScean').style.display = "block";
    }
  })


  function manMove(){
    const walkingMan = document.querySelector('.walking-man');
    const slideArr=[...document.querySelectorAll(".slide")];
    const slideArrLength = slideArr.length - 1;
    let stepToMove = 100 / slideArrLength;
        slideArr.map((el,ind)=>{
          if(el.classList.contains('show')){
            walkingMan.style.left = stepToMove * ind  + "%";
          }
        });
  }
}