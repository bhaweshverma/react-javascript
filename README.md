# React project with JavaScript

# Parcel - read documentation parceljs.org

- dev build
- local server
- HMR - hot module replacement
  - uses File watching algorithm written in C++
  - on every save, it re-builds the project quickly
- Caching - gives faster builds by caching the files in .parcel-cache folder, every consecutive build will take less time if changed nothing ~ 6ms after caching and around 400ms before caching (can try by deleting the .parcel-cache folder from project and rebuild)
- Image Optimization
- Minification
- Bundling
- Compressing - to smaller size eg. by removing all white spaces from whole code
- Consistent Hashing
- Code Splitting
- Differential Bundling - to support older browsers y adding extra things
- Diagnostic - gives beautiful errors in terminal
- Error Handling
- Can host on HTTPs as well
- Tree shaking algo - removes unused code
- Different dev and prod bundles. For prod - npx parcel build index.html

# Food app

/\*\*

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - Restaurant Container
- - Restaurant cards
- Footer
- - Links
    \*/

# Two types of exports & import

- Default Export/Import - for single thing. No need to use {} while importing
- Named Export/Import - for multiple things, use {} while importing

# React hooks

- Normal JS functions
