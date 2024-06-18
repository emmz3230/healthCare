###Zhacathone
Overview
Zhacathone is a web application developed as part of the Ingenium STEM Summer Hacks 1.0. The goal of this project is to provide a BMI calculator to promote health and well-being among users. By calculating their Body Mass Index (BMI), users can gain insights into their health status and take appropriate actions to maintain or improve their health.

###Features
BMI Calculation: Users can input their weight and height to calculate their BMI.
Health Insights: Based on the calculated BMI, users receive insights into their health status (e.g., underweight, healthy, overweight, obese).
User Session: User session management using NextAuth for authentication and Prisma for database interactions.
Technologies Used
Frontend: React, Next.js
Backend: Node.js
Database: Prisma
Authentication: NextAuth
Styling: CSS
Project Structure
The project structure is as follows:

arduino
Copy code
.
├── actions
│   └── index.ts
├── app
│   ├── api
│   │   ├── auth
│   │   │   └── auth.ts
│   │   └── user
│   └── pages
│       ├── home
│       │   └── page.tsx
│       └── signin
│           └── page.tsx
├── components
│   ├── diet
│   │   ├── Healthy.tsx
│   │   ├── Obese.tsx
│   │   ├── Overweight.tsx
│   │   ├── Underweight.tsx
│   │   └── BMI.tsx
│   ├── ui
│   │   ├── Activities.tsx
│   │   ├── AiResponse.tsx
│   │   ├── Diet.tsx
│   │   ├── Exercise.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   └── ProfileCard.tsx
├── db
│   ├── prisma
│   └── index.ts
├── hooks
├── public
│   ├── favicon.ico
│   ├── globals.css
│   └── layout.tsx
└── .eslintrc.json


###Installation and Setup
To run this project locally, follow these steps:

Clone the repository:

sh
Copy code
git clone https://github.com/yourusername/zhacathone.git
cd zhacathone
Install dependencies:

sh
Copy code
npm install
Generate Prisma client:

sh
Copy code
npx prisma generate
Run the development server:

sh
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000.

###Usage
Home Page: The home page provides an overview and navigation to the BMI calculator.
BMI Calculator: Users can enter their weight and height to calculate their BMI and receive health insights.
Authentication: Users can sign in to save their BMI calculations and track their health over time.
Contributing
We welcome contributions from the community. To contribute, follow these steps:

##Fork the repository.
Create a new branch for your feature or bugfix.
Make your changes and commit them with clear and descriptive messages.
Push your changes to your fork and create a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
We would like to thank Ingenium STEM for organizing this hackathon and providing an opportunity to contribute to social good through technology.

