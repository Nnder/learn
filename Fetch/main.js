// const url = 'https://jsonplaceholder.typicode.com/posts';

// // async function getResponse(){
// //     let response = await fetch(url)
// //     let content = await response.json();
// //     content = content.splice(0,10);

// //     for(let el of content){

// //         let html = `<li class="post">
// //                     <h4>${el.title}</h4>
// //                     <img src="${el.url}" alt="photo">
// //                 </li>`

// //         document.querySelector('.posts').insertAdjacentHTML('afterbegin', html)
// //     }
// // }

// // //getResponse()




// // // const settings = {
// // //     method: 'Post',
// // //     mode: 'cors',
// // //     body: 'dwa222',
// // // }

// // // fetch(url, settings)
// // // .then(response=> console.log(response.  text())).then(data=>console.log(data))

// // let response = fetch(url , {
// //     method: 'POST',
// //     headers: {
// //         'Content-type': "application/json",
// //     },
// //     body: JSON.stringify({
// //         name: 'User 1'
// //     })
// // });
// // response.then(data=> data.json()).then(data=>console.log(data)); 


// document.querySelector('input').addEventListener('click', async (e)=>{
//     let response = await (await fetch('https://dog.ceo/api/breeds/image/random')).json(); 
//     //let img = await response.json();
//     document.querySelector('img').src = response.message; 
//     //console.log(img);
//     //let img = 
// })



// const postsList = document.querySelector('.posts__list');
// const getPostsBtn = document.querySelector('.posts__get-posts');

// const postTitle = document.querySelector('.new-post__title');
// const postBody = document.querySelector('.new-post__body');
// const addNewPost = document.querySelector('.new-post__add');

// const state = {
//     posts: [],
//     newPost: {
//         title: '',
//         body: '',
//     },
//     editPost:{}
// }

// const cleanData = ()=>{
//     state.newPost.title = '';
//     state.newPost.body = '';

//     postTitle.value = '';
//     postBody.value = '';
// }

// const editPost = (index)=>{
//     const editeblePost = state.posts[index];
//     state.editPost = editeblePost;

//     postTitle.value = state.editPost.title;
//     postBody.value = state.editPost.body;
// }

// const deletePost = (index)=>{
//     const editeblePost = state.posts[index];
//     removePostRequest(editeblePost.id);

//     state.posts.splice(index,1);

//     fillPostsList(state.posts);
// }

// const createPost = (post, index) => `
//     <div class="post">
//         <div class=""post__wrapper>
//             <h1 class="wrapper__title">${post.title}</h1>
//             <div class="wrapper__body">${post.body}</div>
//         </div>
//         <div class="post__buttons">
//             <button class="buttons__edit" onclick="editPost(${index})">Edit</button>
//             <button class="buttons__delete" onclick="deletePost(${index})">Delete</button>
//         </div>
//     </div>
// `



// const fillPostsList = (posts) => {
//     postsList.innerHTML = "";

//     if(posts.length){
//         posts.forEach((post, index) => postsList.innerHTML += createPost(post, index));
//     }
// }

// postTitle.addEventListener('change', (e)=> {
//     if(!!state.editPost){
//         return state.editPost.title = e.target.value;
//     }
//     return state.newPost.title = e.target.value;
// })
// postBody.addEventListener('change', (e)=> {
//     if(!!state.editPost){
//         return state.editPost.body = e.target.value;
//     }
//     return state.newPost.body = e.target.value;
// })

// addNewPost.addEventListener('click', async ()=>{
//     if(!!state.editPost.title || !!state.editPost.body){
//         await updatePostRequest();
//     } else {
//         await createPostRequest();
//     }
    
//     cleanData();
//     fillPostsList(state.posts);
// })

// getPostsBtn.addEventListener('click', async ()=>{
//     await getPostsRequest();
//     fillPostsList(state.posts);
// });

// function getPostsRequest(){
//     return fetch(url+'?_limit=10', {
//         method: "GET",
//         headers: {
//             'Content-type': 'application/json',
//         },
//     }).then( res => res.json())
//     .then(posts=> state.posts = state.posts.concat(posts));
// };

// function createPostRequest(){
//     return fetch(url, {
//         method: "POST",
//         body: JSON.stringify(state.newPost),
//         headers: {
//             'Content-type': 'application/json',
//         },
//     }).then(res => res.json())
//     .then(post=>state.posts.push(post))
// }


// function updatePostRequest(){
//     return fetch(url+`/${state.editPost.id}`, {
//         method: "PUT",
//         body: JSON.stringify(state.editPost),
//         headers: {
//             'Content-type': 'application/json',
//         },
//     }).then(res => res.json())
//     .then(data=>data)
// }

// function removePostRequest(id){
//     return fetch(url+`/${id}`, {
//         method: "DELETE",
//     })
// }




const requestUrl = 'https://jsonplaceholder.typicode.com/users';



function sendRequest(method, url, body = null){
    return new Promise((res, rej)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = ()=>{
            if(xhr.status >= 400){
                rej(xhr.response);
            } else {
                res(xhr.response);
            } 
        }

        xhr.onerror = ()=>{
            console.log(xhr.response)
        }
        xhr.send(JSON.stringify(body));
    })
}

// sendRequest('GET', requestUrl).then(data=>console.log(data)).catch(e=>console.error(e));

const body = {
    name: 'ddd',
}

// sendRequest('GET', requestUrl, body).then(data=>console.log(data)).catch(e=>console.error(e));

function sendRequest(url, obj){
    return fetch(url, obj).then((res)=>res.json());
}

sendRequest(requestUrl,{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})