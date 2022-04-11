console.log('main.js loaded');

const menuDiv = document.querySelector('.menu');
const filterBtns = document.querySelectorAll('.filter-btn');
const menuImg = document.querySelector('.menu-img');
const menuContent = document.querySelector('.menu-content');
const menuHeader = document.querySelector('.menu-header');
const menuTitle = document.querySelector('.menu-title');        
const menuItemPrice = document.querySelector('.menu-item-price');
const menuText = document.querySelector('.menu-text');

// document.addEventListener('DOMContentLoaded', createMenuItems())

const menu = 
[
  {
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 15.99,
    img: "img/item-1.jpeg",
    description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    alt: "image 1",
  },
  {
    title: "Diner Double",
    category: "lunch",
    price: 13.99,
    img: "img/item-2.jpeg",
    description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    alt: "image 2",
  },
  {
    title: "Godzilla Milkshake",
    category: "shakes",
    price: 6.99,
    img: "img/item-3.jpeg",
    description: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    alt: "image 3",
  },
  {
    title: "Country Delight",
    category: "breakfast",
    price: 20.99,
    img: "img/item-4.jpeg",
    description: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    alt: "image 4",
  },
  {
    title: "Egg Attack",
    category: "lunch",
    price: 22.99,
    img: "img/item-5.jpeg",
    description: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    alt: "image 5",
  },
  {
    title: "Oreo Dream",
    category: "shakes",
    price: 18.99,
    img: "img/item-6.jpeg",
    description: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    alt: "image 6",
  },
  {
    title: "Bacon Overflow",
    category: "breakfast",
    price: 8.99,
    img: "img/item-7.jpeg",
    description: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    alt: "image 7",
  },
  {
    title: "American Classic",
    category: "lunch",
    price: 12.99,
    img: "img/item-8.jpeg",
    description: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    alt: "image 8",
  },
  {
    title: "Quarantine Buddy",
    category: "shakes",
    price: 16.99,
    img: "img/item-9.jpeg",
    description: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    alt: "image 9",
  },
  {
    title: "Steak Dinner",
    category: "dinner",
    price: 39.99,
    img: "img/item-10.jpeg",
    description: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    alt: "image 10",
  },
]

for (let i = 0; i < menu.length; i++) {
  // get each menuItem
  const menuItem = menu[i];
  // make menu-item div and class
  const menuItemEl = document.createElement('div');
  menuItemEl.classList.add('menu-item', menuItem.category);
  // make img div and give it a class
  const imgDivEl = document.createElement('div');
  imgDivEl.classList.add('menu-img-div');
  // make img element and give class and src
  const imgEl = document.createElement('img');
  imgEl.classList.add('menu-img');
  imgEl.src = menuItem.img;
  imgEl.alt = menuItem.alt;
  // make menu-content
  const menuContentEl = document.createElement('div');
  menuContentEl.classList.add('menu-content');
  // make menu-header
  const menuHeaderEl = document.createElement('div');
  menuHeaderEl.classList.add('menu-header');
  // make menu-title
  const menuTitleEl = document.createElement('h1');
  menuTitleEl.classList.add('menu-title');
  menuTitleEl.textContent = menuItem.title;
  // make menu-price
  const menuPriceEl = document.createElement('h1');
  menuPriceEl.classList.add('menu-price');
  menuPriceEl.textContent = menuItem.price;
  // make menu-text
  const menuTextEl = document.createElement('p');
  menuTextEl.classList.add('menu-text');
  menuTextEl.textContent = menuItem.description;
  // Append Children
  menuDiv.appendChild(menuItemEl);
  menuItemEl.appendChild(imgDivEl);
  imgDivEl.appendChild(imgEl);
  menuItemEl.appendChild(menuContentEl);
  menuContentEl.appendChild(menuHeaderEl);
  menuContentEl.appendChild(menuTextEl);
  menuHeaderEl.appendChild(menuTitleEl)
  menuHeaderEl.appendChild(menuPriceEl)
}

for (let i = 0; i < filterBtns.length; i++) {
  const myFilterBtn = filterBtns[i];
  myFilterBtn.addEventListener('click', filterButton)
}


function filterButton(e) {
  // Get class of target which you clicked on
  const target = e.target.classList[1];
  const breakfastItem = document.querySelector('breakfast');
  console.log(breakfastItem);
  // Check if you have right class
  switch (target) {
    case 'all':
      // Give class active
      filterBtns[0].classList.add('active')
      filterBtns[1].classList.remove('active')
      filterBtns[2].classList.remove('active')
      filterBtns[3].classList.remove('active')
      filterBtns[4].classList.remove('active')
      // Set display none
      for (let i = 0; i < menuDiv.children.length; i++) {
        const myChildren = menuDiv.children[i];
        myChildren.style.display = 'auto';
      }
      break;
      case 'breakfast':
        // Give class active
        filterBtns[0].classList.remove('active')
        filterBtns[1].classList.add('active')
        filterBtns[2].classList.remove('active')
        filterBtns[3].classList.remove('active')
        filterBtns[4].classList.remove('active')
        // Set display none
        for (let i = 0; i < menuDiv.children.length; i++) {
          const myChildren = menuDiv.children[i];
          myChildren.style.display = 'auto';
        }
        break;
        case 'lunch':
          // Give class active
          filterBtns[0].classList.remove('active')
          filterBtns[1].classList.remove('active')
          filterBtns[2].classList.add('active')
          filterBtns[3].classList.remove('active')
          filterBtns[4].classList.remove('active')
          // Set display none
          for (let i = 0; i < menuDiv.children.length; i++) {
            const myChildren = menuDiv.children[i];
            myChildren.style.display = 'auto';
          }
          break;
          case 'shakes':
            // Give class active
            filterBtns[0].classList.remove('active')
            filterBtns[1].classList.remove('active')
            filterBtns[2].classList.remove('active')
            filterBtns[3].classList.add('active')
            filterBtns[4].classList.remove('active')
            // Set display none
            for (let i = 0; i < menuDiv.children.length; i++) {
              const myChildren = menuDiv.children[i];
              myChildren.style.display = 'auto';
            }
            break;
            case 'dinner':
              // Give class active
              filterBtns[0].classList.remove('active')
              filterBtns[1].classList.remove('active')
              filterBtns[2].classList.remove('active')
              filterBtns[3].classList.remove('active')
              filterBtns[4].classList.add('active')
              // Set display none
              for (let i = 0; i < menuDiv.children.length; i++) {
                const myChildren = menuDiv.children[i];
                myChildren.style.display = 'auto';
              }
              break;
  }
}
