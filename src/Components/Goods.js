import React from "react";
// import { useDispatch } from "react-redux";
import { Good } from "./Good";

export const Goods = () => {
  const goodData = [
    {
      id: 1,
      title: "Birthday cake",
      category: "birthday cake",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.",
      price: 1000,
      img: "./img/1.jpg",
    },
    {
      id: 2,
      title: "Birthday cake",
      category: "birthday cake",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.",
      price: 1000,
      img: "./img/2.jpg",
    },
    {
      id: 3,
      title: "Cupcakes",
      category: "cupcakes",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.",
      price: 1000,
      img: "./img/3.jpg",
    },
    {
      id: 4,
      title: "Birthday cake",
      category: "birthday cake",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.",
      price: 1000,
      img: "./img/4.jpg",
    },
    {
      id: 5,
      title: "Birthday cake",
      category: "birthday cake",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.",
      price: 1000,
      img: "./img/5.jpg",
    },
    {
      id: 6,
      title: "Wedding cake",
      category: "wedding cake",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.",
      price: 1000,
      img: "./img/6.jpg",
    },
    {
      id: 7,
      title: "Birthday cake",
      category: "birthday cake",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.",
      price: 1000,
      img: "./img/7.jpg",
    },
    {
      id: 8,
      title: "Wedding cake",
      category: "wedding cake",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.",
      price: 1000,
      img: "./img/8.jpg",
    },
    {
      id: 9,
      title: "Cupcakes",
      category: "cupcakes",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.",
      price: 1000,
      img: "./img/9.jpg",
    },
    {
      id: 10,
      title: "Wedding cake",
      category: "Cake",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.",
      price: 1000,
      img: "./img/10.jpg",
    },
    {
      id: 11,
      title: "Cupcakes",
      category: "cupcakes",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.",
      price: 1000,
      img: "./img/11.jpg",
    },
    {
      id: 12,
      title: "Cheesecake",
      category: "cheesecake",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.",
      price: 1000,
      img: "./img/12.jpg",
    },
    {
      id: 13,
      title: "Birthday cake",
      category: "birthday cake",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.",
      price: 1000,
      img: "./img/13.jpg",
    },
    {
      id: 14,
      title: "Birthday cake",
      category: "birthday cake",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.",
      price: 1000,
      img: "./img/14.jpg",
    },
    {
      id: 15,
      title: "Wedding cake",
      category: "wedding cake",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.",
      price: 1000,
      img: "./img/15.jpg",
    },
  ];
  // const dispatch = useDispatch();
  return (
    <main>
        {goodData.map((el) => (
          <Good good={el} />
        ))}
    </main>
  );
};
