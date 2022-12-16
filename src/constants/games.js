const GAMES = [
  {
    name: 'AU2 Mobile',
    slug: 'au2-mobile',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1566905119-icon-1559273401-icon-au2.png',
  },
  {
    name: 'Bleach Kristal',
    slug: 'bleach-kristal',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1553831479-icon-1553593202-icon-src bleach.png',
  },
  {
    name: 'Boyaa Domino Qiuqiu Koin',
    slug: 'boyaa-domino-qiuqiu-koin',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1565854756-icon-domino qiuqiu 99 icon300X300.png',
  },
  {
    name: 'Boyaa Poker Texas',
    slug: 'boyaa-poker-texas',
    src: 'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1571976544-icon-300.png',
  },
  {
    name: 'Call of Duty',
    slug: 'call-of-duty',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1570718795-icon-1569988040-icon-Copy of 1 Unipin 300x300.jpg',
  },
  {
    name: 'Capsa City',
    slug: 'capsa-city',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1573626262-icon-be78a82b-0ccf-43b1-858e-d2f3e5f3dc33.jpg',
  },
  {
    name: 'Capsa Susun Koin',
    slug: 'capsa-susun-koin',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1565854687-icon-Capsa susun icon 300X300.png',
  },
  {
    name: 'Crossing Void',
    slug: 'crossing-void',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1583122067-icon-WhatsApp Image 2020-02-27 at 14.09.26.jpeg',
  },
  {
    name: 'Devil Hunter',
    slug: 'devil-hunter',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1576812163-icon-devilhunter.png',
  },
  {
    name: 'Dragon Brawlers',
    slug: 'dragon-brawlers',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1588911637-icon-WeChat Image_20200508104803.png',
  },
  {
    name: 'Dragon Raja Fund',
    slug: 'dragon-raja-fund',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1605550070-icon-heavensaga.jpg',
  },
  {
    name: 'Eternal City Gem',
    slug: 'eternal-city-gem',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1557992187-icon-eternal-city-src.png',
  },
  {
    name: 'Eternal City Monthly Card',
    slug: 'eternal-city-monthly-card',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1557992480-icon-eternal-city-src.png',
  },
  {
    name: 'Free Fire',
    slug: 'free-fire',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1559296704-icon-free-fire-remark.jpg',
  },
  {
    name: 'Garena Arena of Valor Vouchers',
    slug: 'garena-arena-of-valor-vouchers',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1564563818-icon-1562124639-icon-AOV src 300x300.jpg',
  },
  {
    name: 'Higgs Domino Coins',
    slug: 'higgs-domino-coins',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1564458967-icon-1563952412-icon-higg.png',
  },
  {
    name: 'King of Kings Coupons',
    slug: 'king-of-kings-coupons',
    src: 'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1573614412-icon-KOK.png',
  },
  {
    name: 'King of Kings Funds',
    slug: 'king-of-kings-funds',
    src: 'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1573614393-icon-KOK.png',
  },
  {
    name: 'King of Kings VIP',
    slug: 'king-of-kings-vip',
    src: 'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1573614367-icon-KOK.png',
  },
  {
    name: 'Knights of Valour',
    slug: 'knights-of-valour',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1595930073-icon-kov-src.png',
  },
  {
    name: 'Laplace M Spirals',
    slug: 'laplace-m-spirals',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1558923942-icon-1557979854-icon-1556523733-icon-laplace.jpg',
  },
  {
    name: 'Lokapala Citrine',
    slug: 'lokapala-citrine',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1598850131-icon-lokapala.png',
  },
  {
    name: 'Lords Mobile',
    slug: 'lords-mobile',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1573638611-icon-icon.png',
  },
  {
    name: 'Love Nikki Diamond',
    slug: 'love-nikki-diamond',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1565327766-icon-1557980059-icon-1548927653-icon-Icon-1024.png',
  },
  {
    name: 'Manga Toon Coins',
    slug: 'manga-toon-coins',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1566274292-icon-1562052922-icon-mangatoon-new.png',
  },
  {
    name: 'Marvel Super War',
    slug: 'marvel-super-war',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1579518101-icon-marvel-min.jpg',
  },
  {
    name: 'Mobile Legend Spark Package',
    slug: 'mobile-legend-spark-package',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1565342450-icon-1548659712-icon-Mobile legend 300x300 px.png',
  },
  {
    name: 'Mobile Legends Diamonds',
    slug: 'mobile-legends-diamonds',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1565343343-icon-1548659712-icon-Mobile legend 300x300 px.png',
  },
  {
    name: 'Mobile Legends Starlight Member',
    slug: 'mobile-legends-starlight-member',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1565343258-icon-1548659712-icon-Mobile legend 300x300 px.png',
  },
  {
    name: 'Mola TV Subscription Package',
    slug: 'mola-tv-subscription-package',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1613033470-icon-molatv.jpg',
  },
  {
    name: 'MU 2 Origin',
    slug: 'mu-2-origin',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1586751688-icon-unnamed.jpg',
  },
  {
    name: 'Omega Legends',
    slug: 'omega-legends',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1612925116-icon-WhatsApp Image 2021-02-08 at 10.22.53.jpeg',
  },
  {
    name: 'One Punch Man',
    slug: 'one-punch-man',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1598944813-icon-images (1).jpg',
  },
  {
    name: 'Point Blank Cash',
    slug: 'point-blank-cash',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1573616951-icon-1564728125-icon-pb.png',
  },
  {
    name: 'Ragnarok Big Cat Coin',
    slug: 'ragnarok-big-cat-coin',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1564563688-icon-1557979493-icon-1542812484-icon-1542778565-icon-1541579008-icon-Icon-300x300.jpg',
  },
  {
    name: 'Ragnarok Zeny',
    slug: 'ragnarok-zeny',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1564563688-icon-1557979493-icon-1542812484-icon-1542778565-icon-1541579008-icon-Icon-300x300.jpg',
  },
  {
    name: 'Ride Out Heroes Privilege',
    slug: 'ride-out-heroes-privilege',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1574649349-icon-ROH_src (1).jpg',
  },
  {
    name: 'Ride Out Heroes Tokens',
    slug: 'ride-out-heroes-tokens',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1574649271-icon-ROH_src (1).jpg',
  },
  {
    name: 'Saint Seiya',
    slug: 'saint-seiya',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1560508508-icon-1559204633-icon-ss-youzu.png',
  },
  {
    name: 'Samurai Era: Rise of Empires',
    slug: 'samurai-era-rise-of-empires',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1594890968-icon-DCSID-iconapp-256x256.png',
  },
  {
    name: 'Snail Games',
    slug: 'snail-games',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1608113120-icon-1566291326-icon-snail-games-src.png',
  },
  {
    name: 'Speed Drifters',
    slug: 'speed-drifters',
    src:
      'https://dev-backoffice.unipin.com/images/icon_direct_topup_games/1559276140-icon-speed-drifters-remark.jpg',
  },
];
export default GAMES;

export const filteredGames = GAMES.filter(({ src }) => src && src !== '');
