// for
for (let i = 0; i < 5; i++) {
  console.log(`iterasi ke ${i}`);
}

// do..while
let l = 0;

do {
  console.log(`iterasi ke ${l}`);
  l += 1;
} while (l < 5);

// while
let ii = 0;

while (ii < 5) {
  console.log(`iterasi ke ${ii}`);
  ii++;
}

// break
for (let j = 0; j < 5; j++) {
  if (j == 3) {
    break;
  }
  console.log(`iterasi ke ${j}`);
}

// continue
for (let h = 0; h < 5; h++) {
  if (h == 3) {
    continue;
  }
  console.log(`iterasi ke ${h}`);
}
