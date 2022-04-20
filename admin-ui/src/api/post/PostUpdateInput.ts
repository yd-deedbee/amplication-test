import { UserUpdateManyWithoutPostsInput } from "./UserUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  content?: string | null;
  likes?: number | null;
  user?: UserUpdateManyWithoutPostsInput;
};
