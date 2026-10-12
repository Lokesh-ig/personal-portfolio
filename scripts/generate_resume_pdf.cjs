const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../public');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'Lokesh_Resume.pdf');
const legacyOutputPath = path.join(outputDir, 'Lokesh_P_Resume.pdf');
const doc = new PDFDocument({
  size: 'A4', // 595.28 x 841.89
  margin: 36, // clean margins
  info: {
    Title: 'Lokesh - Resume',
    Author: 'Lokesh P'
  }
});

const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

const darkText = '#111827';
const bodyText = '#1f2937';
const grayText = '#4b5563';
const linkBlue = '#1d4ed8';

const leftMargin = 36;
const rightMargin = 559.28; // 595.28 - 36
const contentWidth = rightMargin - leftMargin;

// --- HEADER ---
doc.fillColor(darkText).fontSize(20).font('Helvetica-Bold').text('LOKESH P', leftMargin, 34, {
  align: 'center',
  width: contentWidth
});
doc.moveDown(0.25);

// Contact row with clickable links
const contactY = doc.y;
doc.fontSize(8.8).font('Helvetica');

// Centered text with links
const contactLine = '+91 93420 30354 | lokesh2005lokesh15@gmail.com | linkedin.com/in/lokesh-p-dev | Lokesh-ig (Lokesh P)';
const totalTextWidth = doc.widthOfString(contactLine);
let curX = leftMargin + (contentWidth - totalTextWidth) / 2;

// Phone
doc.fillColor(darkText).text('+91 93420 30354 | ', curX, contactY, { continued: false, lineBreak: false });
curX += doc.widthOfString('+91 93420 30354 | ');

// Email
doc.fillColor(darkText).text('lokesh2005lokesh15@gmail.com', curX, contactY, {
  link: 'mailto:lokesh2005lokesh15@gmail.com',
  continued: false,
  lineBreak: false
});
curX += doc.widthOfString('lokesh2005lokesh15@gmail.com');

doc.fillColor(darkText).text(' | ', curX, contactY, { continued: false, lineBreak: false });
curX += doc.widthOfString(' | ');

// LinkedIn
doc.fillColor(linkBlue).text('linkedin.com/in/lokesh-p-dev', curX, contactY, {
  link: 'https://linkedin.com/in/lokesh-p-dev',
  underline: true,
  continued: false,
  lineBreak: false
});
curX += doc.widthOfString('linkedin.com/in/lokesh-p-dev');

doc.fillColor(darkText).text(' | ', curX, contactY, { continued: false, lineBreak: false });
curX += doc.widthOfString(' | ');

// GitHub
doc.fillColor(linkBlue).text('Lokesh-ig (Lokesh P)', curX, contactY, {
  link: 'https://github.com/Lokesh-ig',
  underline: true,
  continued: false,
  lineBreak: false
});

doc.y = contactY + 14;
doc.moveDown(0.3);

function drawSectionHeader(title) {
  doc.fillColor(darkText).fontSize(10.5).font('Helvetica-Bold').text(title.toUpperCase(), leftMargin, doc.y);
  const lineY = doc.y + 2;
  doc.strokeColor(darkText).lineWidth(0.9).moveTo(leftMargin, lineY).lineTo(rightMargin, lineY).stroke();
  doc.y = lineY + 6;
}

// --- PROFESSIONAL SUMMARY ---
drawSectionHeader('PROFESSIONAL SUMMARY');
doc.fillColor(bodyText).fontSize(9).font('Helvetica').text(
  'Computer Science and Engineering graduate with hands-on experience in AI-integrated full-stack development and machine learning techniques, including NLP, BERT, and Scikit-learn. Seeking an entry-level Software Developer role to apply my technical skills and contribute to building efficient, scalable applications.',
  leftMargin,
  doc.y,
  { width: contentWidth, align: 'left', lineGap: 2 }
);
doc.y += 10;

// --- INTERNSHIP ---
drawSectionHeader('INTERNSHIP');

// Internship 1: Nova Spark Hub
const int1Y = doc.y;
doc.fillColor(darkText).fontSize(9.5).font('Helvetica-Bold').text('Full Stack Development Intern — Nova Spark Hub', leftMargin, int1Y);
doc.fillColor(darkText).fontSize(9).font('Helvetica').text('Jul 2025 – Aug 2025', leftMargin, int1Y, {
  align: 'right',
  width: contentWidth
});
doc.y = int1Y + 13;

doc.fillColor(bodyText).fontSize(9).font('Helvetica');
doc.text('•  Contributed to full-stack web development tasks, gaining hands-on experience with frontend and backend integration.', leftMargin + 6, doc.y, { width: contentWidth - 6, lineGap: 1.8 });
doc.text('•  Built and tested responsive UI components as part of a collaborative development team.', leftMargin + 6, doc.y, { width: contentWidth - 6, lineGap: 1.8 });
doc.y += 6;

// Internship 2: CodeAlpha
const int2Y = doc.y;
doc.fillColor(darkText).fontSize(9.5).font('Helvetica-Bold').text('Artificial Intelligence Intern — CodeAlpha', leftMargin, int2Y);
doc.fillColor(darkText).fontSize(9).font('Helvetica').text('Aug 2026 – Sep 2026', leftMargin, int2Y, {
  align: 'right',
  width: contentWidth
});
doc.y = int2Y + 13;

doc.fillColor(bodyText).fontSize(9).font('Helvetica');
doc.text('•  Developed two AI-based applications: a Banking FAQ Chatbot using NLP, TF-IDF, Cosine Similarity, and Flask, a Real-Time Object Detection & Tracking System using YOLO, OpenCV, and Deep SORT.', leftMargin + 6, doc.y, { width: contentWidth - 6, lineGap: 1.8 });
doc.text('•  Gained practical experience in python, Machine Learning, Natural Language Processing, Computer Vision, API development, and real-world AI application development.', leftMargin + 6, doc.y, { width: contentWidth - 6, lineGap: 1.8 });
doc.y += 10;

// --- TECHNICAL SKILLS ---
drawSectionHeader('TECHNICAL SKILLS');
doc.fillColor(bodyText).fontSize(9).font('Helvetica');
doc.text('•  Programming Languages: Python, SQL, JavaScript', leftMargin + 6, doc.y, { lineGap: 2 });
doc.text('•  Web Development: HTML5, CSS3, Django, REST APIs', leftMargin + 6, doc.y, { lineGap: 2 });
doc.text('•  Machine Learning & NLP: BERT, Scikit-learn, Text Classification, Model Training', leftMargin + 6, doc.y, { lineGap: 2 });
doc.text('•  Concepts: Data Structures, Object-Oriented Programming, DBMS', leftMargin + 6, doc.y, { lineGap: 2 });
doc.y += 10;

// --- PROJECTS ---
drawSectionHeader('PROJECTS');

// Project 1
const prj1Y = doc.y;
doc.fillColor(darkText).fontSize(9.5).font('Helvetica-Bold').text('Employee Onboarding & Document Checklist Automation', leftMargin, prj1Y);
doc.fillColor(darkText).fontSize(9).font('Helvetica').text('2026', leftMargin, prj1Y, {
  align: 'right',
  width: contentWidth
});
doc.y = prj1Y + 13;

doc.fillColor(bodyText).fontSize(9).font('Helvetica');
doc.text('•  Developed an Employee Onboarding and Document Checklist system using Django, React, and PostgreSQL.', leftMargin + 6, doc.y, { width: contentWidth - 6, lineGap: 1.8 });
doc.text('•  Built features for employee onboarding, document submission, checklist management, and status tracking.', leftMargin + 6, doc.y, { width: contentWidth - 6, lineGap: 1.8 });
doc.text('•  Integrated REST APIs between React and Django to streamline and automate employee onboarding process.', leftMargin + 6, doc.y, { width: contentWidth - 6, lineGap: 1.8 });
doc.y += 6;

// Project 2
const prj2Y = doc.y;
doc.fillColor(darkText).fontSize(9.5).font('Helvetica-Bold').text('ToxiGuard — AI-Based Comment Moderation System', leftMargin, prj2Y);
doc.fillColor(darkText).fontSize(9).font('Helvetica').text('2026', leftMargin, prj2Y, {
  align: 'right',
  width: contentWidth
});
doc.y = prj2Y + 13;

doc.fillColor(bodyText).fontSize(9).font('Helvetica');
doc.text('•  Built a real-time comment moderation system using React for frontend and Django/Flask for backend.', leftMargin + 6, doc.y, { width: contentWidth - 6, lineGap: 1.8 });
doc.text('•  Implemented a BERT-based model to classify comments into multiple toxicity categories.', leftMargin + 6, doc.y, { width: contentWidth - 6, lineGap: 1.8 });
doc.text('•  Designed an admin dashboard for reviewing flagged comments alongside the core moderation interface.', leftMargin + 6, doc.y, { width: contentWidth - 6, lineGap: 1.8 });
doc.text('•  Applied threshold-based decision logic to automatically allow, flag, or delete toxic comments, reducing manual moderation effort.', leftMargin + 6, doc.y, { width: contentWidth - 6, lineGap: 1.8 });
doc.y += 10;

// --- CERTIFICATIONS ---
drawSectionHeader('CERTIFICATIONS');
doc.fillColor(bodyText).fontSize(9).font('Helvetica');
doc.text('•  Python Programming Internship Certificate – CodSoft', leftMargin + 6, doc.y, { lineGap: 2 });
doc.text('•  Artificial Intelligence Internship Certificate – CodeAlpha', leftMargin + 6, doc.y, { lineGap: 2 });
doc.text('•  Software Development Job Simulation – Datacom (Issued by Forage)', leftMargin + 6, doc.y, { lineGap: 2 });
doc.text('•  Full Stack Development Internship Certificate – Nova Spark Hub', leftMargin + 6, doc.y, { lineGap: 2 });
doc.y += 10;

// --- EDUCATION ---
drawSectionHeader('EDUCATION');
const eduY = doc.y;
doc.fillColor(darkText).fontSize(9.5).font('Helvetica-Bold').text('Alpha College of Engineering — B.E., Computer Science and Engineering', leftMargin, eduY);
doc.fillColor(darkText).fontSize(9).font('Helvetica').text('2022 – 2026 | Chennai', leftMargin, eduY, {
  align: 'right',
  width: contentWidth
});
doc.y = eduY + 13;
doc.fillColor(darkText).fontSize(9).font('Helvetica-Bold').text('CGPA: 8.0 / 10', leftMargin, doc.y);
doc.y += 10;

// --- PORTFOLIO ---
drawSectionHeader('PORTFOLIO');
doc.fillColor(bodyText).fontSize(9).font('Helvetica').text('•  ', leftMargin + 6, doc.y, { continued: true });
doc.fillColor(linkBlue).text('personal-portfolio-ten-mu-19.vercel.app', {
  link: 'https://personal-portfolio-ten-mu-19.vercel.app',
  underline: true
});

doc.end();

stream.on('finish', () => {
  fs.copyFileSync(outputPath, legacyOutputPath);
  console.log('Successfully generated Lokesh_Resume.pdf (and mirrored to Lokesh_P_Resume.pdf)');
});
