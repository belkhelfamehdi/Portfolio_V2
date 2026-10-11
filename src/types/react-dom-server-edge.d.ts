// @types/react-dom has no typings for this entry point; it exposes the same API as react-dom/server
declare module 'react-dom/server.edge' {
  export * from 'react-dom/server';
}
