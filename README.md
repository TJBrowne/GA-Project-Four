# Full stack app boilerplate

This is boilerplate for a full-stack app.

## Install JS dependencies

```
npm install
```

## Modify the database name

The database name is defined in `createDb.sql` and `models.js`. You'll need to edit them by hand for now.

## Create the database

```
npm run db
```

This will drop the database, recreate it, create tables defined in `models.js`, and seed the database with instance data from `seed.js`

## Run the development server

This will start both the Express API server and the React application.

```
npm run dev
```
A food allergy application, that is based on location. When traveling able to find restaurants that are food allergy friendly. Users can put in their choice of foods to stay away from and the app saves that info based on the user login and when traveling recommends restaurants, deli, bakeries, cafes that is safe to eat at.

