'use strict';

// window.onload = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET','http://localhost:3000/posts')
//     xhr.send();
//     xhr.onload = (response) => {
//         if (response.target.status == 200) {
//             const mainContainer = document.querySelector('.mainContainer');
//             let posts = JSON.parse(response.target.response);
//             console.log(posts);
            
//             posts.forEach(post => {
//                 let pTag = document.createElement('h2');
//                 let urlTag = document.createElement('p')
//                 pTag.innerText = post.title;
//                 urlTag.innerText = post.URL;
//                 mainContainer.appendChild(pTag);
//                 mainContainer.appendChild(urlTag);
//             })
//         }
//     }
// }

function getPost(method, url) {
    return new Promise(() => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.send();
        xhr.onload = (response) => {
            if (response.target.status == 200) {
                const mainContainer = document.querySelector('.mainContainer');
                const posts = JSON.parse(response.target.response);
                
                posts.forEach(post => {
                    const container = document.createElement('div');
                        container.setAttribute('class', 'postContainer');
                    const pTag = document.createElement('p');
                        pTag.setAttribute('class', 'postTitle');
                    const urlTag = document.createElement('p')
                        urlTag.setAttribute('class', 'postUrl')
                        
                    pTag.innerText = `Title: ${post.title}`;
                    urlTag.innerText = `url: ${post.URL}`;
                    
                    container.appendChild(pTag);
                    container.appendChild(urlTag);
                    mainContainer.appendChild(container);
                })
            }
        }
    })
}

getPost('GET', 'http://localhost:8080/posts');