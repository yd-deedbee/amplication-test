import { Like } from "../like/Like";
import { User } from "../user/User";

export type Post = {
  content: string | null;
  createdAt: Date;
  id: string;
  likes?: Array<Like>;
  updatedAt: Date;
  user?: Array<User>;
};
