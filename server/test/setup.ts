import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.test' });

console.log('OPENAI_API_KEY', process.env.OPENAI_API_KEY);
