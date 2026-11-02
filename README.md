# Dynamic SSR in Next.js

## Objective
To implement Dynamic Server-Side Rendering (SSR) in Next.js
using dynamic route parameters and API data fetching.

## Features
- Dynamic post IDs using [id].js
- Server-side data fetching
- JSONPlaceholder API integration
- Displays post title, body, and ID

## Example URLs
- http://localhost:3000/ssr/2
- http://localhost:3000/ssr/5

## Rendering Methods Comparison

| Method | Description | Use Case |
|---|---|---|
| SSR | Renders on every request | Frequently changing data |
| CSR | Renders in the browser | Interactive dashboards |
| SSG | Generates pages at build time | Blogs and static websites |

## Conclusion
SSR is useful when fresh data is required for every request.
CSR is suitable for highly interactive applications, while
SSG is best for content that does not change frequently.