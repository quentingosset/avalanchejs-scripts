import { 
  Avalanche
} from "avalanche"
import {
  EVMAPI
} from "avalanche/dist/apis/evm"
  
const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 12345
const avalanche: Avalanche = new Avalanche(ip, port, protocol, networkID)
const cchain: EVMAPI = avalanche.CChain()
  
const main = async (): Promise<any> => {
  const txid: any = await cchain.import("gabr13l", "i224rjEezt", "0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC", "X")
  console.log(txid)
}
  
main()
