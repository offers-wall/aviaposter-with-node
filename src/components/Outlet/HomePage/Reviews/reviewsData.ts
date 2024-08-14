export interface Review {
  name: string;
  age: string;
  feedback: string;
  rating: number;
}

export interface Reviews {
  reviews: Review[];
}

export const reviews: Reviews = {
  reviews: [
    {
      name: 'Maya',
      age: '21 Y.O',
      feedback:
        "I'm extremely satisfied with my purchase! The watch is stylish, comfortable, and keeps perfect time. The ordering process was simple, and the delivery was fast. I'll definitely be back for more!",
      rating: 5,
    },
    {
      name: 'Loisa',
      age: '30 Y.O',
      feedback:
        "Very happy with my new watch! It's not only trendy but also very comfortable to wear and accurate. Ordering was easy, and shipping was quick. Will definitely shop here again!",
      rating: 4,
    },
    {
      name: 'Andrea',
      age: '24 Y.O',
      feedback:
        "Absolutely love my new watch! It's chic, comfortable, and keeps excellent time. The ordering process was straightforward, and the delivery was speedy. I'll definitely be a returning customer!",
      rating: 5,
    },
    {
      name: 'Denis',
      age: '28 Y.O',
      feedback:
        "Thrilled with my purchase! The watch is fashionable, comfortable, and perfect for everyday wear. The ordering was hassle-free, and the shipping was prompt. I'll definitely come back for more!",
      rating: 4,
    },
    {
      name: 'Jack',
      age: '19 Y.O',
      feedback:
        "I'm delighted with this watch! It's stylish, comfortable to wear, and keeps great time. The order process was seamless, and the delivery was fast. I'll surely return for future purchases!",
      rating: 5,
    },
    {
      name: 'Andry',
      age: '40 Y.O',
      feedback:
        'Highly satisfied with my new watch! It is trendy, fits well, and is very accurate. The ordering process was easy, and the delivery was quick. Will definitely come back for more!',
      rating: 5,
    },
  ],
};
