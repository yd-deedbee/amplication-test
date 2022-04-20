import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type PostWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  user?: UserListRelationFilter;
};
