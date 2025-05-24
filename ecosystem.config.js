module.exports = {
    apps: [
        {
            name: 'umft-admission',
            script: 'node_modules/next/dist/bin/next',
            args: 'start -p 3004',
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
};
