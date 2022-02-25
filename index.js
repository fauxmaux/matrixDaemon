"use strict";

//All the 8 possibilities to reverse && / || mirror && / || rotate a matrix:

function mx(mXo, n) {
  if (n.includes("e")) {
    return (mXo[0].map((col, c) => mXo.map((row, r) => mXo[r][c])));
  }
  if (n.includes("f")) {
    return (mXo[0].map((col, c) => mXo.map((row, r) => mXo[mXo.length - 1 - r][c])));
  }
  if (n.includes("h")) {
    return (mXo[0].map((col, c) => mXo.map((row, r) => mXo[r][mXo[0].length - 1 - c])));
  }
  if (n.includes("g")) {
    return (mXo[0].map((col, c) => mXo.map((row, r) => mXo[mXo.length - 1 - r][mXo[0].length - 1 - c])));
  }
  if (n.includes("a")) {
    return (mXo.map((row, r) => mXo[0].map((col, c) => mXo[r][c])));
  }
  if (n.includes("b")) {
    return (mXo.map((row, r) => mXo[0].map((col, c) => mXo[mXo.length - 1 - r][c])));
  }
  if (n.includes("d")) {
    return (mXo.map((row, r) => mXo[0].map((col, c) => mXo[r][mXo[0].length - 1 - c])));
  }
  if (n.includes("c")) {
    return (mXo.map((row, r) => mXo[0].map((col, c) => mXo[mXo.length - 1 - r][mXo[0].length - 1 - c])));
  }
}


module.exports  = mx