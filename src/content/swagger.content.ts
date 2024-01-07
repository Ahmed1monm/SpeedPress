export function swaggerContent(name: string): string {
    return `
openapi: 3.0.0
info:
    title: ${name}
    description: ${name}
    version: 1.0.0
servers:
    - url: http://localhost:3000
paths:
    /:
        get:
            summary: Root
            description: Root
            responses:
                '200':
                    description: Root
                    content:
                        application/json:
                            schema:
                                type: object
                                properties:
                                    message:
                                        type: string
                                        example: Hello World!
`;
}