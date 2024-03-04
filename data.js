
const  loadnews = async (post, isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?=${post}`);
    const data = await res.json();
    // console.log(data.data)
    const posts = data.data
    console.log(posts);
    displayCard(posts, isShowAll);
  }
  
  // loadnews{}
  
  const displayCard = (posts, isShowAll) =>{
  
    const cardConiter = document.getElementById("card-continer");
    // cardConiter.textContent = '';
  
  
  
      const ShowAllButon = document.getElementById("Show-all-container");
     if(posts> 3 && (!isShowAll)){
       ShowAllButon.classList.remove('hidden');
     }
     else{
      ShowAllButon.classList.add('hidden');
     }
  
    
    // only fairst 12 display phone
   
  
  posts.forEach(post =>{
    // console.log(category)
   // create a div
   const Card = document.createElement('div')
   Card.classList = `card p-3 bg-gray-300 shadow-xl`
   // step number -3 set inner html
   Card.innerHTML = `
   <div class="card-body">
     <img src="${post.title}">
     <h2 class="card-title">${post.view_count}</h2>
     <p>If a dog chews shoes whose shoes does he choose?</p>
     <div class="card-actions justify-center">
    <button  onclick="handelShowDetails('${post.id}')"class="btn btn-primary">Show Details</button>
   </div>
  `
  // step number -4 appendChild
  cardConiter.appendChild(Card);
  });
  
  toggelLodingSpiner(false); 
  }
  
  
  const handelShowDetails = async (id) =>{
  
  // console.log('click showdetles', id);
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${id}`);
  const data = await res.json();
  const posts = data.data
  ShowCardDetils(posts);
  
  }
  
  
  const ShowCardDetils = () =>{
  console.log(posts)
   const CardName = document.getElementById('show-detils-phone-name');
   CardName.innerText = posts.name;
  
   const ShowDetilesConiter = document.getElementById('show-detils-continer');
   ShowDetilesConiter.innerHTML = `
   <div class="justify-center flex items-center">
   <img src="${posts.image}">
   </div>  
    <p class="text-[22ppx] font-medium"><span class="text-2xl font-semibold">brand: </span>${posts.Comedy}</p>
    <p class="text-[18px]"><span class="text-3xl font-semibold">Storage: </span>${posts?.profile_image}</p>
    <p class="text-[18px]"><span class="text-3xl font-semibold">Storage: </span>${posts?.description}</p>
   
   
    `
    my_modal_5.showModal()
  
  }
  
  
  
  
  
  
  
  
  
  const handleSearch = (isShowAll) =>{
    toggelLodingSpiner(true)
    const inputFild = document.getElementById("search-filed");
    const post = inputFild;
    loadnews(post, isShowAll)
  }
  
  
  const toggelLodingSpiner = (isloding) =>{
  const lodingSpinner = document.getElementById("loading-spinner");
  if(isloding){
    lodingSpinner.classList.remove('hidden');
  }
  else{
    lodingSpinner.classList.add('hidden');
  }
  }
  
  
  const handleShowAll = () =>{
  handleSearch(true)
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  