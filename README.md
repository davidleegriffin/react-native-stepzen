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

We decided to use AWS Cognito for our signUp/signIn Authorization. There are many tutorials onliine on how to use Cognito with React-Native, we mostly used this one for our guidance:

https://www.youtube.com/watch?v=s2_j_L0aJ_I&t=477s

Where he walks you through the signup and provisioning of AWS Cognito, creation of aws-exports.js file, and how to tie it into App.tsx/App.js.

Create aws-exports.js in root folder and configure for your particular AWS User Pool:
```
const config = {
    identityPoolId: '',
    region: '',
    userPoolId: '',
    userPoolWebClientId: ''
}
export default config;
```
The youTube video abaove has an excellent walk-through of how to populate your aws-exports.js file and where on AWS to find the info to populate it with.

Add to App.tsx/App.js near the top:
```
import AppNavigation from "./navigation";
import config from './aws-exports';
import Amplify from '@aws-amplify/core';

Amplify.configure(config);
```



Download the expo App on your phone and scan the QR code or open it in your browser
