
document.body.addEventListener('mousemove', function(e){
                
    let x=e.clientX;
      let y =e.clientY;
          document.getElementsByTagName('h1')[0].style.textShadow=` ${x-673}px ${y-283}px 0px greenyellow, ${y-283}px ${x-673}px magenta,  ${-x+673}px  ${-y+283}px blue,  ${-y+283}px ${-x+673}px cyan`
  console.log(e)
  })