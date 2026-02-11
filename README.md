# PM Painting Website

A high-performance, SEO-optimized website for PM Painting, built with Next.js 14 and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript
- **Deployment:** Render (recommended)

## 🛠️ Getting Started

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <your-repo-url>
    cd SydneyGS_V2
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the site.

## 📂 Project Structure

- **`/app`**: Contains all pages and the global layout (Next.js App Router).
    - `page.tsx`: The Homepage / Landing page.
    - `layout.tsx`: Global layout (Navbar, Footer, SEO).
- **`/components`**: Reusable UI components (Navbar, Footer, Buttons, etc.).
- **`/public/images`**: Static assets (Logos, Gallery images).
- **`tailwind.config.ts`**: Custom configuration for the "Navy, White, Gold" color palette.

## 🚀 Deployment (Render)

1.  Push your code to GitHub.
2.  Connect your repository to Render using the "Web Service" option.
3.  **Build Command:** `npm run build`
4.  **Start Command:** `npm start`
5.  **Environment Variables:** Verify any `.env` variables if needed (none required for basic static functionality).

## 🎨 Design System

- **Primary Color:** Navy (`bg-navy-900`) - Trust & Authority
- **Accent Color:** Gold (`text-gold-400`) - Quality & Premium Finish
- **Layout:** Mobile-first, responsive design with smooth gradients.
