import { Item } from "./item";

export const createLink = (item: Item) => window.location.origin + '/itemShare/' + encodeURIComponent(JSON.stringify(item))