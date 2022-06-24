# Prisma + Google Cloud Function
###### Connect your GCF to Prisma and make Cloud SQL interaction simpler & cleaner!

### Cloud Account Prerequisites:
- [Google Cloud Console account](https://console.cloud.google.com)
- [Cloud SQL instance](https://cloud.google.com/sql/docs/mysql/create-instance)
- [2nd-gen Cloud Function](https://cloud.google.com/functions/docs/2nd-gen/console-quickstart)
- [Cloud Run API enabled](https://console.cloud.google.com/marketplace/product/google/run.googleapis.com)
- [Cloud SQL Admin API enabled](https://console.cloud.google.com/marketplace/product/google/sqladmin.googleapis.com)

### General Knowledge Prerequisites:
- [Google Cloud IAM privileges & roles](https://cloud.google.com/iam/docs/understanding-roles)
- [Google Cloud Service Accounts](https://cloud.google.com/run/docs/configuring/service-accounts?hl=en)
- [Google Cloud Run](https://cloud.google.com/run/docs/quickstarts/deploy-container)
- [Google Cloud Secrets](https://cloud.google.com/secret-manager/docs)
- [Prisma](https://www.prisma.io/)
- [Node 16](https://nodejs.org/dist/latest-v16.x/docs/api/)

### Local Tool Recommendations:
- [VSCode](https://code.visualstudio.com/)
- [NPX](https://www.npmjs.com/package/npx) (npm install -g npx)
- [NVM](https://github.com/nvm-sh/nvm) (or a similar node manager)

#### To test a GCF locally:

1. **nvm use 16** - Switch to Node 16 (nvm install 16.5.1 if not installed)
2. **npm install** - Install all node_modules for the GCF
3. **DATABASE_URL=mysql://\<user\>:\<pass\>@localhost/\<database\> npx prisma migrate dev --name init - Run migrations to create tables inside the database.
2. **DATABASE_URL=mysql://\<user\>:\<pass\>@localhost/\<database\> npx @google-cloud/functions-framework --target=run** - Serve the example GCF locally
3. **http://localhost:8080/** - Visit the locally served GCF

##### *A note on easily moving ready components from local to the cloud:
After cloning this repository, you can upload a zip of the example GCF directory directly to a created Cloud Function. Alternatively, you can manually create & copy GCF files and their contents into your created Cloud Function.

##### *A note on Prisma schema datasource and reconciling localhost issues.
The **url** property for the **datasource** object is typically set to **env("DATABASE_URL")**. This requires your Cloud Function to have access to a stored secret named **DATABASE_URL**. This variable is formatted as such for MySQL: **mysql://\<user\>:\<pass\>@localhost/\<database\>**

##### *TODO: Determine a cleaner way to pass DATABASE_URL into functions-framework for local testing.