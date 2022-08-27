function gugu(level, depth = 1) {
  if (depth > 9) {
    return;  // 중단
  } else {
    console.log(level + " x " + depth + " = " + (level * depth));  // 화면에 띄우기만. 
    // 값을 굳이 return할 필요없으므로 return 안씀.
    gugu(level, depth + 1);
  }
}

gugu(5);