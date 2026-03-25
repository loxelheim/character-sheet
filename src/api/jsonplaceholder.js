export async function getProfiles() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()

  return data
}