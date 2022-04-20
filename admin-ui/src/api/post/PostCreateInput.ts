import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  content?: string | null;
  likes?: number | null;
  user?: UserWhereUniqueInput | null;
};
