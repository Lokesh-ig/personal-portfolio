const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const portfolioUrl = 'https://personal-portfolio-ten-mu-19.vercel.app';
const publicDir = path.join(__dirname, '../public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

async function generateQRCodes() {
  console.log(`Generating QR code for: ${portfolioUrl}`);

  // 1. High-Resolution PNG (600x600) with High error correction
  const pngPath = path.join(publicDir, 'portfolio-qr.png');
  await QRCode.toFile(pngPath, portfolioUrl, {
    errorCorrectionLevel: 'H',
    type: 'png',
    margin: 2,
    width: 600,
    color: {
      dark: '#0a0f1d', // Deep slate navy for high contrast & reliable mobile scanning
      light: '#ffffff'  // Clean white background for 100% camera scanner compatibility
    }
  });
  console.log(`Saved PNG: ${pngPath}`);

  // 2. Scalable Vector SVG
  const svgPath = path.join(publicDir, 'portfolio-qr.svg');
  await QRCode.toFile(svgPath, portfolioUrl, {
    errorCorrectionLevel: 'H',
    type: 'svg',
    margin: 2,
    color: {
      dark: '#0a0f1d',
      light: '#ffffff'
    }
  });
  console.log(`Saved SVG: ${svgPath}`);

  // 3. Cyber/Cyan Themed SVG for dark mode displays (optional alternative)
  const darkThemeSvgPath = path.join(publicDir, 'portfolio-qr-dark.svg');
  await QRCode.toFile(darkThemeSvgPath, portfolioUrl, {
    errorCorrectionLevel: 'H',
    type: 'svg',
    margin: 2,
    color: {
      dark: '#22d3ee', // Cyan modules
      light: '#0b1220' // Dark navy background
    }
  });
  console.log(`Saved Dark SVG: ${darkThemeSvgPath}`);

  console.log('QR Code generation completed successfully!');
}

generateQRCodes().catch((err) => {
  console.error('Error generating QR codes:', err);
  process.exit(1);
});
