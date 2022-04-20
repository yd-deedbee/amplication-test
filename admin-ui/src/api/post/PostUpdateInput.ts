import { LikeUpdateManyWithoutPostsInput } from "./LikeUpdateManyWithoutPostsInput";
import { UserUpdateManyWithoutPostsInput } from "./UserUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  content?: string | null;
  likes?: LikeUpdateManyWithoutPostsInput;
  user?: UserUpdateManyWithoutPostsInput;
};
