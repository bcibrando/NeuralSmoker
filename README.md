# NeuralSmoker
Control the fingerbot on your Home Assistant server using the Neurosity brain-computer interface by focusing on the switch.
Connect to the fingerbot with a Neurosity brain computer. In this case I use focus brainwaves to control a fingerbot through a Tuya HA integration. 

For fun and to reduce brain fog I created the world’s first neural smoker. 

Requirements:

Neurosity-NotionSDK: https://github.com/neurosity/neurosity-sdk-js 

HomeAssistant: https://www.home-assistant.io/

HACLI: https://github.com/home-assistant-ecosystem/home-assistant-cli

Extras: 
Moes Fingerbot: https://moeshouse.com/products/smart-bluetooth-fingerbot?utm_source=google02&utm_medium=cpc&network=x&keyword=&campaignid=20418884134&gad_source=1&gclid=EAIaIQobChMI2dHrgJeChAMVpzXUAR0dVQ0xEAAYASAAEgJ1nvD_BwE

Raw Smoke Thrower:
https://rawthentic.com/prawducts/smoking-gear/holders-ashtrays/raw-smoke-thrower/

STEPS: 

Download Neurosity SDK + HA

Connect to HA

Generate a long lived access token via the HA portal. 

Add any devices via HA integration/bluetooth
In this instance it is the FingerBot via HA Tuya integration. 

Install HACLI to find the HA-ENTITY ID on your local server. 

Add HA-ID+HA TOKEN to the server code. 

Flip your switch!
