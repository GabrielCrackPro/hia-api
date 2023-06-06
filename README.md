# 🏠 Home Inventory App

## 🛠 Development

1. Clone the repository or unzip it

```bash
git clone https://github.com/GabrielCrackPro/hia-api.git
```

2. Install the dependencies

```bash
cd hia-api
npm install
```

3. Copy the <code>.env.sample</code> file to the root directory and rename it to <code>.env</code>
4. Get your own conection string. To get one follow this steps:

   - Go to the [MongoDB Atlas Portal](https://www.mongodb.com/atlas)
   - Create an account or log in
   - Create a new project
   - In the databases section of the project create a new shared cluster
   - Once the cluster is created click **Connect**
   - Select **Drivers** section
   - Copy the connection string provided in step 3 (similar to this):
     > `mongodb+srv://<user>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority`
   - Change the user and password to your cluser's user and password
   - Copy the final conection string

5. In the <code>.env</code> change the <code>MONGODB_URI</code> value to your conection string
6. Start the API:

   - In normal mode:

   ```bash
   npm start
   ```

   - In development mode (refreshes automatically):

   ```bash
   npm run dev
   ```
