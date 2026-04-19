/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_ENABLE_ADMIN_PANEL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
