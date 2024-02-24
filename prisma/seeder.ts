const products = [
  {
    name: "Denim Overshirt",
    description:
      "Introducing our non-stretched denim overshirt, meticulously designed to be your ultimate winter companion. Crafted with a keen eye for detail and uncompromising quality, this overshirt boasts a timeless straight hemline, exuding a classic aesthetic that seamlessly blends comfort and style. The two chest pocket flaps not only add a touch of functional charm but also amplify the rugged, yet refined look, perfect for those chilly winter days. The metal zipper on the left pocket adds a distinctive and edgy element, allowing you to pose a signature style.",
    category: "Men's Winter Wear",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698733789/02_13e4bd19-06be-4a64-be6b-8e7c5d3fea63_540x_khazsu.jpg",
    price: 2500,
    quantity: 100,
  },
  {
    name: "Trench Coat",
    description:
      "This Trench Coat is a modern take on the standard mid-length regular-fit coat. There is a stamped moon pattern on the back, adding a touch of uniqueness. It is designed as an overlapped coat with a free waist belt for a flattering fit and it includes flap pockets. The coat is fastened with black buttons bearing the brand's logo and features a notch lapel collar with three buttons.",
    category: "Men's Winter Wear",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698736502/1_82e25c67-bba8-4330-8d03-e10f68a9d172_540x_yw5bwh.jpg",
    price: 2500,
    quantity: 120,
  },
  {
    name: "Cotton Check Overshirt",
    description:
      "Premium cotton cord fabric gives you a classic look and ensures comfortably warm wear. This shirt comes with chest flap pockets and a classic collar. It has a straight hem. This shirt is tailored in a fit that is great for both layering and wear alone. It brings a relaxed attitude of a Man!",
    category: "Men's Casual Wear",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698750527/01_540x_ohmgih.jpg",
    price: 1000,
    quantity: 50,
  },
  {
    name: "Printed Unisex Hoodie",
    description:
      "Get ready to turn heads this winter with our 100% Cotton pullover hoodie. The adjustable matching drawstrings add an extra layer of sophistication to your look, while the ribbed cuffs and a waist hem provide the perfect fit. With a distinctive kangaroo pocket and contrast color pigment screen print on the back, this hoodie is not just stylish; it's a fashion statement!",
    category: "Winter",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698750758/5_ce9c06fd-b4e3-4b68-bb85-c57f724e45a4_540x_tu6jpv.jpg",
    price: 500,
    quantity: 100,
  },
  {
    name: "Printed Hoodie",
    description:
      "Get ready to turn heads this winter with our 100% Cotton pullover hoodie. The adjustable matching drawstrings add an extra layer of sophistication to your look, while the ribbed cuffs and a waist hem provide the perfect fit. With a distinctive kangaroo pocket and contrast color pigment screen print on the back, this hoodie is not just stylish; it's a fashion statement! ",
    category: "Winter",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698751449/07_540x_dmakad.jpg",
    price: 750,
    quantity: 120,
  },
  {
    name: "Unisex Hoodie",
    description:
      "This unisex pullover hoodie made of 100% Knitted Cotton will give a kicky look in this winter. The hoodie is combined with matching adjustable drawstrings as well as ribbed cuffs and a waist hem. The kangaroo pocket will give it a distinctive appearance. This has a contrast color tiger print on the top middle of the chest. This hoodie will keep you cozy and warm as the thicker the cotton hoodie, the warmer you will feel! So wear this one, whenever you just want to chill out!",
    category: "Winter",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698751702/3D_a62f8434-0c32-4257-82f4-1904e18aae6d_540x_dbipb2.jpg",
    price: 500,
    quantity: 230,
  },
  {
    name: "Trench Coat T",
    description:
      "This Trench Coat is a modern take on the standard mid-length regular-fit coat. It boasts a linen back with a contrasting moon design, black buttons with branding, and stylish shoulder/sleeve loops, all complemented by a classic Napoleon collar.",
    category: "Winter",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698751875/1D_aa204443-e10c-4f75-9239-9396e650b0f5_540x_b1oxp2.jpg",
    price: 750,
    quantity: 100,
  },
  {
    name: "Baseball Jacket",
    description:
      " Elevate your style, comfort, and confidence with this remarkable Unisex Baseball Jacket. Crafted from 100% combed cotton, it offers both comfort and a touch of elegance. The intricate towel embroidery on the chest showcases our unwavering commitment to quality and attention to detail. With a straight hem and long sleeves featuring contrast color stripe ribbed cuffs and collar, this jacket is more than just clothing; it's a statement piece designed to help you stand out.",
    category: "Men's Winter Wear",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698752988/4_1f2e6946-9091-46f2-a358-e4c75a9477be_540x_xty6mh.jpg",
    price: 600,
    quantity: 100,
  },
  {
    name: "Elbow Patch Hoodie",
    description:
      "This unisex pullover hoodie made of 100% Knitted cotton will give a kicky look this winter. The hoodie is combined with matching drawstrings, ribbed cuffs and a waist hem as well. The kangaroo pocket will give it a distinctive appearance. It has contrast color elbow patch on the sleeve. This has a contrast color printed logo on the middle of the left chest. This hoodie will keep you cozy and warm as the thicker the cotton hoodie, the warmer you will feel!",
    category: "Winter",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698753172/2D_540x_zyoib7.jpg",
    price: 600,
    quantity: 130,
  },
  {
    name: "Denim Jacket",
    description:
      "This classic denim jacket is made of stretchable denim fabric that will keep you comfortable and warm during the cold winter months. It features a button-up closure, two chest flap pockets with button closures, and two side pockets. The jacket has a regular fit and a classic collar. It's a versatile piece that can be dressed up or down depending on the occasion.",
    category: "Men's Winter Wear",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698753360/4D_540x_e1kb4v.jpg",
    price: 1500,
    quantity: 80,
  },
  {
    name: "Ribbed Crew Neck Jumper",
    description:
      "Stay cozy and stylish with our Ribbed Crew Neck Jumper. Made from a blend of high-quality materials, this jumper offers both warmth and comfort. The ribbed crew neck design adds a touch of sophistication, making it suitable for both casual and semi-formal occasions. Pair it with jeans for a laid-back look or dress it up with trousers for a more refined ensemble.",
    category: "Winter",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698753544/7_540x_fv0gyv.jpg",
    price: 800,
    quantity: 150,
  },
  {
    name: "Cotton Check Overshirt",
    description:
      "Premium cotton cord fabric gives you a classic look and ensures comfortably warm wear. This shirt comes with chest flap pockets and a classic collar. It has a straight hem. This shirt is tailored in a fit that is great for both layering and wear alone. It brings a relaxed attitude of a Man!",
    category: "Men's Casual Wear",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698750527/01_540x_ohmgih.jpg",
    price: 1000,
    quantity: 50,
  },
  {
    name: "Printed Unisex Hoodie",
    description:
      "Get ready to turn heads this winter with our 100% Cotton pullover hoodie. The adjustable matching drawstrings add an extra layer of sophistication to your look, while the ribbed cuffs and a waist hem provide the perfect fit. With a distinctive kangaroo pocket and contrast color pigment screen print on the back, this hoodie is not just stylish; it's a fashion statement!",
    category: "Winter",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698750758/5_ce9c06fd-b4e3-4b68-bb85-c57f724e45a4_540x_tu6jpv.jpg",
    price: 500,
    quantity: 100,
  },
  {
    name: "Printed Hoodie",
    description:
      "Get ready to turn heads this winter with our 100% Cotton pullover hoodie. The adjustable matching drawstrings add an extra layer of sophistication to your look, while the ribbed cuffs and a waist hem provide the perfect fit. With a distinctive kangaroo pocket and contrast color pigment screen print on the back, this hoodie is not just stylish; it's a fashion statement! ",
    category: "Winter",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698751449/07_540x_dmakad.jpg",
    price: 750,
    quantity: 120,
  },
  {
    name: "Unisex Hoodie",
    description:
      "This unisex pullover hoodie made of 100% Knitted Cotton will give a kicky look in this winter. The hoodie is combined with matching adjustable drawstrings as well as ribbed cuffs and a waist hem. The kangaroo pocket will give it a distinctive appearance. This has a contrast color tiger print on the top middle of the chest. This hoodie will keep you cozy and warm as the thicker the cotton hoodie, the warmer you will feel! So wear this one, whenever you just want to chill out!",
    category: "Winter",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698751702/3D_a62f8434-0c32-4257-82f4-1904e18aae6d_540x_dbipb2.jpg",
    price: 500,
    quantity: 230,
  },
  {
    name: "Trench Coat T",
    description:
      "This Trench Coat is a modern take on the standard mid-length regular-fit coat. It boasts a linen back with a contrasting moon design, black buttons with branding, and stylish shoulder/sleeve loops, all complemented by a classic Napoleon collar.",
    category: "Winter",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698751875/1D_aa204443-e10c-4f75-9239-9396e650b0f5_540x_b1oxp2.jpg",
    price: 750,
    quantity: 100,
  },
  {
    name: "Baseball Jacket",
    description:
      " Elevate your style, comfort, and confidence with this remarkable Unisex Baseball Jacket. Crafted from 100% combed cotton, it offers both comfort and a touch of elegance. The intricate towel embroidery on the chest showcases our unwavering commitment to quality and attention to detail. With a straight hem and long sleeves featuring contrast color stripe ribbed cuffs and collar, this jacket is more than just clothing; it's a statement piece designed to help you stand out.",
    category: "Men's Winter Wear",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698752988/4_1f2e6946-9091-46f2-a358-e4c75a9477be_540x_xty6mh.jpg",
    price: 600,
    quantity: 100,
  },
  {
    name: "Elbow Patch Hoodie",
    description:
      "This unisex pullover hoodie made of 100% Knitted cotton will give a kicky look this winter. The hoodie is combined with matching drawstrings, ribbed cuffs and a waist hem as well. The kangaroo pocket will give it a distinctive appearance. It has contrast color elbow patch on the sleeve. This has a contrast color printed logo on the middle of the left chest. This hoodie will keep you cozy and warm as the thicker the cotton hoodie, the warmer you will feel!",
    category: "Winter",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698753172/2D_540x_zyoib7.jpg",
    price: 600,
    quantity: 130,
  },
  {
    name: "Denim Jacket",
    description:
      "This classic denim jacket is made of stretchable denim fabric that will keep you comfortable and warm during the cold winter months. It features a button-up closure, two chest flap pockets with button closures, and two side pockets. The jacket has a regular fit and a classic collar. It's a versatile piece that can be dressed up or down depending on the occasion.",
    category: "Men's Winter Wear",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698753360/4D_540x_e1kb4v.jpg",
    price: 1500,
    quantity: 80,
  },
  {
    name: "Ribbed Crew Neck Jumper",
    description:
      "Stay cozy and stylish with our Ribbed Crew Neck Jumper. Made from a blend of high-quality materials, this jumper offers both warmth and comfort. The ribbed crew neck design adds a touch of sophistication, making it suitable for both casual and semi-formal occasions. Pair it with jeans for a laid-back look or dress it up with trousers for a more refined ensemble.",
    category: "Winter",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698753544/7_540x_fv0gyv.jpg",
    price: 800,
    quantity: 150,
  },
  {
    name: "Knitted Sweater",
    description:
      "Stay warm and stylish this winter with our Knitted Sweater. Made from high-quality acrylic yarn, this sweater is soft, cozy, and perfect for layering. The classic crew neck design and ribbed cuffs add a touch of sophistication, while the knit pattern gives it a modern twist. Pair it with jeans for a casual look or dress it up with trousers for a more polished ensemble.",
    category: "Winter",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698753656/8_540x_wjwhv5.jpg",
    price: 700,
    quantity: 120,
  },
  {
    name: "Casual Slim Fit Shirt",
    description:
      "Add a touch of sophistication to your casual wardrobe with our Casual Slim Fit Shirt. Made from premium cotton fabric, this shirt is soft, breathable, and comfortable to wear all day long. The slim fit design creates a sleek silhouette, while the classic button-down collar and chest pocket add timeless appeal. Whether you're dressing up for a night out or keeping it casual on the weekend, this shirt is sure to become a wardrobe staple.",
    category: "Men's Casual Wear",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698753833/9_540x_cb2wgm.jpg",
    price: 800,
    quantity: 80,
  },
  {
    name: "Puffer Jacket",
    description:
      "Stay warm and stylish on chilly days with our Puffer Jacket. Made from high-quality nylon fabric with a polyester filling, this jacket is lightweight yet incredibly warm. The quilted design helps to trap heat and keep you cozy, while the zip-front closure and stand-up collar provide extra protection from the elements. With its versatile design and classic silhouette, this jacket is perfect for everyday wear.",
    category: "Winter",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698754052/12_540x_tej1hx.jpg",
    price: 1200,
    quantity: 90,
  },
  {
    name: "Quilted Jacket",
    description:
      "Add a touch of sophistication to your outerwear collection with our Quilted Jacket. Made from high-quality nylon fabric with a polyester filling, this jacket is lightweight, warm, and perfect for layering. The quilted design adds texture and visual interest, while the zip-front closure and stand-up collar provide extra protection from the elements. With its classic silhouette and versatile design, this jacket is a must-have for any wardrobe.",
    category: "Winter",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698754263/14_540x_zgfttm.jpg",
    price: 1000,
    quantity: 70,
  },
  {
    name: "Zip-Up Hoodie",
    description:
      "Stay cozy and stylish with our Zip-Up Hoodie. Made from soft, breathable cotton fabric, this hoodie is perfect for layering on chilly days. The full-length zip closure makes it easy to take on and off, while the ribbed cuffs and hem provide a snug, comfortable fit. With its classic design and versatile style, this hoodie is sure to become a wardrobe staple.",
    category: "Winter",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698754464/15_540x_kchaa2.jpg",
    price: 600,
    quantity: 150,
  },
  {
    name: "Classic T-Shirt",
    description:
      "Keep it casual and comfortable with our Classic T-Shirt. Made from soft, breathable cotton fabric, this t-shirt is perfect for everyday wear. The classic crew neck design and short sleeves make it easy to layer under jackets and sweaters, while the relaxed fit provides all-day comfort. Whether you're running errands or relaxing at home, this t-shirt is sure to become a wardrobe favorite.",
    category: "Men's Casual Wear",
    image:
      "https://res.cloudinary.com/dsftrmdil/image/upload/v1698754634/17_540x_tadqut.jpg",
    price: 300,
    quantity: 200,
  },
];

import { prisma } from ".";

async function main() {
  console.log("Seed data starting...");
  for (const product of products) {
    await prisma.product.create({
      data: {
        name: product.name,
        description: product.description,
        category: product.category,
        image: product.image,
        price: product.price,
        quantity: product.quantity,
      },
    });
  }

  console.log("Seed data inserted successfully");
}

main();
