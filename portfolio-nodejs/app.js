const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Shivali Sharma | DevOps Engineer</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');

          body {
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
            font-family: 'Fira Code', monospace;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          }

          .container {
            background: rgba(0, 0, 0, 0.85);
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 0 30px rgba(0,0,0,0.6);
            text-align: center;
            max-width: 720px;
            animation: fadeIn 1.2s ease-in-out;
          }

          h1 {
            font-size: 2.6em;
            margin: 0;
            color: #00d9ff;
            animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
            white-space: nowrap;
            overflow: hidden;
            border-right: 2px solid;
          }

          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }

          @keyframes blink {
            50% { border-color: transparent }
          }

          h2 {
            margin: 10px 0 25px;
            font-size: 1.4em;
            color: #ddd;
          }

          ul {
            text-align: left;
            margin: 20px auto;
            padding: 0;
            list-style: none;
            line-height: 1.8;
          }

          ul li::before {
            content: '⚡';
            margin-right: 8px;
            color: #00d9ff;
          }

          .contact a {
            color: #00d9ff;
            margin: 0 10px;
            text-decoration: none;
          }

          .contact a:hover {
            text-decoration: underline;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Hello, I’m Shivali Sharma 👩‍💻</h1>
          <h2>DevOps Engineer | Automating the Future 🚀</h2>
          <p><strong>Experience:</strong> 1+ years in cloud infrastructure, automation, and CI/CD systems.</p>
          <p><strong>Key Skills:</strong></p>
          <ul>
            <li>AWS (EKS, EC2, S3, IAM, RDS)</li>
            <li>Docker & Kubernetes (Pods, Ingress, Helm)</li>
            <li>CI/CD using Jenkins & GitHub Actions</li>
            <li>Terraform, Ansible & Infrastructure as Code</li>
            <li>Monitoring with Datadog & Cloudwatch</li>
          </ul>
          <p><strong>Goal:</strong> To build highly available, secure, and automated infrastructure for real-world applications using modern DevOps practices.</p>
          <div class="contact">
            <p><strong>📫 Connect with me:</strong></p>
            <a href="https://github.com/shivaliClouds" target="_blank">GitHub</a> |
            <a href="https://linkedin.com/in/shivali-sharma-89b364344" target="_blank">LinkedIn</a> |
            <a href="mailto:shivaliops@gmail.com">Email</a>
          </div>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`🌐 Shivali's DevOps Portfolio running at http://localhost:${port}`);
});
