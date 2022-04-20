import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  likes?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
