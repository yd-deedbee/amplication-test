import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type PostWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  likes?: IntNullableFilter;
  user?: UserListRelationFilter;
};
