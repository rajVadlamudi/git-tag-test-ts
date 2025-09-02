// @ts-check
import {checkJsonFileExistsSync} from './check.ts'
// import allowlist from './data.json'
import { readFileSync } from 'fs'

const rawData = readFileSync('./src/data.json','utf-8')
const jsonArray = JSON.parse(rawData)
console.log('data JSON: '+JSON.stringify(jsonArray))
export const Greet = ():string=>{
    return 'Hello its git tag test ts repo v1.0.3'
}

const message = Greet()
console.log(message)
console.log('check JSON: '+checkJsonFileExistsSync('./src/data.json'))
// console.log('data JSON: '+data)

export default Greet