// ==========================================================================
// Buddha Vihar — Menu data + interactions
// Generated from the original index.html menu content.
// Each item needs: id, name, category, price, desc, img, zomato, swiggy
//
// IMAGES: paths below match the original folders (Mocktails/, Starters/,
// Soup/, Main/, Breads/, Rice/, Others/, South-Indian/, Dosa/, Uttapam/,
// Chinese/, Snacks/, Desserts/) — keep those folders next to menu.html,
// same as they were next to index.html.
//
// zomato/swiggy links are all '#' for now — replace with real order links
// per item whenever you're ready (or ask me to do it in batches).
// ==========================================================================

const ITEMS = [
  // ---------------- Mocktail ----------------
  { id: 'mocktail-virgin-mojito', name: 'Virgin Mojito', category: 'mocktail', price: 110, desc: '', img: 'Mocktails/1.1.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'mocktail-mai-tai', name: 'Mai Tai', category: 'mocktail', price: 100, desc: '', img: 'Mocktails/1.2.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'mocktail-pine-apple-mojito', name: 'Pine Apple Mojito', category: 'mocktail', price: 100, desc: '', img: 'Mocktails/1.3.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'mocktail-pina-colada', name: 'Pina Colada', category: 'mocktail', price: 110, desc: '', img: 'Mocktails/1.4.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'mocktail-blue-lagon', name: 'Blue Lagon', category: 'mocktail', price: 110, desc: '', img: 'Mocktails/1.5.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'mocktail-fruit-punch', name: 'Fruit Punch', category: 'mocktail', price: 140, desc: '', img: 'Mocktails/1.6.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'mocktail-straweberry-punch', name: 'Straweberry Punch', category: 'mocktail', price: 110, desc: '', img: 'Mocktails/1.7.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'mocktail-canned-juice', name: 'Canned Juice', category: 'mocktail', price: 80, desc: '', img: 'Mocktails/1.8.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'mocktail-cold-drink', name: 'Cold Drink', category: 'mocktail', price: 30, desc: '', img: 'Mocktails/1.9.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'mocktail-cold-coffee', name: 'Cold Coffee', category: 'mocktail', price: 110, desc: '', img: 'Mocktails/1.10.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'mocktail-cold-coffee-with-ice-cre', name: 'Cold Coffee With Ice-Cream', category: 'mocktail', price: 130, desc: '', img: 'Mocktails/1.11.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'mocktail-masala-cold-drink', name: 'Masala Cold Drink', category: 'mocktail', price: 40, desc: '', img: 'Mocktails/1.12.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'mocktail-fresh-lemon-soda', name: 'Fresh Lemon Soda', category: 'mocktail', price: 40, desc: '', img: 'Mocktails/1.13.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'mocktail-fresh-lemon-water', name: 'Fresh Lemon Water', category: 'mocktail', price: 30, desc: '', img: 'Mocktails/1.14.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'mocktail-special-lassi', name: 'Special Lassi', category: 'mocktail', price: 130, desc: '', img: 'Mocktails/1.15.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'mocktail-lassi', name: 'Lassi', category: 'mocktail', price: 100, desc: '', img: 'Mocktails/1.16.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'mocktail-milk-shake-vanila-strabe', name: 'Milk Shake (Vanila, Straberry, Chocolate)', category: 'mocktail', price: 120, desc: '', img: 'Mocktails/1.17.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'mocktail-jal-jeera', name: 'Jal Jeera', category: 'mocktail', price: 30, desc: '', img: 'Mocktails/1.18.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080108c38da0ea', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },

  // ---------------- Starters ----------------
  { id: 'starters-french-fries', name: 'French Fries', category: 'starters', price: 150, desc: '', img: 'Starters/2.1.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080154c38da185', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'starters-paneer-pakora-8pcs', name: 'Paneer Pakora (8pcs)', category: 'starters', price: 200, desc: '', img: 'Starters/2.2.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080194c38da96f', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'starters-veg-pakora', name: 'Veg Pakora', category: 'starters', price: 160, desc: '', img: 'Starters/2.3.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080211c38daeca', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'starters-veg-cutlets-2pcs', name: 'Veg Cutlets (2pcs)', category: 'starters', price: 180, desc: '', img: 'Starters/2.4.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080230c38dab25', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'starters-paneer-cutlets-2pcs', name: 'Paneer Cutlets (2pcs)', category: 'starters', price: 220, desc: '', img: 'Starters/2.5.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080270c38da90f', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'starters-baby-corn-chilly-dry', name: 'Baby Corn Chilly Dry', category: 'starters', price: 300, desc: '', img: 'Starters/2.6.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080290c38dada8', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'starters-mushroom-chilly-dry', name: 'Mushroom Chilly Dry', category: 'starters', price: 300, desc: '', img: 'Starters/2.7.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080363c38da772', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'starters-paneer-chilly-dry', name: 'Paneer Chilly Dry', category: 'starters', price: 270, desc: '', img: 'Starters/2.8.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080374c38dab56', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'starters-veg-hara-bhara-kabab-8pc', name: 'Veg Hara Bhara Kabab (8pcs)', category: 'starters', price: 270, desc: '', img: 'Starters/2.9.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080388c38daf67', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'starters-paneer-lahori-kabab', name: 'Paneer Lahori Kabab', category: 'starters', price: 350, desc: '', img: 'Starters/2.10.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080406c38da3b8', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'starters-paneer-lahsuni-kabab-8pc', name: 'Paneer Lahsuni Kabab (8pcs)', category: 'starters', price: 350, desc: '', img: 'Starters/2.11.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080425c38da5cf', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'starters-paneer-tikka', name: 'Paneer Tikka', category: 'starters', price: 300, desc: '', img: 'Starters/2.12.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080438c38da3c9', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'starters-paneer-malai-kabab-8pcs', name: 'Paneer Malai Kabab (8pcs)', category: 'starters', price: 350, desc: '', img: 'Starters/2.13.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080586c38daed0', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'starters-paneer-cheese-kabab-8pcs', name: 'Paneer Cheese Kabab (8pcs)', category: 'starters', price: 410, desc: '', img: 'Starters/2.14.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080595c38dacf2', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'starters-paneer-hariyali-kabab-8p', name: 'Paneer Hariyali Kabab (8pcs)', category: 'starters', price: 350, desc: '', img: 'Starters/2.15.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080610c38da839', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'starters-baby-corn-honey-chilly', name: 'Baby Corn Honey Chilly', category: 'starters', price: 330, desc: '', img: 'Starters/2.16.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080630c38da1ed', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'starters-mushroom-salt-paper', name: 'Mushroom Salt & Paper', category: 'starters', price: 280, desc: '', img: 'Starters/2.17.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080653c38da8bf', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'starters-mushroom-tikka', name: 'Mushroom Tikka', category: 'starters', price: 300, desc: '', img: 'Starters/2.18.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080669c38daeb0', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'starters-mushroom-malai-tikka', name: 'Mushroom Malai Tikka', category: 'starters', price: 340, desc: '', img: 'Starters/2.19.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080677c38dabcc', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'starters-vegetable-seekh-kabab', name: 'Vegetable Seekh Kabab', category: 'starters', price: 260, desc: '', img: 'Starters/2.20.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080693c38da360', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'starters-vegetable-goli-kabab', name: 'Vegetable Goli Kabab', category: 'starters', price: 200, desc: '', img: 'Starters/2.21.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080705c38dab35', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'starters-paneer-kali-mirch-kabab', name: 'Paneer Kali Mirch Kabab', category: 'starters', price: 300, desc: '', img: 'Starters/2.22.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080720c38da000', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },

  // ---------------- Soup ----------------
  { id: 'soup-tomato-soup', name: 'Tomato Soup', category: 'soup', price: 120, desc: '', img: 'Soup/3.1.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080811c38da701', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'soup-vegetable-soup', name: 'Vegetable Soup', category: 'soup', price: 130, desc: '', img: 'Soup/3.2.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080823c38da982', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'soup-vegetable-sweet-corn-sou', name: 'Vegetable Sweet Corn Soup', category: 'soup', price: 150, desc: '', img: 'Soup/3.3.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080832c38da358', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'soup-vegetable-hot-sour-soup', name: 'Vegetable Hot & Sour Soup', category: 'soup', price: 150, desc: '', img: 'Soup/3.4.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080857c38da28c', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'soup-vegetable-manchow-soup', name: 'Vegetable Manchow Soup', category: 'soup', price: 170, desc: '', img: 'Soup/3.5.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080869c38da81c', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },

  // ---------------- Main Course ----------------
  { id: 'main-dal-fry', name: 'Dal Fry', category: 'main', price: 140, desc: '', img: 'Main/4.1.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081119c38daba2', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-dal-tadka', name: 'Dal Tadka', category: 'main', price: 170, desc: '', img: 'Main/4.2.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081129c38da607', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-dal-makhani', name: 'Dal Makhani', category: 'main', price: 220, desc: '', img: 'Main/4.3.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081138c38daad9', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-aaloo-do-pyaza', name: 'Aaloo Do Pyaza', category: 'main', price: 150, desc: '', img: 'Main/4.4.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081166c38da6dc', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-aaloo-dum-amritsary', name: 'Aaloo Dum Amritsary', category: 'main', price: 200, desc: '', img: 'Main/4.5.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081174c38da088', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-aaloo-dum-banarasi', name: 'Aaloo Dum Banarasi', category: 'main', price: 220, desc: '', img: 'Main/4.6.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081183c38da6da', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-aaloo-jeera', name: 'Aaloo Jeera', category: 'main', price: 150, desc: '', img: 'Main/4.7.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081192c38daacc', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-coconut-patato', name: 'Coconut Patato', category: 'main', price: 210, desc: '', img: 'Main/4.8.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081206c38da2e0', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-seasonal-veg', name: 'Seasonal Veg', category: 'main', price: 180, desc: '', img: 'Main/4.9.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081224c38da740', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-seasonal-veg-special', name: 'Seasonal Veg Special', category: 'main', price: 210, desc: '', img: 'Main/4.10.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081232c38daba3', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-vege-chingari', name: 'Vege Chingari', category: 'main', price: 280, desc: '', img: 'Main/4.11.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081252c38da7e3', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-vege-jaipuri', name: 'Vege Jaipuri', category: 'main', price: 290, desc: '', img: 'Main/4.12.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081265c38da0b8', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-paneer-butter-masala', name: 'Paneer Butter Masala', category: 'main', price: 290, desc: '', img: 'Main/4.13.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081278c38dad56', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-paneer-kadhai', name: 'Paneer Kadhai', category: 'main', price: 300, desc: '', img: 'Main/4.14.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142079357c38dab04', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-paneer-do-pyaza', name: 'Paneer Do Pyaza', category: 'main', price: 300, desc: '', img: 'Main/4.15.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081298c38da071', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-mix-vegetable', name: 'Mix Vegetable', category: 'main', price: 250, desc: '', img: 'Main/4.16.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081333c38da608', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-mix-vegetable-special', name: 'Mix Vegetable Special', category: 'main', price: 280, desc: '', img: 'Main/4.17.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081345c38da71c', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-veg-kofta-amritsary', name: 'Veg Kofta Amritsary', category: 'main', price: 300, desc: '', img: 'Main/4.18.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081358c38da54e', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-palak-corn', name: 'Palak Corn', category: 'main', price: 290, desc: '', img: 'Main/4.19.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081379c38dacc8', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-palak-paneer', name: 'Palak Paneer', category: 'main', price: 290, desc: '', img: 'Main/4.20.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081388c38da357', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-palak-cream', name: 'Palak Cream', category: 'main', price: 270, desc: '', img: 'Main/4.21.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081395c38da7fb', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-mashroom-masala', name: 'Mashroom Masala', category: 'main', price: 300, desc: '', img: 'Main/4.22.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081414c38da25c', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-mashroom-kadhi', name: 'Mashroom Kadhi', category: 'main', price: 310, desc: '', img: 'Main/4.23.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081431c38da5a1', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-mashroom-butter-masala', name: 'Mashroom Butter Masala', category: 'main', price: 310, desc: '', img: 'Main/4.24.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081450c38dafe8', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-mashrom-do-pyaza', name: 'Mashrom Do Pyaza', category: 'main', price: 300, desc: '', img: 'Main/4.25.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142092044c38da9f3', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-paneer-lahori-masala', name: 'Paneer Lahori Masala', category: 'main', price: 350, desc: '', img: 'Main/4.26.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142092061c38da2d9', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-paneer-tikka-masala', name: 'Paneer Tikka Masala', category: 'main', price: 370, desc: '', img: 'Main/4.27.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142092075c38daad1', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-paneer-masala', name: 'Paneer Masala', category: 'main', price: 320, desc: '', img: 'Main/4.28.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142092089c38da602', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-paneer-lababdaar', name: 'Paneer Lababdaar', category: 'main', price: 300, desc: '', img: 'Main/4.29.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142092099c38da2f2', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-paneer-kolhibada', name: 'Paneer Kolhibada', category: 'main', price: 350, desc: '', img: 'Main/4.30.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142092116c38dab48', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-paneer-malai-kofta', name: 'Paneer Malai Kofta', category: 'main', price: 360, desc: '', img: 'Main/4.31.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142092130c38da00d', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-paneer-shahi-lazeez', name: 'Paneer Shahi/Lazeez', category: 'main', price: 360, desc: '', img: 'Main/4.32.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142092147c38da72b', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-paneer-kolhapuri', name: 'Paneer Kolhapuri', category: 'main', price: 350, desc: '', img: 'Main/4.33.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142092161c38dadba', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-paneer-punjabi', name: 'Paneer Punjabi', category: 'main', price: 360, desc: '', img: 'Main/4.34.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142092178c38dace6', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-veg-hara-bhara-kabab-mas', name: 'Veg Hara Bhara Kabab Masala', category: 'main', price: 380, desc: '', img: 'Main/4.35.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142092241c38da8a7', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-paneer-jalfrezi', name: 'Paneer Jalfrezi', category: 'main', price: 310, desc: '', img: 'Main/4.36.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142092273c38da201', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-mashroom-butter-masala-2', name: 'Mashroom Butter Masala', category: 'main', price: 300, desc: '', img: 'Main/4.37.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142081450c38dafe8', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-paneer-handi', name: 'Paneer Handi', category: 'main', price: 310, desc: '', img: 'Main/4.38.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142092314c38da057', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-kathal-handi', name: 'Kathal Handi', category: 'main', price: 280, desc: '', img: 'Main/4.39.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142092326c38dadf7', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-paneer-diwani', name: 'Paneer Diwani', category: 'main', price: 350, desc: '', img: 'Main/4.40.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142092341c38da0e5', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-mutter-methi-malai', name: 'Mutter Methi Malai', category: 'main', price: 320, desc: '', img: 'Main/4.41.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-paneer-pasanda', name: 'Paneer Pasanda', category: 'main', price: 360, desc: '', img: 'Main/4.42.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-paneer-tawa-masala', name: 'Paneer Tawa Masala', category: 'main', price: 350, desc: '', img: 'Main/4.43.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-kaju-curry', name: 'Kaju Curry', category: 'main', price: 370, desc: '', img: 'Main/4.44.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-kaju-korma', name: 'Kaju Korma', category: 'main', price: 370, desc: '', img: 'Main/4.45.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-buddha-vihar-spl-mashroo', name: 'Buddha Vihar Spl (Mashroom, Paneer & Baby Corn)', category: 'main', price: 410, desc: '', img: 'Main/4.46.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'main-paneer-bhurji', name: 'Paneer Bhurji', category: 'main', price: 300, desc: '', img: 'Main/4.47.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },

  // ---------------- Breads ----------------
  { id: 'breads-tandoori-roti', name: 'Tandoori Roti', category: 'breads', price: 18, desc: '', img: 'Breads/5.1.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142107924c38dab86', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'breads-tandoori-butter-roti', name: 'Tandoori Butter Roti', category: 'breads', price: 25, desc: '', img: 'Breads/5.2.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142107934c38da670', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'breads-plain-naan', name: 'Plain Naan', category: 'breads', price: 40, desc: '', img: 'Breads/5.3.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142107943c38dac83', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'breads-butter-nan', name: 'Butter Nan', category: 'breads', price: 50, desc: '', img: 'Breads/5.4.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142107954c38da653', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'breads-garlic-naan', name: 'Garlic Naan', category: 'breads', price: 70, desc: '', img: 'Breads/5.5.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142107963c38da2fb', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'breads-lachha-paratha', name: 'Lachha Paratha', category: 'breads', price: 50, desc: '', img: 'Breads/5.6.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142107974c38da4f4', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'breads-paneer-naaan', name: 'Paneer Naaan', category: 'breads', price: 90, desc: '', img: 'Breads/5.7.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142107994c38daf0e', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'breads-stuff-naan', name: 'Stuff Naan', category: 'breads', price: 70, desc: '', img: 'Breads/5.8.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142108057c38dac57', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'breads-stuff-kulcha', name: 'Stuff Kulcha', category: 'breads', price: 70, desc: '', img: 'Breads/5.9.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142108067c38da9cf', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'breads-missi-roti', name: 'Missi Roti', category: 'breads', price: 45, desc: '', img: 'Breads/5.10.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142108077c38dad61', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'breads-khasta-roti', name: 'Khasta Roti', category: 'breads', price: 45, desc: '', img: 'Breads/5.11.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142108095c38da1eb', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },

  // ---------------- Rice ----------------
  { id: 'rice-steam-rice', name: 'Steam Rice', category: 'rice', price: 90, desc: '', img: 'Rice/6.1.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142108210c38da1ab', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'rice-jeera-rice', name: 'Jeera Rice', category: 'rice', price: 110, desc: '', img: 'Rice/6.2.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142108227c38dacca', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'rice-veg-pullao', name: 'Veg Pullao', category: 'rice', price: 170, desc: '', img: 'Rice/6.3.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142108308c38da103', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'rice-green-peas-pullao', name: 'Green Peas Pullao', category: 'rice', price: 160, desc: '', img: 'Rice/6.4.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142108321c38da4fc', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'rice-kashmiri-pullao', name: 'Kashmiri Pullao', category: 'rice', price: 190, desc: '', img: 'Rice/6.5.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142108331c38da7b8', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'rice-special-pullao', name: 'Special Pullao', category: 'rice', price: 220, desc: '', img: 'Rice/6.6.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142108342c38daf96', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'rice-veg-biryani', name: 'Veg Biryani', category: 'rice', price: 200, desc: '', img: 'Rice/6.7.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142108351c38dab9f', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'rice-paneer-biryani', name: 'Paneer Biryani', category: 'rice', price: 220, desc: '', img: 'Rice/6.8.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142108364c38da2f4', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },

  // ---------------- Others ----------------
  { id: 'others-onion-salad', name: 'Onion Salad', category: 'others', price: 40, desc: '', img: 'Others/7.1.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142108856c38da4b2', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'others-green-salad', name: 'Green Salad', category: 'others', price: 80, desc: '', img: 'Others/7.2.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142108874c38daf93', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'others-roasted-papad', name: 'Roasted Papad', category: 'others', price: 20, desc: '', img: 'Others/7.3.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142108897c38da51e', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'others-fried-paped', name: 'Fried Paped', category: 'others', price: 20, desc: '', img: 'Others/7.4.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142108921c38da2e3', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'others-masala-paped', name: 'Masala Paped', category: 'others', price: 40, desc: '', img: 'Others/7.5.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142108941c38da49b', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'others-veg-raita', name: 'Veg Raita', category: 'others', price: 100, desc: '', img: 'Others/7.6.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142108951c38da366', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'others-mix-raita', name: 'Mix Raita', category: 'others', price: 110, desc: '', img: 'Others/7.7.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142108961c38da4d8', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'others-onion-raita', name: 'Onion Raita', category: 'others', price: 90, desc: '', img: 'Others/7.8.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142108969c38dabb7', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'others-fruit-raita', name: 'Fruit Raita', category: 'others', price: 150, desc: '', img: 'Others/7.9.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142108979c38daaf2', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'others-boondi-raita', name: 'Boondi Raita', category: 'others', price: 100, desc: '', img: 'Others/7.10.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142108988c38da6d5', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'others-cucumber-salad', name: 'Cucumber Salad', category: 'others', price: 140, desc: '', img: 'Others/7.11.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109004c38dad1f', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },

  // ---------------- South Indian ----------------
  { id: 'southindian-idly', name: 'Idly', category: 'southindian', price: 100, desc: '', img: 'South-Indian/8.1.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109016c38dab0f', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'southindian-sada-vada', name: 'Sada Vada', category: 'southindian', price: 120, desc: '', img: 'South-Indian/8.2.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109025c38dacc4', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'southindian-idly-vada-mix', name: 'Idly/Vada (Mix)', category: 'southindian', price: 125, desc: '', img: 'South-Indian/8.3.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109033c38da028', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'southindian-idly-fried', name: 'Idly Fried', category: 'southindian', price: 120, desc: '', img: 'South-Indian/8.4.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109043c38da8ca', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'southindian-dahi-vada', name: 'Dahi Vada', category: 'southindian', price: 120, desc: '', img: 'South-Indian/8.5.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109054c38da182', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'southindian-upma', name: 'Upma', category: 'southindian', price: 120, desc: '', img: 'South-Indian/8.6.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109065c38da464', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },

  // ---------------- Dosa ----------------
  { id: 'dosa-special-masala-dosa', name: 'Special Masala Dosa', category: 'dosa', price: 220, desc: '', img: 'Dosa/9.1.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109084c38da1eb', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-cheese-sada-dosa', name: 'Cheese Sada Dosa', category: 'dosa', price: 180, desc: '', img: 'Dosa/9.2.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109110c38dab1f', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-cheese-masala-dosa', name: 'Cheese Masala Dosa', category: 'dosa', price: 200, desc: '', img: 'Dosa/9.3.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109131c38da6a4', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-sada-dosa', name: 'Sada Dosa', category: 'dosa', price: 140, desc: '', img: 'Dosa/9.4.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109144c38daa06', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-masala-dosa', name: 'Masala Dosa', category: 'dosa', price: 170, desc: '', img: 'Dosa/9.5.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109155c38da4b5', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-butter-sada-dosa', name: 'Butter Sada Dosa', category: 'dosa', price: 150, desc: '', img: 'Dosa/9.6.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109179c38da9ba', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-butter-masala-dosa', name: 'Butter Masala Dosa', category: 'dosa', price: 180, desc: '', img: 'Dosa/9.7.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109194c38da98b', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-onion-sada-dosa', name: 'Onion Sada Dosa', category: 'dosa', price: 140, desc: '', img: 'Dosa/9.8.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109220c38dacbd', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-onion-masala-dosa', name: 'Onion Masala Dosa', category: 'dosa', price: 160, desc: '', img: 'Dosa/9.9.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109239c38da68f', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-butter-onion-sada-dosa', name: 'Butter Onion Sada Dosa', category: 'dosa', price: 160, desc: '', img: 'Dosa/9.10.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109253c38daada', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-butter-onion-masala-dosa', name: 'Butter Onion Masala Dosa', category: 'dosa', price: 180, desc: '', img: 'Dosa/9.11.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109262c38dacd7', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-paper-sada-dosa', name: 'Paper Sada Dosa', category: 'dosa', price: 180, desc: '', img: 'Dosa/9.12.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109273c38daeb9', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-paper-masala-dosa', name: 'Paper Masala Dosa', category: 'dosa', price: 220, desc: '', img: 'Dosa/9.13.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109281c38dabe8', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-butter-paper-sada-dosa', name: 'Butter Paper Sada Dosa', category: 'dosa', price: 200, desc: '', img: 'Dosa/9.14.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109293c38dada4', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-butter-paper-masala-dosa', name: 'Butter Paper Masala Dosa', category: 'dosa', price: 240, desc: '', img: 'Dosa/9.15.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109303c38da3a0', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-paneer-sada-dosa', name: 'Paneer Sada Dosa', category: 'dosa', price: 180, desc: '', img: 'Dosa/9.16.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109273c38daeb9', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-paneer-masala-dosa', name: 'Paneer Masala Dosa', category: 'dosa', price: 210, desc: '', img: 'Dosa/9.17.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109281c38dabe8', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-onion-rava-sada-dosa', name: 'Onion Rava Sada Dosa', category: 'dosa', price: 210, desc: '', img: 'Dosa/9.18.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109341c38da94e', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-onion-rava-masala-dosa', name: 'Onion Rava Masala Dosa', category: 'dosa', price: 210, desc: '', img: 'Dosa/9.19.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109351c38dabea', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-butter-rava-sada-dosa', name: 'Butter Rava Sada Dosa', category: 'dosa', price: 180, desc: '', img: 'Dosa/9.20.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109362c38dabc9', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-butter-rava-masala-dosa', name: 'Butter Rava Masala Dosa', category: 'dosa', price: 220, desc: '', img: 'Dosa/9.21.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109371c38da5b5', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-paneer-onion-rava-sada-d', name: 'Paneer Onion Rava Sada Dosa', category: 'dosa', price: 220, desc: '', img: 'Dosa/9.22.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109385c38da6ea', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-paneer-onion-rava-masala', name: 'Paneer Onion Rava Masala Dosa', category: 'dosa', price: 240, desc: '', img: 'Dosa/9.23.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109403c38dad57', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-extra-cheese', name: 'Extra Cheese', category: 'dosa', price: 40, desc: '', img: 'Dosa/9.24.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109421c38da21d', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-special-chatni', name: 'Special Chatni', category: 'dosa', price: 40, desc: '', img: 'Dosa/9.25.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109436c38da4ea', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-extra-masala', name: 'Extra Masala', category: 'dosa', price: 20, desc: '', img: 'Dosa/9.26.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109449c38da6ce', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'dosa-extra-butter', name: 'Extra Butter', category: 'dosa', price: 20, desc: '', img: 'Dosa/9.27.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142109459c38da932', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },

  // ---------------- Uttapam ----------------
  { id: 'uttapam-special-masala-onion-utt', name: 'Special Masala Onion Uttapam', category: 'uttapam', price: 200, desc: '', img: 'Uttapam/10.1.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111131c38dae2a', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'uttapam-onion-masala-uttapam', name: 'Onion Masala Uttapam', category: 'uttapam', price: 150, desc: '', img: 'Uttapam/10.2.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111143c38da775', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'uttapam-onion-uttapam', name: 'Onion Uttapam', category: 'uttapam', price: 130, desc: '', img: 'Uttapam/10.3.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111150c38da860', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'uttapam-butter-onion-uttapam', name: 'Butter Onion Uttapam', category: 'uttapam', price: 150, desc: '', img: 'Uttapam/10.4.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111166c38da23b', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'uttapam-tomato-uttapam', name: 'Tomato Uttapam', category: 'uttapam', price: 140, desc: '', img: 'Uttapam/10.5.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111177c38da285', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'uttapam-vegetable-uttapam', name: 'Vegetable Uttapam', category: 'uttapam', price: 150, desc: '', img: 'Uttapam/10.6.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111185c38da83b', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'uttapam-coconut-uttapam', name: 'Coconut Uttapam', category: 'uttapam', price: 150, desc: '', img: 'Uttapam/10.7.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111194c38da39a', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'uttapam-sada-uttapam', name: 'Sada Uttapam', category: 'uttapam', price: 120, desc: '', img: 'Uttapam/10.8.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111204c38daf67', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },

  // ---------------- Chinese ----------------
  { id: 'chinese-mix-fried-rice', name: 'Mix Fried Rice', category: 'chinese', price: 250, desc: '', img: 'Chinese/11.1.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111238c38dae10', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-vegetable-fried-rice', name: 'Vegetable Fried Rice', category: 'chinese', price: 200, desc: '', img: 'Chinese/11.2.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111275c38da7ee', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-vegetable-chowmein', name: 'Vegetable Chowmein', category: 'chinese', price: 190, desc: '', img: 'Chinese/11.3.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111293c38dafa4', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-mix-chowmein', name: 'Mix Chowmein', category: 'chinese', price: 220, desc: '', img: 'Chinese/11.4.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111360c38dac72', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-vegetable-fried-chopsey', name: 'Vegetable Fried Chopsey', category: 'chinese', price: 210, desc: '', img: 'Chinese/11.5.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111270c38da0c3', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-paneer-chowmein', name: 'Paneer Chowmein', category: 'chinese', price: 240, desc: '', img: 'Chinese/11.6.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111406c38daec1', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-baby-corn-chilly', name: 'Baby Corn Chilly', category: 'chinese', price: 300, desc: '', img: 'Chinese/11.7.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111417c38da708', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-veg-hakka-chowmein', name: 'Veg Hakka Chowmein', category: 'chinese', price: 210, desc: '', img: 'Chinese/11.8.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111432c38dac4d', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-mushroom-chilly', name: 'Mushroom Chilly', category: 'chinese', price: 300, desc: '', img: 'Chinese/11.9.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111450c38da2e8', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-paneer-chilly', name: 'Paneer Chilly', category: 'chinese', price: 270, desc: '', img: 'Chinese/11.10.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111465c38dac1d', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-veg-mix-chopsey', name: 'Veg Mix Chopsey', category: 'chinese', price: 210, desc: '', img: 'Chinese/11.11.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111475c38dae1c', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-sweet-sour-paneer', name: 'Sweet & Sour Paneer', category: 'chinese', price: 250, desc: '', img: 'Chinese/11.12.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111503c38da743', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-garlic-paneer', name: 'Garlic Paneer', category: 'chinese', price: 260, desc: '', img: 'Chinese/11.13.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111516c38da26e', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-vegetable-munchurian', name: 'Vegetable Munchurian', category: 'chinese', price: 220, desc: '', img: 'Chinese/11.14.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111535c38da48c', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-vegetable-chilly', name: 'Vegetable Chilly', category: 'chinese', price: 210, desc: '', img: 'Chinese/11.15.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111549c38da89c', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-chilly-potato', name: 'Chilly Potato', category: 'chinese', price: 200, desc: '', img: 'Chinese/11.16.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111561c38da4df', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-garlic-potato', name: 'Garlic Potato', category: 'chinese', price: 190, desc: '', img: 'Chinese/11.17.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111584c38dad8d', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-vegetable-sweet-sour', name: 'Vegetable Sweet & Sour', category: 'chinese', price: 190, desc: '', img: 'Chinese/11.18.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111600c38da6dc', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-vegetable-garlic', name: 'Vegetable Garlic', category: 'chinese', price: 190, desc: '', img: 'Chinese/11.19.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111610c38da539', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-paneer-65', name: 'Paneer 65', category: 'chinese', price: 330, desc: '', img: 'Chinese/11.20.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111619c38dac0e', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-banana-65', name: 'Banana 65', category: 'chinese', price: 280, desc: '', img: 'Chinese/11.21.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111634c38da3df', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-veg-mangoliam', name: 'Veg Mangoliam', category: 'chinese', price: 260, desc: '', img: 'Chinese/11.22.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111653c38daa31', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-mushroom-canapes', name: 'Mushroom Canapes', category: 'chinese', price: 280, desc: '', img: 'Chinese/11.23.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111665c38dacd0', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'chinese-paneer-singhapuri', name: 'Paneer Singhapuri', category: 'chinese', price: 300, desc: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWQEUDcfc0cc-89edMlCjJM_CxHV1YozmPmQ9I3IOCqi8DtyJZ3wM3VmE&s=10', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },

  // ---------------- Snacks ----------------
  { id: 'snacks-chana-bhatoora', name: 'Chana Bhatoora', category: 'snacks', price: 150, desc: '', img: 'Snacks/12.1.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111690c38daf07', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'snacks-bhatoora', name: 'Bhatoora', category: 'snacks', price: 50, desc: '', img: 'Snacks/12.2.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111706c38daf80', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'snacks-veg-burger', name: 'Veg. Burger', category: 'snacks', price: 110, desc: '', img: 'Snacks/12.3.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111715c38daf7e', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'snacks-pav-bhaji', name: 'Pav Bhaji', category: 'snacks', price: 120, desc: '', img: 'Snacks/12.4.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142080069c38da753', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'snacks-extra-bun', name: 'Extra Bun', category: 'snacks', price: 50, desc: '', img: 'Snacks/12.5.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142111732c38da3bf', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },

  // ---------------- Desserts ----------------
  { id: 'desserts-vanila-icecream', name: 'Vanila Icecream', category: 'desserts', price: 60, desc: '', img: 'Desserts/13.1.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'desserts-starwberry-icecream', name: 'Starwberry Icecream', category: 'desserts', price: 60, desc: '', img: 'Desserts/13.2.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'desserts-chocolate-icecream', name: 'Chocolate Icecream', category: 'desserts', price: 80, desc: '', img: 'Desserts/13.3.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'desserts-butter-scotch-icecream', name: 'Butter Scotch Icecream', category: 'desserts', price: 80, desc: '', img: 'Desserts/13.4.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'desserts-blind-love-icecream', name: 'Blind Love Icecream', category: 'desserts', price: 80, desc: '', img: 'Desserts/13.5.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'desserts-kesar-pista-icecream', name: 'Kesar Pista Icecream', category: 'desserts', price: 80, desc: '', img: 'Desserts/13.6.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'desserts-tooti-fruitti-icecream', name: 'Tooti Fruitti Icecream', category: 'desserts', price: 115, desc: '', img: 'Desserts/13.7.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'desserts-crushed-pineapple-ice-cr', name: 'Crushed Pineapple Ice-Cream', category: 'desserts', price: 120, desc: '', img: 'Desserts/13.8.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'desserts-fruit-cream-salad-icecre', name: 'Fruit Cream Salad Icecream', category: 'desserts', price: 120, desc: '', img: 'Desserts/13.9.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'desserts-special-tooti-fruitti-ic', name: 'Special Tooti Fruitti Icecream', category: 'desserts', price: 80, desc: '', img: 'Desserts/13.10.jpg', zomato: 'https://zomato.onelink.me/xqzv/i8a44abj', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'desserts-rasmalai-per-piece', name: 'Rasmalai (Per Piece)', category: 'desserts', price: 60, desc: '', img: 'Desserts/13.11.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142079919c38da21e', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'desserts-gulabjamun-per-piece', name: 'Gulabjamun (Per Piece)', category: 'desserts', price: 30, desc: '', img: 'Desserts/13.12.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142079946c38da909', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'desserts-coffee', name: 'Coffee', category: 'desserts', price: 60, desc: '', img: 'Desserts/13.13.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142079873c38dab7f', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },
  { id: 'desserts-tea-cup', name: 'Tea Cup', category: 'desserts', price: 40, desc: '', img: 'Desserts/13.14.jpg', zomato: 'https://link.zomato.com/xqzv/dshare?id=142079854c38dae21', swiggy: 'https://www.swiggy.com/menu/722393?source=sharing' },

];

const CATEGORY_LABELS = {
  mocktail: 'Mocktail',
  starters: 'Starters',
  soup: 'Soup',
  main: 'Main Course',
  breads: 'Breads',
  rice: 'Rice',
  others: 'Others',
  southindian: 'South Indian',
  dosa: 'Dosa',
  uttapam: 'Uttapam',
  chinese: 'Chinese',
  snacks: 'Snacks',
  desserts: 'Desserts',
};

const PLACEHOLDER_IMG = 'images/menu/placeholder.jpg';

document.addEventListener('DOMContentLoaded', () => {

  const grids = {};
  Object.keys(CATEGORY_LABELS).forEach(cat => {
    grids[cat] = document.getElementById(`grid-${cat}`);
  });

  /* ---------- Build cards ---------- */
  function cardHTML(item) {
    const descHTML = item.desc ? `<p>${item.desc}</p>` : '';
    return `
      <article class="menu-card" data-name="${item.name.toLowerCase()}" data-desc="${(item.desc || '').toLowerCase()}" data-cat="${item.category}">
        <div class="menu-card-img-wrap">
          <img
            src="${item.img}"
            alt="${item.name}"
            class="menu-card-img"
            loading="lazy"
            onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG}';"
          >
        </div>
        <div class="menu-card-body">
          <div class="menu-card-head">
            <div class="menu-card-name">
              <span class="veg-dot" aria-hidden="true"></span>
              <h3>${item.name}</h3>
            </div>
            <span class="menu-price">&#8377; ${item.price}</span>
          </div>
          ${descHTML}
          <div class="menu-card-actions">
            <a href="${item.zomato}" target="_blank" rel="noopener" class="mini-order zomato">Zomato</a>
            <a href="${item.swiggy}" target="_blank" rel="noopener" class="mini-order swiggy">Swiggy</a>
          </div>
        </div>
      </article>
    `;
  }

  Object.keys(CATEGORY_LABELS).forEach(cat => {
    const items = ITEMS.filter(i => i.category === cat);
    if (grids[cat]) grids[cat].innerHTML = items.map(cardHTML).join('');
    const countEl = document.getElementById(`count-${cat}`);
    const sectionCountEl = document.getElementById(`section-count-${cat}`);
    if (countEl) countEl.textContent = items.length;
    if (sectionCountEl) sectionCountEl.textContent = `${items.length} items`;
  });

  const allCountEl = document.getElementById('count-all');
  if (allCountEl) allCountEl.textContent = ITEMS.length;

  /* ---------- Tab switching ---------- */
  const tabs = document.querySelectorAll('.cat-tab');
  const sections = document.querySelectorAll('.cat-section');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const cat = tab.dataset.cat;
      sections.forEach(sec => {
        const show = cat === 'all' || sec.dataset.section === cat;
        sec.classList.toggle('visible', show);
      });

      const searchInput = document.getElementById('menuSearch');
      if (searchInput && searchInput.value) {
        searchInput.value = '';
        filterCards('');
      }
    });
  });

  /* ---------- Search ---------- */
  const searchInput = document.getElementById('menuSearch');
  const noResults = document.getElementById('noResults');

  function filterCards(query) {
    const q = query.trim().toLowerCase();
    let anyVisibleOverall = false;

    if (q) {
      sections.forEach(sec => sec.classList.add('visible'));
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      document.querySelector('.cat-tab[data-cat="all"]')?.classList.add('active');
    }

    sections.forEach(sec => {
      const cards = sec.querySelectorAll('.menu-card');
      let visibleInSection = 0;
      cards.forEach(card => {
        const match = !q || card.dataset.name.includes(q) || card.dataset.desc.includes(q);
        card.style.display = match ? '' : 'none';
        if (match) { visibleInSection++; anyVisibleOverall = true; }
      });
      if (q) sec.style.display = visibleInSection > 0 ? '' : 'none';
      else sec.style.display = '';
    });

    if (noResults) noResults.classList.toggle('show', q.length > 0 && !anyVisibleOverall);
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => filterCards(e.target.value));
  }

});
