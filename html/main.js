
function loadProducts() {
  
    fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar los productos');
            }
            return response.json(); // Convertimos la respuesta a JSON
        })
        