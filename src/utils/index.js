function generateCategoryPath (label) {
  return `/blog/category/${String(label).trim().toLowerCase().replace(' ', '-')}`;
}


module.exports = {
  generateCategoryPath,
}
