/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />


interface ImportMetaEnv {
    readonly EMAIL_USER: string;
    readonly EMAIL_PASS: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}