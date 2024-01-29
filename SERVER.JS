const express = require('express');
const axios = require('axios');
const { Notion } = require('@neurosity/notion');

const app = express();
const PORT = 3001;

const FOCUS_THRESHOLD = 0.25;
const HA_SERVER_URL = 'WHATEVER YOUR SERVER URL IS';
const HA_TOKEN = 'TOKEN GENERATED IN HA PORTAL';
const HA_ENTITY_ID = 'switch.finger_robot_2_switch'; //USE HACLI TO FIND ID

const notion = new Notion();
let currentFocusScore = 0;

async function loginToNeurosity() {
    try {
        await notion.login({
            email: "YOUR NEUROSITY LOGIN",
            password: "YOUR NEUROSITY PASSWORD"
        });
        console.log("Logged in to Neurosity");
    } catch (error) {
        console.error("Error logging in:", error);
    }
}

loginToNeurosity();

notion.focus().subscribe(focusData => {
    console.log("Received focus data:", focusData);
    if (focusData && focusData.probability) {
        currentFocusScore = focusData.probability;
        console.log("Updated Focus score:", currentFocusScore);

        if (currentFocusScore > FOCUS_THRESHOLD) {
            console.log("Focus threshold crossed. Triggering Home Assistant command.");
            axios.post(`${HA_SERVER_URL}/api/services/switch/turn_on`, {
                entity_id: HA_ENTITY_ID
            }, {
                headers: {
                    'Authorization': `Bearer ${HA_TOKEN}`,
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                console.log('Switch turned on:', response.data);
            }).catch(error => {
                console.error('Error turning on switch:', error);
            });
        }
    } else {
        console.log("Focus score data not received or undefined.");
    }
});

app.get('/', (req, res) => {
    res.send('Neurosity Middleware Running');
});

app.get('/focus', (req, res) => {
    res.json({ focusScore: currentFocusScore });
});

app.listen(PORT, () => {
    console.log(`Middleware listening at http://localhost:${PORT}`);
});



 
