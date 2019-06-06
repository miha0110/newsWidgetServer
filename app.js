
const express =  require('express');
const bodyParser = require('body-parser');
var jwt = require('jwt-simple');

var JWT_SECRET = 'decor';

const app = express();

app.use(bodyParser.json());

// CORS settings, need only while on development 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    next();
})

// ******************************************
// api end points
// ******************************************
app.get('/api/news', (req, res, next) => {
    const news = [
        {
            id: 'dsfjfs',
            date: 1556092583878,
            title: 'sdfs',
            content: 'dfsfa' 
        },
        {
            id: 'safsafa',
            date: 1556020154676,
            title: 'NEWS!!!!',
            content: 'dfh;ldljdlksgdlkjjkjsdgaldhgajsghbkdfhkjdsgkfdkgkjdsfghlkajgwelwajgbaekjhjfgaljgnkjrawehrjajgbkjajerakkjbrkagjaewbhdash;khgkjhaewkjgbdgjsfvsavfhasgflsga;kjjghldkgjdfkjgdlkkjgakjgjdlkdgjdlgsladkgjkjdjladfkgjagjdalgadgahadfhahdslksjgagjadflkhja;kldgjakjdghas;jgkadjgh;adjga;gka;jga;s' 
        }
    ];
    res.status(200).json({
        message: 'News fetched successfully',
        news: news
    });
});

app.get('/api/weather', (req, res, next) => {
    const location = 'Beer Sheva'
    const weather = [
        {
            id: '1',
            date: 1556092583878,
            degrees: '30',
            weather: 'sunny',
            day: 'Tuesday'
        },
        {
            id: '2',
            date: 1556092583878,
            degrees: '22',
            weather: 'cloudy',
            day: 'Wednesday'
        },
        {
            id: '3',
            date: 1556092583878,
            degrees: '30',
            weather: 'sunny',
            day: 'Thursday' 
        },
        {
            id: '4',
            date: 1556092583878,
            degrees: '16',
            weather: 'cloudy',
            day: 'Friday' 
        },
        {
            id: '5',
            date: 1556092583878,
            degrees: '12',
            weather: 'rainy',
            day: 'Saturday' 
        },
        {
            id: '6',
            date: 1556092583878,
            degrees: '30',
            weather: 'sunny',
            day: 'Sunday' 
        },
        {
            id: '7',
            date: 1556092583878,
            degrees: '22',
            weather: 'cloudy',
            day: 'Monday' 
        }
    ];
    res.status(200).json({
        message: 'weather fetched successfully',
        location: location,
        weather: weather
    });
});

app.get('/api/finance', (req, res, next) => {
    const finance = [
            [
              'Teams',
              'Period 1',
              'Period 2'
            ],
            [1, 37.8, 80.8],
            [2, 30.9, 69.5],
            [3, 25.4, 57],
            [4, 11.7, 18.8],
          
          ];
    res.status(200).json({
        message: 'finance fetched successfully',
        finance: finance
    });
});

app.get('/api/sports', (req, res, next) => {
    const sports = 
        {
            id: '1',
            groupScore: '2',
            groupName: 'maccabi',
            groupScore2: '2',
            groupName2: 'hapoel' 
            
        };
    res.status(200).json({
        message: 'sports fetched successfully',
        sports: sports
    });
});

// receive an email address and send back a token: no database attached for this demo  
app.post('/api/subscribe', (req, res, next) => {
    const email = req.body.email;
    var token = jwt.encode(email, JWT_SECRET);
    res.status(201).json({
        message: 'email added successfully',
        token: token
        
    });
});


module.exports = app;