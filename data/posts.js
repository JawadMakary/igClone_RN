import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://img.xcitefun.net/users/2013/11/345649,xcitefun-snake-river-6.jpg",
    user: USERS[0].user,
    likes: 100,
    caption: "lorem ipsum",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "test",
        comment: "test123",
      },
    ],
  },
  {
    imageUrl:
      "https://img.xcitefun.net/users/2013/11/345649,xcitefun-snake-river-6.jpg",
    user: USERS[2].user,
    likes: 300,
    caption: "loremdssdsd ipsum",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "testfdfdf",
        comment: "test123",
      },
      {
        user: "test",
        comment: "test123",
      },
    ],
  },
];
