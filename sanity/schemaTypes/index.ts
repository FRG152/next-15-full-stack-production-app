import { author } from "./author";
import { playlist } from "./playist";
import { startup } from "./startup";
import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup, playlist],
};
