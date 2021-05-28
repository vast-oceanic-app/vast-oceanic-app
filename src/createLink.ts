import { Item } from "./item";

export const createLink = (item: Item) => window.location.origin + process.env.PUBLIC_URL + '#/itemShare/' + encodeURIComponent(JSON.stringify(item))