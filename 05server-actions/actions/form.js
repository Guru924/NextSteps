"use server"
import fs from "fs/promises"

export const submitAction = async (e)=>{
    console.log(e.get("name"), e.get("add"))
    let a = await fs.writeFile("guru.txt","if it doestnot exist it create automatically")
    
  }