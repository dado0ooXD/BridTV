const displayNews = (arr) =>{
  arr.forEach((el) => {
    const parent = document.querySelector("#wrapper");
    const child1 = document.createElement("div");
    child1.classList.add("cards")
    child1.innerHTML = `<div class="header"><p>${el.name}.</p></div> <iframe src = "${el.source.ld}"></iframe> `
    console.log(child1)
    parent.appendChild(child1)
  });

} 
fetch("https://services.brid.tv/services/get/latest/26456/0/1/25/0.json")
  .then((response) => response.json())
  .then((data) => {
    displayNews(data.Video)
  })
  .catch(error => console.log(error))





