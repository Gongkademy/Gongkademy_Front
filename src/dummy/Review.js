import { faker } from "@faker-js/faker/locale/ko";

export const review = [
  {
    commentId: faker.number.int(),
    articleId: faker.number.int(),
    memberId: faker.number.int(),
    rating: faker.number.int(1, 5),
    nickname: faker.string.sample(),
    content: faker.string.sample(),
    likeCount: faker.number.int(),
    // 대댓글 시 부모 댓글 ID
    children: [
      {
        commentId: faker.number.int(),
        articleId: faker.number.int(),
        memberId: faker.number.int(),
        rating: faker.number.int(1, 5),
        nickname: faker.string.sample(),
        content: faker.string.sample(),
        likeCount: faker.number.int(),
        parentId: faker.number.int(), // 대댓글 시 부모 댓글 ID
      },
      {
        commentId: faker.number.int(),
        articleId: faker.number.int(),
        memberId: faker.number.int(),
        rating: faker.number.int(1, 5),
        nickname: faker.string.sample(),
        content: faker.string.sample(),
        likeCount: faker.number.int(),
        parentId: faker.number.int(), // 대댓글 시 부모 댓글 ID
      },
    ],
  },
];
