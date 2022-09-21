import { print } from 'a'
// import { print } from './a.js'
import React from 'React'
import testJSON from './test.json'
import { myTsFun } from './testTS.ts'
print()
myTsFun()
console.log(testJSON, React, "hello rollup")
