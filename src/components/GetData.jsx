/**
 * Mengambil data dari API JSONPlaceholder
 *
 * @async
 * @function GetData
 * @returns Mengembalikan hasil data yang sudah diambil
 */

const url = "https://jsonplaceholder.typicode.com/users";
async function GetData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error: ${error}`);
    return [];
  }
}

export default GetData;
