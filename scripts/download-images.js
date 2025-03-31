const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://img.crazygames.com/games/bloxd-io/cover-1686924066155.png',
    filename: 'bloxd-io.jpg'
  },
  {
    url: 'https://img.crazygames.com/games/draw-climber/cover-1686924066155.png',
    filename: 'draw-climber.jpg'
  }
];

const downloadImage = (url, filename) => {
  const filepath = path.join(__dirname, '../public/games', filename);
  const file = fs.createWriteStream(filepath);

  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded: ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(filepath, () => {});
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

// 创建目录（如果不存在）
const dir = path.join(__dirname, '../public/games');
if (!fs.existsSync(dir)){
  fs.mkdirSync(dir, { recursive: true });
}

// 下载所有图片
images.forEach(img => {
  downloadImage(img.url, img.filename);
}); 