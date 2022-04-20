import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  content?: string | null;
  likes?: number | null;
  user?: UserWhereUniqueInput | null;
};
