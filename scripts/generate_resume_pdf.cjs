const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../public');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'Lokesh_P_Resume.pdf');
const doc = new PDFDocument({
  size: 'A4', // 595.28 x 841.89
  margin: 32  // ~0.44 inch margins for perfect full-page fit
});

const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

const navyBlue = '#1e3a8a';
const darkText = '#111827';
const bodyText = '#1f2937';
const grayText = '#4b5563';

const leftMargin = 32;
const rightMargin = 563; // 595.28 - 32
const contentWidth = rightMargin - leftMargin;

// --- HEADER ---
doc.fillColor(navyBlue).fontSize(22).font('Helvetica-Bold').text('LOKESH P', leftMargin, 32, {
  align: 'center',
  width: contentWidth
});
doc.moveDown(0.25);

doc.fillColor(bodyText).fontSize(9).font('Helvetica').text(
  '+91 93420 30354  |  lokesh2005lokesh15@gmail.com  |  linkedin.com/in/lokesh-p-dev',
  leftMargin,
  doc.y,
  { align: 'center', width: contentWidth }
);
doc.moveDown(0.6);

// Header line divider
doc.strokeColor(navyBlue).lineWidth(1.2).moveTo(leftMargin, doc.y).lineTo(rightMargin, doc.y).stroke();
doc.y += 10;

function drawSectionHeader(title) {
  doc.fillColor(navyBlue).fontSize(10.5).font('Helvetica-Bold').text(title.toUpperCase(), leftMargin, doc.y);
  const lineY = doc.y + 3;
  doc.strokeColor(navyBlue).lineWidth(0.8).moveTo(leftMargin, lineY).lineTo(rightMargin, lineY).stroke();
  doc.y = lineY + 7;
}

// --- PROFESSIONAL SUMMARY ---
drawSectionHeader('PROFESSIONAL SUMMARY');
doc.fillColor(bodyText).fontSize(9).font('Helvetica').text(
  'I am a B.E Computer Science and Engineering graduate with hands-on experience in full-stack web development (Django, JavaScript), Python programming, SQL databases, and machine learning / NLP (BERT, Scikit-learn). Looking for an entry-level Software Developer role to design, build, and deploy efficient, scalable, and user-focused applications.',
  leftMargin,
  doc.y,
  { width: contentWidth, align: 'justify', lineGap: 2.5 }
);
doc.y += 12;

// --- INTERNSHIP ---
drawSectionHeader('INTERNSHIP');

// Internship 1
const int1Y = doc.y;
doc.fillColor(darkText).fontSize(9.5).font('Helvetica-Bold').text('Full Stack Development Intern — Nova Spark Hub', leftMargin, int1Y);
doc.fillColor(grayText).fontSize(9).font('Helvetica').text('Jul 2025 – Aug 2025', leftMargin, int1Y, {
  align: 'right',
  width: contentWidth
});
doc.y = int1Y + 13;

doc.fillColor(bodyText).fontSize(9).font('Helvetica');
doc.text('•  Contributed to full-stack web development tasks, gaining hands-on experience with frontend and backend integration.', leftMargin + 8, doc.y, { width: contentWidth - 8, lineGap: 2 });
doc.text('•  Built and tested responsive UI components as part of a collaborative development team.', leftMargin + 8, doc.y, { width: contentWidth - 8, lineGap: 2 });
doc.y += 8;

// Internship 2
const int2Y = doc.y;
doc.fillColor(darkText).fontSize(9.5).font('Helvetica-Bold').text('Artificial Intelligence Intern — CodeAlpha', leftMargin, int2Y);
doc.fillColor(grayText).fontSize(9).font('Helvetica').text('Aug 2026 – Sep 2026', leftMargin, int2Y, {
  align: 'right',
  width: contentWidth
});
doc.y = int2Y + 13;

doc.fillColor(bodyText).fontSize(9).font('Helvetica');
doc.text('•  Developed two AI-based applications: a Banking FAQ Chatbot using NLP, TF-IDF, Cosine Similarity, and Flask, a Real-Time Object Detection & Tracking System using YOLO, OpenCV, and Deep SORT.', leftMargin + 8, doc.y, { width: contentWidth - 8, lineGap: 2 });
doc.text('•  Gained practical experience in python, Machine Learning, Natural Language Processing, Computer Vision, API development, and real-world AI application development.', leftMargin + 8, doc.y, { width: contentWidth - 8, lineGap: 2 });
doc.y += 12;

// --- TECHNICAL SKILLS ---
drawSectionHeader('TECHNICAL SKILLS');
doc.fillColor(bodyText).fontSize(9).font('Helvetica');
doc.text('•  Programming Languages: Python, SQL, JavaScript', leftMargin + 8, doc.y, { lineGap: 2.5 });
doc.text('•  Web Development: HTML5, CSS3, Django, REST APIs', leftMargin + 8, doc.y, { lineGap: 2.5 });
doc.text('•  Machine Learning & NLP: BERT, Scikit-learn, Text Classification, Model Training', leftMargin + 8, doc.y, { lineGap: 2.5 });
doc.text('•  Concepts: Data Structures, Object-Oriented Programming, DBMS', leftMargin + 8, doc.y, { lineGap: 2.5 });
doc.text('•  Tools & Platforms: VS Code, Google Colab, IDLE (Python)', leftMargin + 8, doc.y, { lineGap: 2.5 });
doc.y += 12;

// --- PROJECTS ---
drawSectionHeader('PROJECTS');

// Project 1
const prj1Y = doc.y;
doc.fillColor(darkText).fontSize(9.5).font('Helvetica-Bold').text('Employee Onboarding & Document Checklist Automation', leftMargin, prj1Y);
doc.fillColor(grayText).fontSize(9).font('Helvetica').text('2026', leftMargin, prj1Y, {
  align: 'right',
  width: contentWidth
});
doc.y = prj1Y + 13;

doc.fillColor(bodyText).fontSize(9).font('Helvetica');
doc.text('•  Developed an Employee Onboarding and Document Checklist system using Django, React, and PostgreSQL.', leftMargin + 8, doc.y, { width: contentWidth - 8, lineGap: 2 });
doc.text('•  Built features for employee onboarding, document submission, checklist management, and status tracking.', leftMargin + 8, doc.y, { width: contentWidth - 8, lineGap: 2 });
doc.text('•  Integrated REST APIs between React and Django to streamline and automate employee onboarding process.', leftMargin + 8, doc.y, { width: contentWidth - 8, lineGap: 2 });
doc.y += 8;

// Project 2
const prj2Y = doc.y;
doc.fillColor(darkText).fontSize(9.5).font('Helvetica-Bold').text('ToxiGuard — AI-Based Comment Moderation System', leftMargin, prj2Y);
doc.fillColor(grayText).fontSize(9).font('Helvetica').text('2026', leftMargin, prj2Y, {
  align: 'right',
  width: contentWidth
});
doc.y = prj2Y + 13;

doc.fillColor(bodyText).fontSize(9).font('Helvetica');
doc.text('•  Built a real-time comment moderation system using React for frontend and Django/Flask for backend.', leftMargin + 8, doc.y, { width: contentWidth - 8, lineGap: 2 });
doc.text('•  Implemented a BERT-based model to classify comments into multiple toxicity categories.', leftMargin + 8, doc.y, { width: contentWidth - 8, lineGap: 2 });
doc.text('•  Designed an admin dashboard for reviewing flagged comments alongside the core moderation interface.', leftMargin + 8, doc.y, { width: contentWidth - 8, lineGap: 2 });
doc.text('•  Applied threshold-based decision logic to automatically allow, flag, or delete toxic comments, reducing manual moderation effort.', leftMargin + 8, doc.y, { width: contentWidth - 8, lineGap: 2 });
doc.y += 12;

// --- CERTIFICATIONS ---
drawSectionHeader('CERTIFICATIONS');
doc.fillColor(bodyText).fontSize(9).font('Helvetica');
doc.text('•  Artificial Intelligence Internship Certificate – CodeAlpha', leftMargin + 8, doc.y, { lineGap: 2.5 });
doc.text('•  Software Development Job Simulation – Datacom (Issued by Forage)', leftMargin + 8, doc.y, { lineGap: 2.5 });
doc.text('•  Full Stack Development Internship Certificate – Nova Spark Hub', leftMargin + 8, doc.y, { lineGap: 2.5 });
doc.y += 12;

// --- EDUCATION ---
drawSectionHeader('EDUCATION');
const eduY = doc.y;
doc.fillColor(darkText).fontSize(9.5).font('Helvetica-Bold').text('Alpha College of Engineering — B.E., Computer Science and Engineering', leftMargin, eduY);
doc.fillColor(grayText).fontSize(9).font('Helvetica').text('2022 – 2026 | Chennai', leftMargin, eduY, {
  align: 'right',
  width: contentWidth
});
doc.y = eduY + 13;
doc.fillColor(darkText).fontSize(9).font('Helvetica-Bold').text('CGPA: 8.0 / 10', leftMargin, doc.y);
doc.y += 12;

// --- LANGUAGES ---
drawSectionHeader('LANGUAGES');
doc.fillColor(bodyText).fontSize(9).font('Helvetica');
doc.text('•  Tamil — Native', leftMargin + 8, doc.y, { lineGap: 2.5 });
doc.text('•  English — Professional working proficiency', leftMargin + 8, doc.y, { lineGap: 2.5 });

doc.end();

stream.on('finish', () => {
  console.log('Successfully generated full-page Lokesh_P_Resume.pdf');
});
