export const getTodoItemsFromLocalStorage = key => {
    const value = localStorage.getItem(key); // Get the JSON string stored with provided key in localStorage
  
    let todoItems = null; // Initialize todoItems variable to be assigned a final value later on
  
    // Using try catch to avoiding exception to be thrown if the JSON string is invalid
    // It may be a normal string and we can't JSON.parse it
    try {
      const parsedJSON = JSON.parse(value);
  
      if (Array.isArray(parsedJSON)) {
        todoItems = parsedJSON;
      }
    } catch(e) {
      // If it's not a valid JSON string, then we should initialize an empty array for todoItems
      todoItems = [];
    }
    
    return todoItems;
  }
  
  // This one is quite straightforward, it better have a comment too :))
  export const saveTodoItemsToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));