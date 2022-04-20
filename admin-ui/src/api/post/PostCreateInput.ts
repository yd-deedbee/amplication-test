import { LikeCreateNestedManyWithoutPostsInput } from "./LikeCreateNestedManyWithoutPostsInput";
import { UserCreateNestedManyWithoutPostsInput } from "./UserCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  content?: string | null;
  likes?: LikeCreateNestedManyWithoutPostsInput;
  user?: UserCreateNestedManyWithoutPostsInput;
};
