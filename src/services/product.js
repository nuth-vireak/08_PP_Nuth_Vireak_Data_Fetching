export const getProduct = async () => {
    const response = await fetch('https://dummyjson.com/products', {
        cache: 'no-store',
    });
    return await response.json();
}

export const getProductByid = async (id) => {
    const request = await fetch(`https://dummyjson.com/products/${id}`, {
        cache: 'no-store',
    });
    return await request.json();
}