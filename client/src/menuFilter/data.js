const data = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    img: "/assets/g1.jpg",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Web design" },
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    img: "/assets/g2.png",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Branding" },
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    img: "/assets/g3.png",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Mockups" },
  },
];

export function getData() {
  return data;
}
