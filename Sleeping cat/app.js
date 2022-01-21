var legPaw = document.querySelector('.leg__soks')

function mouselog(event) {
    let d = event.type
    if(d == 'mouseenter'){
        
        legPaw.animate([
            
            {transform: 'rotate(0deg)'},
            {transform: 'rotate(45deg)'}
          ], 700)
    }
    
    if(d == 'mouseleave') {
       
        legPaw.animate([

            {transform: 'rotate(25deg)'},
            {transform: 'rotate(0deg)'}
            ], 700)
        console.log('end')
        
    }
    console.log(d)
  }