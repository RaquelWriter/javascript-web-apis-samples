const container = document.querySelector('.container');
const title = document.querySelector('.title');
const btn = document.querySelector('#btn');

//Making http request

// 1. Get the endpoint of the server/api
const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
  .then((res) => {
    res.json().then((data) => {
      console.log(data);
      formatDataIntoDOM(data);
    });
  })
  .catch((err) => {
    console.log('ERROR: ', err);
  });

const formatDataIntoDOM = (data) => {
  let allData;
  const card = data.map((post) => {
    return `
      <div class='card'>
        <div class='card-title'>
          <h2>${post.title}</h2>
        </div>
        <div class='card-body'>
          <p>${post.body}</p>
        </div>
      </div>
    `;
  });
  allData = card.join('');
  container.innerHTML = allData;
};
