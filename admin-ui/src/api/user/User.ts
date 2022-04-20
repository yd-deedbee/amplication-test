import { Like } from "../like/Like";
import { Post } from "../post/Post";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  likes?: Array<Like>;
  posts?: Array<Post>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
