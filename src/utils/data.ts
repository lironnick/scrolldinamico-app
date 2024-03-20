const PRODUCTS = [
  {
    title: 'Torneira',
    data: Array.from({ length: 3 }, (_, index) => String(index)),
  },
  {
    title: 'Pisos',
    data: Array.from({ length: 7 }, (_, index) => String(index)),
  },
  {
    title: 'Louças',
    data: Array.from({ length: 5 }, (_, index) => String(index)),
  },
  {
    title: 'Moveis',
    data: Array.from({ length: 10 }, (_, index) => String(index)),
  },
  {
    title: 'Banheiro',
    data: Array.from({ length: 8 }, (_, index) => String(index)),
  },
];

const CATEGORIES = PRODUCTS.map((item) => item.title);

export { PRODUCTS, CATEGORIES };
