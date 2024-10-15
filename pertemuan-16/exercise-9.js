// //Promise 
// function helloWorld() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Hello World!");
//       }, 2000); 
//     });
//   }
  
//   async function messages() {
//     const msg = await helloWorld();
//     console.log(msg); 
//   }
  
//   // Panggil function messages
//   messages();
  
// // Fetch
// function ambilDataUser() {
//   // Menggunakan fetch untuk mengambil data dari API
//   fetch("https://reqres.in/api/users")
//     .then((response) => {

//       return response.json();
//     })
//     .then((users) => {

//       users.data.forEach((user) => {
//         console.log(`${user.first_name} ${user.last_name}`);
//       });
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error); 
//     });
// }

// ambilDataUser();

// //async Await
// async function ambilDataUser() {
//   try {

//     const response = await fetch("https://reqres.in/api/users");
    

//     const users = await response.json();
    

//     users.data.forEach((user) => {
//       console.log(`${user.first_name} ${user.last_name}`);
//     });
//   } catch (error) {

//     console.error("Error fetching data:", error);
//   }
// }

// ambilDataUser();

//Axios
async function ambilDataUser() {
  try {
    // Mengambil data dari API menggunakan axios
    const response = await axios.get("https://reqres.in/api/users");
    
    // Menampilkan data 'first_name' dan 'last_name'
    response.data.data.forEach((user) => {
      console.log(`${user.first_name} ${user.last_name}`);
    });
  } catch (error) {
    // Menangani error jika request gagal
    console.error("Error fetching data:", error);
  }
}

ambilDataUser();
