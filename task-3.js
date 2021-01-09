const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const addGalleriesImg = img => {
    const newItemRef = document.createElement('li');
    const newImgRef = document.createElement('img');
    newImgRef.setAttribute('src', img.url);
    newImgRef.setAttribute('alt', img.alt);
    newImgRef.classList.add('js-img')
    newItemRef.append(newImgRef);
    newItemRef.classList.add('js-list')
    return newItemRef;
};

const gallery = images.map(img => addGalleriesImg(img))

const galleryRef = document.querySelector('#gallery')
galleryRef.classList.add('js-gallery')

galleryRef.append(...gallery)

console.log(galleryRef)