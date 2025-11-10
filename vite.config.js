import { defineConfig } from "vite";
     import react from "@vitejs/plugin-react-swc";
     import tailwindcss from "@tailwindcss/vite";
     import path from "path";
     import { visualizer } from "rollup-plugin-visualizer";
     import { VitePWA } from "vite-plugin-pwa";

     const manifestForPlugIn = {
       strategies: "injectManifest",
       srcDir: "src",
       filename: "sw.js",
       injectRegister: "auto",
       injectManifest: {
         maximumFileSizeToCacheInBytes: 0, // Disable automatic caching
       },
       registerType: "autoUpdate",
       includeAssets: ["favicon.ico", "apple-touch-icon.png", "maskable-icon-512x512.png"],
       manifest: {
         name: "Locket PD.Kane",
         short_name: "Locket PD.Kane",
         description: "Locket PD.Kane - Đăng ảnh & Video lên Locket",
         display: "standalone",
         scope: "/",
         start_url: "/",
         orientation: "portrait",
         icons: [
           {
             src: "/android-chrome-192x192.png",
             sizes: "192x192",
             type: "image/png",
             purpose: "any",
           },
           {
             src: "/android-chrome-512x512.png",
             sizes: "512x512",
             type: "image/png",
             purpose: "any",
           },
           {
             src: "/apple-touch-icon.png",
             sizes: "180x180",
             type: "image/png",
             purpose: "any",
           },
           {
             src: "/maskable-icon-512x512.png",
             sizes: "512x512",
             type: "image/png",
             purpose: "any maskable",
           },
         ],
       },
       // Add glob patterns explicitly if needed
       workbox: {
         globPatterns: ["**/*.{js,css,html,png,jpg,svg,ico}"],
         globIgnores: ["**/node_modules/**/*", "sw.js"], // Remove duplicate "sw.js"
       },
     };

     export default defineConfig({
       server: {
         host: true,
       },
       plugins: [
         tailwindcss(),
         react(),
         VitePWA(manifestForPlugIn),
         visualizer({
           open: false,
           filename: "stats.html",
         }),
       ],
       resolve: {
         alias: {
           "@": path.resolve(__dirname, "src"),
         },
       },
     });