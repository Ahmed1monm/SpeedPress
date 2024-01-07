export function tsconfigJsonContent(): string {
    return `{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true,
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "lib": ["es2019", "dom"],
        "types": ["node"],
        "baseUrl": ".",
        "paths": {
            "@/*": ["src/*"]
        }
    },
    "include": ["src/**/*.ts"],
    "exclude": ["node_modules", "dist"]
}
`;
}