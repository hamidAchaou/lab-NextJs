// File: src/helpers/slugify.js
export function getSlug(item) {
    return item.replace(/ /g, "_").replace(/\./g, "").toLowerCase();
}
