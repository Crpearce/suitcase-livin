const products = [
  {
    name: 'White Logo Beanie',
    image: '/images/beanie.webp',
    description:
      'Comfortable Beanie with a Suitcase Livin script. This beanie will keep your head and ears warm an any climate that comes your way on the road you are on in your life!',
    category: 'hats',
    price: 30.0,
    countInStock: [
      { size: 'One Size', quantity: 6 },

    ],
    rating: 4.5,
    numReviews: 2,
  },
  {
    name: 'Big Foot Rope Hat',
    image: '/images/hat.webp',
    description: `Protect that messy travel hair with a Suitcase Livin' Adjustable Snapback Big Foot Patch Rope Hat`,
    category: 'hats',
    price: 30,
    countInStock: [

      { size: 'One Size', quantity: 6 },

    ],
    rating: 4.0,
    numReviews: 1,
  },
  {
    name: `Black Camo Chilly Livin Hoodie`,
    image: '/images/camo.webp',
    description:
      'Chilly Livin Hoodie is a heavy hoodie that keeps you warm in any weather. Makes Livin all warm and fuzzy and is perfect for your suitcase.',
    category: 'hoodies',
    price: 60,
    countInStock: [
      { size: 'S', quantity: 0 },
      { size: 'M', quantity: 0 },
      { size: 'L', quantity: 6 },
      { size: 'XL', quantity: 0 },
      { size: 'XXL', quantity: 8 },
    ],
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Blackout Crazy Dreamer T-Shirt',
    image: '/images/tshirtBlack.webp',
    description: `Dreams are much like Big Foot. People who believe in Big Foot are labeled as crazy but your belief has to be stronger than the noise in the pursuit of the unimaginable.`,
    category: 'tshirts',
    price: 30.0,
    countInStock: [
      { size: 'S', quantity: 2 },
      { size: 'M', quantity: 4 },
      { size: 'L', quantity: 5 },
      { size: 'XL', quantity: 2 },
      { size: 'XXL', quantity: 8 },
    ],
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'Sage Story T-Shirt',
    image: '/images/tshirtSage.webp',
    description: `The Script T-Shirt represents writing your own story. Being able to acknowledge the road you've been through and the upcoming experiences. Being able to pack your suitcase full of the memories, accomplishments, sacrifices, obstacles, and friends you've made over the course of your journey. `,
    category: 'tshirts',
    price: 30,
    countInStock: [
      { size: 'S', quantity: 2 },
      { size: 'M', quantity: 4 },
      { size: 'L', quantity: 6 },
      { size: 'XL', quantity: 0 },
      { size: 'XXL', quantity: 8 },
    ],
    rating: 5,
    numReviews: 10,
  },
]

export default products
