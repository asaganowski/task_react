export const baseUrl = 'https://gorest.co.in'
const token=process.env.REACT_APP_AUTHORIZATION
export const header={
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
}

 
export function createRequest(endpoint, method, bodyData){
    return fetch(`${baseUrl}${endpoint}`, 
    {
        method: method,
        headers: header,
        body:bodyData
    })
    .then(response => {
        if (!response.ok) {
        console.log(response)
      }
      return response.json() 
    })
    .catch((error) => {
      throw error 
    })

  }