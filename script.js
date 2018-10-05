document.querySelector('button').addEventListener('click', function () {
    
    let asideMenu = document.querySelector('aside');
    asideMenu.classList.toggle('width-hidden');
    
    let section = document.querySelector('section');
    section.classList.toggle('menu-open');
    section.classList.toggle('menu-close');
    
    
  });


document.querySelector("#gameStart").addEventListener("click",function(){
  let positif = document.createElement("IMG");
  let maxTop = 70;
  let maxLeft = 90;
  positif.src = "./good.png";
  positif.classList.add("game-image");
  positif.id="positif";
  
  let negatif = document.createElement("IMG");
  negatif.src = "./bad.png";
  negatif.classList.add("game-image");
  negatif.id="negatif";
  
  
  
  setInterval (function(){
    
    if (Math.floor((Math.random() * 10) + 1) < 9) {
      let newpositif = positif.cloneNode (true);
      newpositif.style.top = Math.floor ((Math.random() * maxTop) + 1) + "vh";
      newpositif.style.left = Math.floor ((Math.random() * maxLeft) + 1) + "vw";
      document.querySelector("body").appendChild(newpositif);
      
    } else {
      negatif.style.top = Math.floor ((Math.random() * maxTop) + 1) + "vh";
      negatif.style.left = Math.floor ((Math.random() * maxLeft) + 1) + "vw";
      document.querySelector("body").appendChild(negatif);
    }
  }, 1000);
  
  document.querySelector("body").addEventListener("click",function (clickedElement) {
    let click = clickedElement.target;
    if (click.id == "positif"){
      click.remove();
    }else if(click.id =="negatif") {
      document.querySelector('body').style.filter= blur('5px')
      
    }
    
  });
});
