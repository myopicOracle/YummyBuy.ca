// // RAW
// product_1
// product_2
// product_3
// product_4
// product_5
// product_6
// product_7
// product_8
// product_9
// product_10
// product_11
// product_12
// product_13
// product_14
// product_15
// product_16
// product_17
// product_18
// product_19
// product_20
// product_21
// product_22
// product_23
// product_24

// "/src/assets/images/smiling-powerful-woman.jpg"
// "/src/assets/images/la-mujer-dice-ok-vector(1).jpg"
// "/src/assets/images/vecteezy_african-civet-mascot_413_BG-Removed.png"
// "/src/assets/images/cute-sloth-emblem-logo-cartoon-free-vector-removebg-preview.png"
// "/src/assets/images/YummyBuy_Customized_Logo_A_BG-Removed.png"
// "/src/assets/images/vecteezy_cute-sloth-emblem-logo-cartoon_279.svg"

// "/src/assets/images/A_meticulously_organized_arran(1).jpeg"
// "/src/assets/images/A_meticulously_organized_arran(10).jpeg"
// "/src/assets/images/A_meticulously_organized_arran(11).jpeg"
// "/src/assets/images/A_meticulously_organized_arran(13).jpeg"
// "/src/assets/images/A_meticulously_organized_arran(17).jpeg"
// "/src/assets/images/A_meticulously_organized_arran(2).jpeg"
// "/src/assets/images/A_meticulously_organized_arran(20).jpeg"
// "/src/assets/images/A_meticulously_organized_arran(21).jpeg"
// "/src/assets/images/A_meticulously_organized_arran(23).jpeg"
// "/src/assets/images/A_meticulously_organized_arran(29).jpeg"
// "/src/assets/images/A_meticulously_organized_arran(3).jpeg"
// "/src/assets/images/A_meticulously_organized_arran(30).jpeg"
// "/src/assets/images/A_meticulously_organized_arran(32).jpeg"
// "/src/assets/images/A_meticulously_organized_arran(33).jpeg"
// "/src/assets/images/A_meticulously_organized_arran(34).jpeg"
// "/src/assets/images/A_meticulously_organized_arran(4).jpeg"
// "/src/assets/images/A_meticulously_organized_arran(5).jpeg"
// "/src/assets/images/A_meticulously_organized_arran(6).jpeg"
// "/src/assets/images/A_meticulously_organized_arran(7).jpeg"
// "/src/assets/images/A_meticulously_organized_arran(8).jpeg"
// "/src/assets/images/A_meticulously_organized_arran(9).jpeg"
// "/src/assets/images/painterly_anime_artwork_A_meti(1).jpeg"
// "/src/assets/images/painterly_anime_artwork_A_meti(2).jpeg"
// "/src/assets/images/painterly_anime_artwork_A_meti.jpeg"



// const productsOLD = [
//   { id: 1, name: "Wireless Earbuds", price: 79.99, image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Cpath d='M130,80 C130,60 115,45 95,45 C75,45 60,60 60,80 L60,120 C60,125 65,130 70,130 L80,130 C85,130 90,125 90,120 L90,90 C90,85 95,80 100,80 C105,80 110,85 110,90 L110,120 C110,125 115,130 120,130 L130,130 C135,130 140,125 140,120 L140,80 Z' fill='%235D5CDE'/%3E%3C/svg%3E", description: "True wireless earbuds with noise cancellation and premium sound quality." },
//   { id: 2, name: "Smart Watch", price: 149.99, image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Crect x='70' y='60' width='60' height='80' rx='10' fill='%235D5CDE'/%3E%3Crect x='80' y='70' width='40' height='60' rx='5' fill='white'/%3E%3Cpath d='M70,100 L50,100 M130,100 L150,100 M100,60 L100,40 M100,140 L100,160' stroke='%235D5CDE' stroke-width='4'/%3E%3C/svg%3E", description: "Fitness tracker with heart rate monitoring, GPS, and customizable watch faces." },
//   { id: 3, name: "Bluetooth Speaker", price: 129.99, image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Crect x='50' y='70' width='100' height='60' rx='10' fill='%235D5CDE'/%3E%3Ccircle cx='80' cy='100' r='20' fill='%23333'/%3E%3Ccircle cx='120' cy='100' r='10' fill='%23333'/%3E%3C/svg%3E", description: "Portable speaker with 20-hour battery life and water-resistant design." },
//   { id: 4, name: "Wireless Charger", price: 39.99, image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ccircle cx='100' cy='100' r='40' fill='%235D5CDE'/%3E%3Ccircle cx='100' cy='100' r='30' fill='white'/%3E%3Ccircle cx='100' cy='100' r='10' fill='%235D5CDE'/%3E%3C/svg%3E", description: "Fast charging pad compatible with all Qi-enabled devices." },
//   { id: 5, name: "Tablet Stand", price: 24.99, image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Cpath d='M60,140 L80,80 L120,80 L140,140 Z' fill='%235D5CDE'/%3E%3Crect x='70' y='60' width='60' height='80' rx='5' fill='white' stroke='%235D5CDE' stroke-width='2'/%3E%3C/svg%3E", description: "Adjustable aluminum stand for tablets and smartphones." },
//   { id: 6, name: "USB-C Hub", price: 59.99, image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Crect x='40' y='80' width='120' height='40' rx='5' fill='%235D5CDE'/%3E%3Crect x='50' y='90' width='10' height='20' fill='white'/%3E%3Crect x='70' y='90' width='10' height='20' fill='white'/%3E%3Crect x='90' y='90' width='10' height='20' fill='white'/%3E%3Crect x='110' y='90' width='10' height='20' fill='white'/%3E%3Crect x='130' y='90' width='20' height='10' fill='white'/%3E%3C/svg%3E", description: "7-in-1 adapter with HDMI, USB, and SD card ports." }
// ];


// Logo and Cover photo
import cover_1 from "/src/assets/images/smiling-powerful-woman.jpg"
import cover_2 from "/src/assets/images/la-mujer-dice-ok-vector(1).jpg"
import logo_1 from "/src/assets/images/vecteezy_african-civet-mascot_413_BG-Removed.png"
import logo_2 from "/src/assets/images/cute-sloth-emblem-logo-cartoon-free-vector-removebg-preview.png"
import logo_3 from "/src/assets/images/YummyBuy_Customized_Logo_A_BG-Removed.png"
import logo_4 from "/src/assets/images/vecteezy_cute-sloth-emblem-logo-cartoon_279.svg"

// Food Related
import product_1 from "/src/assets/images/A_meticulously_organized_arran(1).jpeg"
import product_2 from "/src/assets/images/A_meticulously_organized_arran(10).jpeg"
import product_3 from "/src/assets/images/A_meticulously_organized_arran(11).jpeg"
import product_4 from "/src/assets/images/A_meticulously_organized_arran(13).jpeg"
import product_5 from "/src/assets/images/A_meticulously_organized_arran(17).jpeg"
import product_6 from "/src/assets/images/A_meticulously_organized_arran(2).jpeg"
import product_7 from "/src/assets/images/A_meticulously_organized_arran(20).jpeg"
import product_8 from "/src/assets/images/A_meticulously_organized_arran(21).jpeg"
import product_9 from "/src/assets/images/A_meticulously_organized_arran(23).jpeg"
import product_10 from "/src/assets/images/A_meticulously_organized_arran(29).jpeg"
import product_11 from "/src/assets/images/A_meticulously_organized_arran(3).jpeg"
import product_12 from "/src/assets/images/A_meticulously_organized_arran(30).jpeg"
import product_13 from "/src/assets/images/A_meticulously_organized_arran(32).jpeg"
import product_14 from "/src/assets/images/A_meticulously_organized_arran(33).jpeg"
import product_15 from "/src/assets/images/A_meticulously_organized_arran(34).jpeg"
import product_16 from "/src/assets/images/A_meticulously_organized_arran(4).jpeg"
import product_17 from "/src/assets/images/A_meticulously_organized_arran(5).jpeg"
import product_18 from "/src/assets/images/A_meticulously_organized_arran(6).jpeg"
import product_19 from "/src/assets/images/A_meticulously_organized_arran(7).jpeg"
import product_20 from "/src/assets/images/A_meticulously_organized_arran(8).jpeg"
import product_21 from "/src/assets/images/A_meticulously_organized_arran(9).jpeg"
import product_22 from "/src/assets/images/painterly_anime_artwork_A_meti(1).jpeg"
import product_23 from "/src/assets/images/painterly_anime_artwork_A_meti(2).jpeg"
import product_24 from "/src/assets/images/painterly_anime_artwork_A_meti.jpeg"


console.log(product_5)
console.log(product_6)
console.log(product_7)
console.log(product_8)
console.log(product_9)


const productData = [
  { id: 1, name: "Product 1", price: 3.99, qty: 0, image: product_1, description: "This is a placeholder text for the description of the product." },
  { id: 2, name: "Product 2", price: 4.99, qty: 0, image: product_2, description: "This is a placeholder text for the description of the product." },
  { id: 3, name: "Product 3", price: 7.99, qty: 0, image: product_3, description: "This is a placeholder text for the description of the product." },
  { id: 4, name: "Product 4", price: 13.99, qty: 0, image: product_4, description: "This is a placeholder text for the description of the product." },
  { id: 5, name: "Product 5", price: 4.99, qty: 0, image: product_5, description: "This is a placeholder text for the description of the product." },
  { id: 6, name: "Product 6", price: 5.99, qty: 0, image: product_6, description: "This is a placeholder text for the description of the product." },
  { id: 7, name: "Product 7", price: 21.99, qty: 0, image: product_7, description: "This is a placeholder text for the description of the product." },
  { id: 8, name: "Product 8", price: 15.99, qty: 0, image: product_8, description: "This is a placeholder text for the description of the product." },
  { id: 9, name: "Product 9", price: 12.99, qty: 0, image: product_9, description: "This is a placeholder text for the description of the product." },
  { id: 10, name: "Product 10", price: 32.99, qty: 0, image: product_10, description: "This is a placeholder text for the description of the product." },
  { id: 11, name: "Product 11", price: 6.99, qty: 0, image: product_11, description: "This is a placeholder text for the description of the product." },
  { id: 12, name: "Product 12", price: 9.99, qty: 0, image: product_12, description: "This is a placeholder text for the description of the product." },
  { id: 13, name: "Product 13", price: 13.99, qty: 0, image: product_13, description: "This is a placeholder text for the description of the product." },
  { id: 14, name: "Product 14", price: 4.99, qty: 0, image: product_14, description: "This is a placeholder text for the description of the product." },
  { id: 15, name: "Product 15", price: 32.99, qty: 0, image: product_15, description: "This is a placeholder text for the description of the product." },
  { id: 16, name: "Product 16", price: 3.99, qty: 0, image: product_16, description: "This is a placeholder text for the description of the product." },
  { id: 17, name: "Product 17", price: 4.99, qty: 0, image: product_17, description: "This is a placeholder text for the description of the product." },
  { id: 18, name: "Product 18", price: 7.99, qty: 0, image: product_18, description: "This is a placeholder text for the description of the product." },
  { id: 19, name: "Product 19", price: 13.99, qty: 0, image: product_19, description: "This is a placeholder text for the description of the product." },
  { id: 20, name: "Product 20", price: 4.99, qty: 0, image: product_20, description: "This is a placeholder text for the description of the product." },
  { id: 21, name: "Product 21", price: 5.99, qty: 0, image: product_21, description: "This is a placeholder text for the description of the product." },
  { id: 22, name: "Product 22", price: 21.99, qty: 0, image: product_22, description: "This is a placeholder text for the description of the product." },
  { id: 23, name: "Product 23", price: 15.99, qty: 0, image: product_23, description: "This is a placeholder text for the description of the product." },
  { id: 24, name: "Product 24", price: 12.99, qty: 0, image: product_24, decription: "This is a placeholder text for the description of the product." },
]



export default productData;