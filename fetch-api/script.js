const container = document.querySelector('.container');
const title = document.querySelector('.title');
const btn = document.querySelector('#btn');

//Making http request

// 1. Get the endpoint of the server/api
const url = 'https://jsonplaceholder.typicode.com/posts';

const fetchBlogs = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    formatDataIntoDOM(data);
  } catch {
    (error) => {
      console.log('ERROR: ', error);
    };
  }
};

fetchBlogs();

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
