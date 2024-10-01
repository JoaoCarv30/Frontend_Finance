

export async function FetchApi() {
     const response = await fetch('http://localhost:5051/modeltransaction')
     const data = await response.json();
    return data;
}
