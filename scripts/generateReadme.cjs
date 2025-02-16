const fs = require('fs');
const path = require('path');

// 读取 site.js 配置
const siteConfigPath = path.join(__dirname, '../config/site.js');
const siteConfigContent = fs.readFileSync(siteConfigPath, 'utf8');

// 使用 Function 构造器来执行 JS 代码
const executeSiteConfig = new Function('exports', siteConfigContent.replace('export const', 'exports.'));
const exports_ = {};
executeSiteConfig(exports_);
const { siteConfig } = exports_;

// 生成 README 内容
function generateReadme() {
  const readme = `# ${siteConfig.name.zh} | ${siteConfig.name.en}

[English](#english) | [中文](#chinese)

<h2 id="chinese">中文介绍</h2>

${siteConfig.bio.zh}

${siteConfig.introduction.zh}

### 🚀 产品作品

${siteConfig.products.map(product => `#### ${product.name}
${product.description.zh}
🔗 [访问链接](${product.link})`).join('\n\n')}

### 🌟 开源项目

${siteConfig.openSource.map(project => `#### ${project.name}
${project.description.zh}
- 🔗 [GitHub](${project.link})
- ⭐ Stars: ${project.stars}
- 💻 Language: ${project.language}`).join('\n\n')}

### 📱 社交媒体

${siteConfig.contactLinks.map(link => `- [${link.platform}](${link.url})`).join('\n')}


---

<h2 id="english">English Introduction</h2>

${siteConfig.bio.en}

${siteConfig.introduction.en}

### 🚀 Products

${siteConfig.products.map(product => `#### ${product.name}
${product.description.en}
🔗 [Visit](${product.link})`).join('\n\n')}

### 🌟 Open Source Projects

${siteConfig.openSource.map(project => `#### ${project.name}
${project.description.en}
- 🔗 [GitHub](${project.link})
- ⭐ Stars: ${project.stars}
- 💻 Language: ${project.language}`).join('\n\n')}

### 📱 Social Media

${siteConfig.contactLinks.map(link => `- [${link.platform}](${link.url})`).join('\n')}

`;

  fs.writeFileSync(path.join(__dirname, '../README.md'), readme);
  console.log('README.md has been updated successfully!');
}

generateReadme(); 