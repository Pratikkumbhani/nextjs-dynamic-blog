# Blog Project

## Project Structure

The project is organized into the following folders and components:

- `components`: Contains React components used in the project.

  - `Blog.js`: A component for rendering blog.
  - `Error.js`: The Error handling component.
  - `Navbar.js`: The navigation bar component.

- `app`: Contains the pages that are rendered by Next.js.
  - `page.js`: The home page displaying button for blogs page.
  - `blog.js`: The home page displaying a list of blogs.
  - `blog/[slug].js`: The individual blog post page.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

   cd blog-app
   npm install
   npm run dev

2. Change ENV File

   change file .env.local.example to .env.local
   change NEXT_PUBLIC_API_URL to api url
