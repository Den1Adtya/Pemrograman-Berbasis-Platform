// const userProfile = {
//     firstName: "Deni",
//     lastName: "Aditiya",
//     age: 19,
//     email:"deni@gmail.com",
//     noHp: "081234567899",
//     isActive:true,
//     jenisKelamin:"Kontol",

//     getFullName: function(){
//         return this.firstName + " " + this.lastName; 
//     },

//     greet(){
//         return "Halo, Saya"+" " + this.getFullName() + ".";
//     }
//     };
//        delete userProfile.lastName;
 
// console.log("Nama Lengkap:", userProfile.getFullName());
// console.log("Usia:", userProfile.age);
// console.log("status aktif:", userProfile['isActive']);
// console.log("No HP:", userProfile.noHp);
// console.log("Jenis Kelamin:", userProfile.jenisKelamin);

// console.log(userProfile.greet());


// const keyProfile = "id";
// const userId = 1001;
// const keyDinamic = "alamat-user";

// const userData = {
//     [keyProfile + "user"]: userId,
//     [keyDinamic]: "jl.sudirman"
// };
// console.log(userData);
function buatPemain(nama,skor) {
    return{
        nama,
        skor,
        tambahkanSkor(poin){
            this.skor += poin;
        }
    }
}
const pemain1 = buatPemain("Deni",50);
pemain1.tambahkanSkor(10);
console.log(pemain1.skor);