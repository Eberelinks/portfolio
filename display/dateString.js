const dateString = () => {
  let now = new Date();
  let date = [ now.getDate(), now.getMonth() + 1, now.getFullYear() ];

  return date.join("/");
}
module.exports = dateString;