const VOUCHERS = [
  {
    name: 'Battle Net',
    slug: 'battle-net',
    src:
      'https://dev-backoffice.unipin.com/images/voucher_icons/1595531458-icon-1575009070-icon-1571815307-icon-1557980276-icon-1531122908-icon-batle.net-18.jpg',
  },
  {
    name: 'Dota Auto Chess',
    slug: 'dota-auto-chess',
    src:
      'https://dev-backoffice.unipin.com/images/voucher_icons/1595529159-icon-1566967551-icon-1557980566-icon-1556877432-icon-MA-190326-2_UniPin_AutoChess_tournamet-03.png',
  },
  {
    name: 'Electronic Arts (EA)',
    slug: 'electronic-arts-ea',
    src:
      'https://dev-backoffice.unipin.com/images/voucher_icons/1603773941-icon-1575009015-icon-1571816425-icon-1567675158-icon-image_2019_09_05T09_05_26_650Z.jpg',
  },
  {
    name: 'Game On',
    slug: 'game-on',
    src:
      'https://dev-backoffice.unipin.com/images/voucher_icons/1564563065-icon-1561543269-icon-6c91952a-f3b0-4f9a-bf03-d10fe82597f6.jpg',
  },
  { name: 'Garena ID', slug: 'garena-id', src: '' },
  {
    name: 'GEMCSOOL',
    slug: 'gemcsool',
    src:
      'https://dev-backoffice.unipin.com/images/voucher_icons/1564563043-icon-1557980297-icon-1531706736-icon-gemscool-21.png',
  },
  { name: 'Genshin Impact', slug: 'genshin-impact', src: null },
  {
    name: 'GoCash Game Card',
    slug: 'gocash-game-card',
    src:
      'https://dev-backoffice.unipin.com/images/voucher_icons/1595527630-icon-1575010688-icon-1571816644-icon-1535442436-icon-icon.jpg',
  },
  {
    name: 'Google Play IDR',
    slug: 'google-play-idr',
    src:
      'https://dev-backoffice.unipin.com/images/voucher_icons/1587617810-icon-1571816125-icon-1557980361-icon-1533713276-icon-google-play-14.jpg',
  },
  {
    name: 'iTunes',
    slug: 'itunes',
    src:
      'https://dev-backoffice.unipin.com/images/voucher_icons/1583392711-icon-1575009417-icon-1571816357-icon-1557980562-icon-1548747944-icon-1531796877-icon-itunes.jpg',
  },
  {
    name: 'Minecraft',
    slug: 'minecraft',
    src:
      'https://dev-backoffice.unipin.com/images/voucher_icons/1576494616-icon-1575009242-icon-1571816156-icon-1557980392-icon-1534130064-icon-MA-180622-4_Game_src_300x300-70.jpg',
  },
  {
    name: 'Nexon Karma',
    slug: 'nexon-karma',
    src:
      'https://dev-backoffice.unipin.com/images/voucher_icons/1595529482-icon-1557983158-icon-1545015000-icon-MA-180622-4_Game_src_300x300-72.png',
  },
  {
    name: 'Nintendo',
    slug: 'nintendo',
    src:
      'https://dev-backoffice.unipin.com/images/voucher_icons/1589518516-icon-1575009318-icon-1571816379-icon-1558068127-icon-1534130546-icon-MA-180622-4_Game_src_300x300-73.jpg',
  },
  { name: 'PUBG', slug: 'pubg', src: '' },
  { name: 'PUBG Mobile', slug: 'pubg-mobile', src: '' },
  { name: 'RAZER GOLD', slug: 'razer-gold', src: null },
  {
    name: 'Roblox',
    slug: 'roblox',
    src:
      'https://dev-backoffice.unipin.com/images/voucher_icons/1576494656-icon-1572260470-icon-1571816393-icon-1560327152-icon-1527952060-icon-icon-2-09.jpg',
  },
  { name: 'SI Gems', slug: 'si-gems', src: 'https://i.ibb.co/w7zdFW4/si-gems.png' },
  { name: 'Steam IDR', slug: 'steam-idr', src: '' },
  { name: 'Steam USD', slug: 'steam-usd', src: '' },
  {
    name: 'UniPin Gift Card',
    slug: 'unipin-gift-card',
    src: 'https://dev-backoffice.unipin.com/images/voucher_icons/1574913470-icon-unipin.jpg',
  },
  { name: 'UniPin Gift Card ID', slug: 'unipin-gift-card-id', src: '' },
  {
    name: 'Xbox Live (US)',
    slug: 'xbox-live-us',
    src:
      'https://dev-backoffice.unipin.com/images/voucher_icons/1603773361-icon-1557982906-icon-1544072077-icon-MA-180622-4_Game_src_300x300-75.png',
  },
];
export default VOUCHERS;

export const filteredVouchers = VOUCHERS.filter(({ src }) => src && src !== '');
