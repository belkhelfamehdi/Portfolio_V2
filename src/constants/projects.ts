import Project1Img from "../assets/projects/mps.webp";
import Project2Img from "../assets/projects/mockup.webp";
import Project3Img from "../assets/projects/hardspace.webp";
import Project4Img from "../assets/projects/anchatty.webp";
import Project5Img from "../assets/projects/yalla_interview.webp";
import Project6Img from "../assets/projects/clinical.png";
import Project7Img from "../assets/projects/Billard.png";
import Project8Img from "../assets/projects/parkmel.png";
import Project9Img from "../assets/projects/logistic.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string;
  image: string;
  role: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: "logistics-control-center",
    title: "Logistics Control Center – Microservices Dashboard",
    description:
      "A modern React admin dashboard for managing logistics operations including orders, inventory, and shipments. Features a dark-themed premium UI inspired by Stripe/Linear, role-based access control (Admin/Ops/Delivery), real-time data visualization with Recharts, and integration with a Spring Boot microservices backend using Kafka for event-driven architecture.",
    stack: "React 19, TypeScript, TailwindCSS, TanStack Query, React Router, Recharts, Vite",
    image: Project9Img,
    role: "Frontend Lead & UI/UX Designer",
    link: "https://github.com/belkhelfamehdi/logistics-control-center",
  },
  {
    id: "billard",
    title: "Billard – Mobile Billiard Management App",
    description:
      "A cross-platform mobile app for discovering billiard tables, starting games via QR code scanning, and connecting with friends. Features interactive maps with clustering, real-time friend status, player statistics, and JWT-based authentication. Backed by a microservices architecture with Quarkus and PostgreSQL/MongoDB.",
    stack: "React Native, Expo, TypeScript, UI Kitten, NativeWind, Quarkus, Java 17, PostgreSQL, MongoDB, Docker",
    image: Project7Img,
    role: "FullStack Developer",
    link: "https://gitlab.com/LucasVanV/billard-app-mobile",
  },
  {
    id: "myskilledcv",
    title: "MySkilledCV – Resume Screening Platform",
    description:
      "An intelligent recruitment platform that analyzes uploaded resumes and ranks candidates using AI. Offers a modern dashboard with drag-and-drop functionality, real-time updates, and efficient applicant management.",
    stack: "Spring Boot, Angular, TailwindCSS, PostgreSQL",
    image: Project2Img,
    role: "FullStack Developer",
    link: "https://github.com/belkhelfamehdi/MySkilledCV_Frontend",
  },
  {
    id: "anchatty",
    title: "AnChatty – Realtime Messaging Platform",
    description:
      "A sleek messaging web app inspired by WhatsApp. Built with Next.js and TypeScript, featuring real-time chat, user presence, and emoji support. Uses Stream for infrastructure and Clerk for authentication.",
    stack: "TypeScript, Next.js, TailwindCSS, Clerk Auth, Stream",
    image: Project4Img,
    role: "FullStack Developer",
    link: "https://anchatty-git-master-belkhelfamehdis-projects.vercel.app/",
  },
  {
    id: "yalla-interview",
    title: "Yalla Interview – AI Interview Prep App",
    description:
      "This app allows users to generate personalized interview questions and answers based on their role and experience, take notes, and review topics using AI-generated explanations. Includes role-based sessions, concept breakdowns, and a clean accordion UI for focused learning.",
    stack: "React, Node.js, TailwindCSS, MongoDB, Gemini API",
    image: Project5Img,
    role: "FullStack Developer",
    link: "https://yalla-interview-frontend-git-master-belkhelfamehdis-projects.vercel.app/",
  },
  {
    id: "erp-module",
    title: "ERP Module - Production Planning",
    description:
      "Developed a customized production planning solution for ISATIS, fully integrated into the Odoo ERP system. The module introduces a dynamic matrix interface to manage and forecast manufacturing operations across multiple time periods. Built with Python using the Odoo framework, OWL for interactive frontend, and PostgreSQL for data persistence.",
    stack: "Odoo Framework (Python), OWL (JavaScript), PostgreSQL",
    image: Project1Img,
    role: "FullStack Developer & Analyst",
    link: "https://github.com/belkhelfamehdi/Plan-directeur-de-production",
  },
  {
    id: "hardspace",
    title: "HardSpace – E-Commerce Platform",
    description:
      "A web-based platform for selling computer hardware. Features include real-time product and order management, user dashboards, and admin tools. Built with Laravel 10, Tailwind CSS, and MySQL.",
    stack: "Laravel, TailwindCSS, MySQL",
    image: Project3Img,
    role: "FullStack Developer",
    link: "https://github.com/belkhelfamehdi/E-commerce-HardSpace",
  },
  {
    id: "clinical-management",
    title: "Clinical Management System",
    description:
      "A modernized clinical management system for healthcare facilities. Handles patient management, employee management, pharmacy, room management, blood bank, invoicing, leave management, and consultation management. Built with Laravel and Vue 3 using Inertia.js for seamless SPA experience.",
    stack: "Laravel 13.6, Vue 3, Inertia.js, TailwindCSS, MySQL, Docker",
    image: Project6Img,
    role: "FullStack Developer",
    link: "https://github.com/belkhelfamehdi/clinical-management",
  },
  {
    id: "parkmel",
    title: "ParkMEL – Real-time Parking Finder",
    description:
      "A web application for finding available parking spots in the Lille metropolitan area. Features an interactive Leaflet map with clustered markers, real-time data from the Lille Métropole Open Data API (auto-refreshed every 5 minutes), sortable/searchable parking lists, geolocation support, and Google Maps navigation integration.",
    stack: "Vue 3, TypeScript, Vite, Leaflet, TailwindCSS, Pinia, Vue Router",
    image: Project8Img,
    role: "FullStack Developer",
    link: "https://github.com/belkhelfamehdi/ParkMEL",
  },
];
