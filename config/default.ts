export default {
    port: 1337,
    dbUri: 'mongodb://localhost:27017/rest-api-ts',
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
    publicKey: '-----BEGIN PUBLIC KEY-----\n' +
        'MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgFzY7EA6FtUYno6fJ8yMNDCfwoVD\n' +
        'SaGZWSahWJh89P0PejvFhw7TKZI7Y2Uqh0rJJ15L7cx678KNpK96dYr0W0Ar9dMg\n' +
        'oNMRdPT3+g1jQEjWATKu3KDhRFm5I6Nn+WU3FnzcYC11vpkLfNxz34hSvjAgAVhJ\n' +
        'rwveLDA9LWQsLM9ZAgMBAAE=\n' +
        '-----END PUBLIC KEY-----',
    privateKey: '-----BEGIN RSA PRIVATE KEY-----\n' +
        'MIICWwIBAAKBgFzY7EA6FtUYno6fJ8yMNDCfwoVDSaGZWSahWJh89P0PejvFhw7T\n' +
        'KZI7Y2Uqh0rJJ15L7cx678KNpK96dYr0W0Ar9dMgoNMRdPT3+g1jQEjWATKu3KDh\n' +
        'RFm5I6Nn+WU3FnzcYC11vpkLfNxz34hSvjAgAVhJrwveLDA9LWQsLM9ZAgMBAAEC\n' +
        'gYAd7ZpxtYfIls/9PxYwG/1ysvybwi3I1kpjZlzNgnHh5IxNGgXH5I8g4N3QLV5A\n' +
        '4Ag9oBH9+J6yQsAUBFBBQzTqXNY5VFsqoyxNW9hzw2hKMLxPNnafYZRink+TvyH+\n' +
        '5pRS+AkeN7aoZ5L+ucGGcddE+ciuEWLVVfUQyIxPSybdBQJBALTu7x9l8ZmrHtqU\n' +
        'IN05Pcp3wSnQRmXa8VS/8ghwGZ/o2wVNbEPewBRVyxFejeDxKFvmqBPg3c4Me3Sf\n' +
        'ypfnSTcCQQCDXk9zfOOxjqsOe5WKLvdBaLNGz3kHrBrQbyf3gOJ+SNGw7HUnfZD6\n' +
        'y56Ht1nS1gAIrIvnH0d9Y9zmWdtEYrPvAkAZ3ld967thNyAQLEGOn5KAEiMh8U8/\n' +
        'XNBIR7E5F53ySP6XgXxLL9vSjHmeICC02oXkrdO2E95iiVJVWEtE8KJ9AkEAgruk\n' +
        'TcYHwne8e5k5ZF8A6TMM1nc6dwwrUyqLl5/Hxu0o4O0wWbB4S12/0kgBN/SH7Bnq\n' +
        '0IMsXfi3qPXbY97mOQJAIqLSxdW3Qpd0oXfMRSlTXvgs8/rgkObJMycnDByautkQ\n' +
        '9Hfb7IePxx8ysvePq42TiAuB7WT3T0DPdylIFpFctw==\n' +
        '-----END RSA PRIVATE KEY-----'
}
