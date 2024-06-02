/// <reference types="vite/client" />

/*
 * By default, Vite provides type definitions for import.meta.env in vite/client.d.ts.
 * While you can define more custom env variables in .env.[mode] files, you may want to get
 * TypeScript IntelliSense for user-defined env variables that are prefixed with VITE_SOME_KEY
 */
interface ImportMetaEnv {
  readonly VITE_PROD_SERVER_URL: string;
  readonly VITE_LOCAL_SERVER_URL: string;
  readonly VITE_CRYPTO_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
