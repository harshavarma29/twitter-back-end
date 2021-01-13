const express = require('express');
const {twitter} = require('../APIConnection/twitterConnection');

const twitterSchema = require('../model/twitterSchema')

const app = express();

app.post('/tweets', (req, res) => {
    console.log(req.body);
    async function userDetails() {
        const data = await twitter.accountsAndUsers.usersSearch({ q : req.body.query });
    
        return await data;
    }
    
    var user = userDetails();
    user.then(response => response)
    .then(data => {

        Promise.all(data)
        .then(value => {
            value.forEach(item => {

                var idStr;
                try {
                    idStr = item.status.id_str;
                } 
                catch(err) {
                    idStr = null;
                } 
                var details = {
                    id: item.id_str,
                    statusid: idStr,
                    image: item.profile_image_url,
                    date: item.created_at,
                    description: item.description,
                    username: item.name,
                    location: item.location,
                    timezone: item.time_zone,
                    retweets: null
                }

                const data = twitterSchema(details);

                data.save();

            })
            try {
                console.log('data pushed')
                res.json("ok")
            }
            catch(err) {
                console.log(err)
            }
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
    

})

app.get("/get_tweets", async(req, res) => {
    const data = await twitterSchema.find();
    console.log('clouds')
    res.json(data)
})

app.delete('/del', async(req, res) => {
    try {
        console.log('will be removed')
        const data = await twitterSchema.find();

        const deleted = data.remove();

        res.json(deleted)
    }
    catch(err) {
        console.log(err)
    }
})

module.exports = app;