# matrixDaemon
to rotate and/or reflect matrices

1. npm install matrixdaemon

2. in the javascript file put on the first line: const mymx = require("mx");

3. initialize a variable with a kind matrice e.g:

```
let Mx4x2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
```

4. use the function:
for the 8 rotation/reflection possibilities:

mymx(<matrix_variable>, <type of rotation/reflection>)

exemples:
```console.log(mymx(Mx4x2, "a"));
console.log(mymx(Mx4x2, "b"));
console.log(mymx(Mx4x2, "c"));
console.log(mymx(Mx4x2, "d"));
console.log(mymx(Mx4x2, "e"));
console.log(mymx(Mx4x2, "f"));
console.log(mymx(Mx4x2, "g"));
console.log(mymx(Mx4x2, "h"));
```

Expected ouputs:
```[ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]
[ [ 5, 6, 7, 8 ], [ 1, 2, 3, 4 ] ]
[ [ 8, 7, 6, 5 ], [ 4, 3, 2, 1 ] ]
[ [ 4, 3, 2, 1 ], [ 8, 7, 6, 5 ] ]
[ [ 1, 5 ], [ 2, 6 ], [ 3, 7 ], [ 4, 8 ] ]
[ [ 5, 1 ], [ 6, 2 ], [ 7, 3 ], [ 8, 4 ] ]
[ [ 8, 4 ], [ 7, 3 ], [ 6, 2 ], [ 5, 1 ] ]
[ [ 4, 8 ], [ 3, 7 ], [ 2, 6 ], [ 1, 5 ] ]
```

5. enjoy

6. buy me a coffee
7. :rose: 
