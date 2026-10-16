/**
 * @type {[string, function(string): void]} - menyimpan kata kunci pencarian dari input
 * @type {[User[], function(User[]): void]} - menyimpan data hasil fetch API
 * @type {useEffect} - Ambil data sekali saja
 * @type {User[]} - Berisi data sesuai kata kunci di search
 * @returns {JSX.elemet} - Tampilan daftar user & kolom pencarian
 */

import { useEffect, useState } from "react";
import GetData from "./components/GetData";

function App() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    GetData().then((data) => setUsers(data));
  }, []);
  function filterUsers(array, cari) {
    return array.filter((user) => user.name.toLowerCase().includes(cari.toLowerCase()));
  }
  const filteredUsers = filterUsers(users, search);
  // const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <main>
      <h1 className="text-center mb-5">Daftar User</h1>

      <input type="text" placeholder="Cari nama..." value={search} onChange={(n) => setSearch(n.target.value)} className="p-1 border rounded-sm mb-5 w-full" />

      <div className="grid grid-cols-1 gap-4">
        {filteredUsers.map((user) => (
          <div className="border rounded-sm p-4">
            <h2 className="font-semibold">{user.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
