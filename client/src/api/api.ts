export async function postCustomer() {
  const response = await fetch("http://localhost:7000/customers", {});

  if (!response.ok) {
    console.error("Failed to fetch");
  }
}

