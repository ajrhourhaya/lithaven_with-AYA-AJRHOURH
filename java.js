function showPage(id) {
 pages = document.querySelectorAll(".page");
  for (i = 0; i < pages.length; i++) {
    pages[i].style.display = pages[i].id === id ? "block" : "none";
  }
  
  document.getElementById(id).scrollIntoView({behavior:"smooth", block:"start"});
}

function showContent(id) {
   content = document.getElementById(id);
  if(content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
    content.scrollIntoView({behavior:"smooth", block:"center"});
  }
}
 sectionCards = document.querySelectorAll(".section-card");
for( i=0; i < sectionCards.length; i++){
  sectionCards[i].addEventListener("click", function(){
 target = this.dataset.target;
    showPage(target);
  });
}
tags = document.querySelectorAll(".tags span");
for(i=0; i < tags.length; i++){
  tags[i].addEventListener("click", function(e){
    e.stopPropagation(); 
    target = this.dataset.target;
    showContent(target);
  });
}


cards = document.querySelectorAll(".card");
for( i=0; i < cards.length; i++){
  cards[i].addEventListener("click", function(){
     cardId = this.id; 
     allContents = document.querySelectorAll(".genre-content");
    for(let j=0; j < allContents.length; j++){
      allContents[j].style.display = "none";
    }
     mainContent = document.getElementById(cardId);
    if(mainContent) mainContent.style.display = "block";
  });
}