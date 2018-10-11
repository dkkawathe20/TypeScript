
##GITHUB-REPORT 
It is demo application of typescript

#Steps to Create APP
1) Create 'Github-Report' folder
2) `npm init` will create package.json
3) `tsc --init` will create tsconfig.json
4) Create 'src' directory cor ts files
5) Create 'out' directory cor js output script files
6) Edit tsconfig.json as below
 `"outDir": "./out", /* Redirect output structure to the directory. */
 "rootDir": "./src", /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */`
7)Edit package.json as below
    `"scripts": {
     "start": "tsc && node out/index.js",
     "test": "echo \"Error: no test specified\" && exit 1"
     },`
8) Create 'index.ts' under src
9) edit index with `console.log("Hello")` and execute as `npm start`
10)install & save request and lodash node packages
`npm install request lodash --save` install & save request and
11) Install types for request and lodash as below(for intelligence support)
    `npm install @types/lodash @types/request --save-dev`

    