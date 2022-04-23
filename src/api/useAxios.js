import axios from "axios";


export const client = () => {
  const client = axios.create({
    baseURL: 'https://opentdb.com'
  })  
  return client
}

client.get = async ({url}) => {
  return client().get(url)
    
}

