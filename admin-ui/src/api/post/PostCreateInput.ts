import { UserCreateNestedManyWithoutPostsInput } from "./UserCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  content?: string | null;
  likes?: number | null;
  user?: UserCreateNestedManyWithoutPostsInput;
};
