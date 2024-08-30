import { getSlug } from "./slugify";
export const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return [];
  }
};

export const getUser = async (name) => {
  try {
    const users = await getUsers();
    return users.find((user) => getSlug(user.name) === name) || null;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return null;
  }
};
