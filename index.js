const functions = require('@google-cloud/functions-framework');
const prisma = require('./prisma');

functions.http('run', async (_req, res) => {
  console.log(`Creating test user via Prisma...`);

  try {
    await prisma.user.create({
      data: {
        name: `Alice`,
        email: `alice@prisma.io`,
        posts: {
          create: { title: `Hello World` },
        },
        profile: {
          create: { bio: `I like turtles` },
        },
      },
    });
    console.log(`Test user created!`);
  } catch (e) {
    console.log(`Test user not created! ${e}`);
    throw e;
  }

  res.send(`Example Prisma Google Cloud Function`);
});
