console.log("...App Started")

// async function callAPI(){
//     var res = await fetch("https://dummyjson.com/products");
//     var data = await res.json();
//     console.log(data);
// }

// callAPI()


function fetchAPI(){
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=c20074df4ecc43e7a44c1137df3c17bd")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data.articles[0]);
        renderUI(data);
    })
}

fetchAPI()

const root = document.getElementById("root");
function renderUI(data){
        console.log(data)
        const articles = data.articles;
        for(let i=0;i<articles.length;i++){

            const ar = articles[i];
            const div = document.createElement("div");
            div.setAttribute("class","newsCard")
            const h4 = document.createElement("h4");
            h4.innerText=ar.title;;
            div.appendChild(h4);
            const img = document.createElement("img");
            img.src=ar.urlToImage;
            img.alt.innerText="Image may not be present";
            img.style.width="180px";
            div.appendChild(img);

            const link = document.createElement("a");
            link.innerText="Read more.."
            link.href=ar.url;
            div.appendChild(link);

            
            root.appendChild(div);
    }
};

