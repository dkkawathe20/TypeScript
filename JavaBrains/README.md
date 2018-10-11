Tutorial link click [here](https://www.youtube.com/watch?v=90b9MgQvwUY&index=23&list=PLqq-6Pq4lTTanfgsbnFzfWUhhAz3tIezU)

##To Create `tsconfig.json` excute below cmd
`tsc --init`

##Compile TypeScript File 
`tsc test.ts`

##Excute TypeScript File On Node
`node test.ts`

##Compile &Excute TypeScript File On Node
`tsc test.ts node test.ts`

##Javascript File With Different Name
`tsc test.ts --out output-test.js`

##Watch ts file(after saving compiled automatically and update respective .js file)
`tsc test.ts --out output-test.js --watch`

##Enable all strict type-checking options in tsconfig
 `"strict": true` 

##Redirect output structure to the directory(redirect all javascript files to out folder)
 `"outDir": "./out"`

##Do not emit outputs(do not generate js file after compile)
  `"noEmit": true`/*not generate TS file*/
  `"noEmitOnError": true` /*Not generate js file if error in ts*/

##Create package.json
 `npm init`

##Compile & Execute All files in application or directory:
Set below code in script section of package section
`"start":"tsc && node out/index.js"` And 
`npm start` will execute above command

##install npm package lodash as below
`npm install lodash --save`
Above command will install lodash package under node_module folder
As lodash not supports intelligence we will need `npm install lodash-type-defination`
But we install types under lodash as `npm install @types/lodash --save-dev` its dev dependancy


