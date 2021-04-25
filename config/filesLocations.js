/* eslint-disable func-names */

module.exports = [
  {
    from: "dev/**/*.jpg",
    to: "images/",
    flatten: true
  },
  {
    from: "dev/**/*.jpeg",
    to: "images/",
    flatten: true
  },
  {
    from: "dev/**/*.png",
    to: "images/",
    flatten: true
  },
  {
    from: "dev/**/*.webp",
    to: "images/",
    flatten: true
  },
  {
    from: "dev/**/*.svg",
    to: "images/",
    flatten: true
  },
  {
    from: "dev/**/*.mp4",
    to: "video/",
    flatten: true
  },
  {
    from: "dev/**/*.pdf",
    to: "documents",
    flatten: true
  },
  {
    from: "dev/**/*.docx",
    to: "documents",
    flatten: true
  },
  {
    from: "dev/app/libs/**/*.js",
    to: "js",
    flatten: true
  },
  {
    from: "dev/app/libs/**/*.json",
    to: "js",
    flatten: true
  }
];
