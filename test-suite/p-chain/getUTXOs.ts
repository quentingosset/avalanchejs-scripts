import { 
  Avalanche
} from "avalanche"
import {
  PlatformVMAPI,
  UTXOSet
} from "avalanche/dist/apis/platformvm"
import { PlatformVMU } from '../common/interfaces'
  
const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 12345
const avalanche: Avalanche = new Avalanche(ip, port, protocol, networkID)
const pchain: PlatformVMAPI = avalanche.PChain()

const main = async (): Promise<any> => {
  const sourceChain: string = "P"
  const address: string = `${sourceChain}-local18jma8ppw3nhx5r4ap8clazz0dps7rv5u00z96u`
  const platformvmu: PlatformVMU = await pchain.getUTXOs(address, sourceChain)
  const utxos: UTXOSet = platformvmu.utxos
  console.log(utxos.getAllUTXOStrings())
  console.log("----------------------------")
}
  
main()
