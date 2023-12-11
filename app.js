

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("searchbtn");


btn.addEventListener("click", () => {
    let inputword = document.getElementById("inputword").value;
    fetch(`${url}${inputword}`)
        .then((response) => response.json())
        .then((data) => {
          
            result.innerHTML = `
         <div class="word">
         <h3>${inputword}</h3>
         <button onclick="playSound()">
             <i class="fa-solid fa-volume-high"></i>
         </button>
         
     </div>
     <div class="details">
         <p>${data[0].meanings[0].partOfSpeech}</p>
         <p>/${data[0].phonetic}/</p>
        
     </div>
     <p class="wordmeaning">${data[0].meanings[0].definitions[0].definition}</p>
     <p class="wordexample">${data[0].meanings[0].definitions[0].example || ""}</p>`;
     sound.setAttribute("src",`http:${data[0].phonetics[0].audio}`);
     
        })
        .catch(() =>{
            result.innerHTML=`<h3 class="error"> Couldn't find the word</h3>`
        })

});

function playSound(){
  sound.play();
};
