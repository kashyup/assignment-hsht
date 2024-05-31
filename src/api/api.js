export const fetchProducts = async () => {
    try {
      const response = await fetch('https://uxdlyqjm9i.execute-api.eu-west-1.amazonaws.com/s?category=all');
      console.log(response)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch products:', error);
      throw error;
    }
  };
  