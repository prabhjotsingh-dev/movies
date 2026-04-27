# 🎬 Movie Search App

A simple and responsive movie search application built to explore and demonstrate frontend development skills. This app allows users to search for movies and view relevant details in real time.

> [!IMPORTANT]
> **Important Note (For Users in India)**
> Due to regional restrictions, TMDb may not be directly accessible in some locations. If you are cloning and running this project, configure a DNS service
> **like:**
>
> - **Google Public DNS**
> - **Cloudflare**
> - **Or use a VPN.**

## 🚀 Features

- 🔍 Search movies by name (supports partial input)
- ⚡ Real-time search results
- 🎥 Display movie posters, titles, and basic info
- 📱 Responsive design for different screen sizes
- 🌐 Data fetched from The Movie Database (TMDb) API

## 🛠️ Tech Stack

- Next.js (React Framework)
- Tailwind CSS
- Axios for API requests
- TMDb API (v3 / v4 authentication)

## 🔑 API Configuration

This project uses TMDb API for fetching movie data.

You can use either:

- **API Key (v3)** (basic usage)
- **Read Access Token (v4)** (recommended for secure apps)

👉 Get your API credentials from:
[https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)

## 📦 Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/prabhjotsingh-dev/movies.git
   ```

2. **Navigate to the project folder:**

   ```bash
   cd movies
   ```

3. **Add your TMDb API credentials:**
   Create a `.env.local` file in the root directory and add:

   ```env
   TMBD_API_URL="https://api.themoviedb.org/3"
   TMBD_API_READ_TOKEN="YOUR_ACCESS_TOKEN"
   ```

4. **Install Dependencies & Run the project:**
   ```bash
   npm install
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 License

This project is for educational purposes and uses data from The Movie Database (TMDb).
