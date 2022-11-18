const URL = 'https://fakestoreapi.com/products'

const getData = async (url) => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    printData(data)
  } catch (error) {
    console.log(error);
  }
}

const printData = (data) => {

  const section = document.getElementById('section')

  data.forEach(item => {
    section.innerHTML += `
      <article class="card">
        <ul>
          <picture class="card__picture">
            <img src="${item.image}" alt="${item.title}" />
          </picture>
          <h4 class="card__title">${item.title}</h4>
          <p class="card__category">Category: ${item.category}</p>
          <span class="card__price">$${item.price}</span>
        </ul>
      </article>
    `
  })
}

getData(URL)