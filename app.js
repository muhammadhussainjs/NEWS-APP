




const submit = document.querySelector('#submit');
const input = document.querySelector('#input');
const maindiv = document.querySelector('#maindiv');
let Array;
submit.addEventListener('submit', async (event) => {
  event.preventDefault();
  console.log(input.value);
  try {
    let res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=2a2075f83b3b4dfbacce2538073d0565');
    console.log(res.data);
    Array = res.data.articles.slice(0 , 11)
    Array.map((item) =>{
    maindiv.innerHTML += `<div class="imagediv">
    <P>${item.title.slice(0 , 40)}...</P>

    <div><img src="${item.urlToImage ? item.urlToImage : './asset/image1.jpg' }" alt="image" width="200px" height="200px"></div>
    
    <P>${item.description.slice(0 , 80)}...</P>
    </div>`
   })
  } catch (error) {
    console.log('Error:', error);
  }
});
