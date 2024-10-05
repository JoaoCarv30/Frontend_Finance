export async function FetchApi() {
    const response = await fetch("http://localhost:5051/modeltransaction");
    const data = await response.json();
    return data;
  }
    export async function Delete(id: number) {
    const response = await fetch(`http://localhost:5051/modeltransaction/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (!response.ok) {
      throw new Error(`Erro ao deletar transação: ${response.statusText}`);
    }
  }
  

  export async function Edit (id: number) {
    const response = await fetch(`http://localhost:5051/modeltransaction/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

    });
  
    if (!response.ok) {
      throw new Error(`Erro ao editar transação: ${response.statusText}`);
    }
  }