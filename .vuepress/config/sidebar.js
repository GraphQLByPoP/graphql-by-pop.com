const docsSidebar = [
    {
        title: 'Getting Started',
        children: [
            'getting-started/intro',
            'getting-started/installation/wordpress',
            'getting-started/repositories',
            'getting-started/configuration',
            'getting-started/directory-structure',
        ]
    },
    {
        title: 'Dynamic Schema',
        children: [
            ['dynamic-schema/intro', 'Intro'],
            'dynamic-schema/ifttt-through-directives',
            'dynamic-schema/multiple-resolvers',
            'dynamic-schema/field-directive-based-versioning',
            'dynamic-schema/access-control',
            'dynamic-schema/public-private-schema-mode',
            'dynamic-schema/backend-for-frontends',
            'dynamic-schema/automatic-namespacing',
        ]
    },
    {
        title: 'Schema Objects',
        children: [
            // ['schema-objects/intro', '(x) Intro to Schema Objects'],
            'schema-objects/schema',
            'schema-objects/types/intro',
            'schema-objects/types/objects',
            'schema-objects/types/interfaces',
            'schema-objects/types/unions',
            'schema-objects/types/enums',
            'schema-objects/types/scalars',
            'schema-objects/fields',
            'schema-objects/directives',
        ]
    },
    // {
    //     title: 'Security',
    //     children: [
    //         // 'security/intro',
    //         'security/authentication',
    //         'security/authorization',
    //         'security/validation',
    //         'security/sanitization',
    //     ]
    // },
    {
        title: 'Caching',
        children: [
            // 'caching/intro',
            ['caching/http-caching', 'HTTP Caching'],
            'caching/execution-caching',
            'caching/configuration-caching',
        ]
    },
    {
        title: 'Operational',
        children: [
            // ['operational/intro', '(x) Intro to Operational'],
            'operational/access-control',
            'operational/proactive-feedback',
            'operational/tracing',
            'operational/export',
            'operational/remove-if-null',
            'operational/translate',
        ]
    },
    {
        title: 'Extended GraphQL',
        children: [
            // ['extended/intro', '(x) Intro to Extended GraphQL'],
            ['extended/intro', '(x) Intro'],
            'extended/full-schema',
            'extended/pql',
            'extended/pql-language-features',
            'extended/pql-syntax',
            'extended/interact-apis-within-query',
            'extended/gateway',
            'extended/content-mesh',
            'extended/persisted-fragments-and-queries',
            'extended/granular-feedback',
        ]
    },
    {
        title: 'Going Further',
        children: [
            // ['going-further/intro', '(x) Intro to Going Further'],
            ['going-further/intro', '(x) Intro'],
            'going-further/multiple-endpoints',
            'going-further/rest-integration',
            ['going-further/response-formats', '(x) Response Formats'],
            'going-further/normalized-data',
        ]
    },
    {
        title: 'Architecture',
        children: [
            ['architecture/intro', '(x) Intro'],
            'architecture/suppressing-n-plus-one-problem',
            'architecture/using-components-instead-of-graphs',
            'architecture/dataloading-engine',
            'architecture/symfony-components',
            'architecture/graphql-superset',
            'architecture/package-hierarchy',
            'architecture/directive-design',
            'architecture/extensibility',
            'architecture/code-first',
            'architecture/converting-from-gql-to-pql',
        ]
    },
    {
        title: 'Troubleshooting',
        children: [
            'troubleshooting/common-errors',
            'troubleshooting/known-issues',
        ]
    },
    // {
    //     title: 'API Reference',
    //     children: [
    //         'api-reference/package-directory',
    //         'api-reference/types',
    //     ]
    // },
    {
        title: 'Roadmap',
        children: [
            ['roadmap/intro', '(x) Intro'],
            'roadmap/convention-over-configuration',
            'roadmap/scaffolding-commands',
            'roadmap/mutations',
            'roadmap/federation',
            ['roadmap/decoupling-requested-executed-queries', '(x) Decoupling Queries'],
            'roadmap/serverless-wordpress',
            ['roadmap/laravel-symfony', '(x) Laravel/Symfony'],
        ]
    },
];
const guidesSidebar = [
    ['intro', 'Intro'],
    'rapid-iteration-on-the-schema',
    'localized-newsletter',
    'building-cms-agnostic-api',
    'filling-void-with-directive',
    'creating-access-control-rule',
];
module.exports = {
    '/docs/': docsSidebar,
    '/guides/': guidesSidebar,
}
