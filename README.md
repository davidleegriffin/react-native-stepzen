# react-native-stepzen

Install Expo
```
npm install -g expo-cli
or 
yarn global add expo-cli
```

Clone the repo
```
git clone git@github.com:stepzen-samples/react-native-stepzen.git
```

Manually add your admin key and uri in the App.tsx. Still working on adding .env variables to the build and development environments
```
const client = new ApolloClient({
	link: createHttpLink({
		credentials: "same-origin",
		headers: {
			Authorization: `Apikey {add_key}`,
		},
		uri: "{add_uri}",
	}),
	cache: new InMemoryCache(),
});
```

Add a config.yaml to Stepzen folder, don't forget to add config.yaml to your git ignore file. config.yaml file should look similar to this:
```
configurationset:
  - configuration:
      name: cloudinary_config
      api_key: your cloudinary api key
      api_secret: your cloudinary api secret
      cloud_name: your cloudinary name
```

Start up StepZen
```
$ cd stepzen
$ stepzen start
```

Start up the development environment
```
npm start
or 
yarn start
or 
expo start --tunnel
```

Download the expo App on your phone and scan the QR code or open it in your browser
