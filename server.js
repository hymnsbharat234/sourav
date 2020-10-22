const express = require('express');
const port = 3000;
const app = express();
const db = require('./config/mongoose');



app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./assets'));
// app.use('/uploads', express.static(__dirname + '/uploads'));

app.use('/', require('./routes/index'));
// app.use(session({
//     name: 'sourav',
//     // To be changed at deployment
//     secret: 'blahsomething',
//     saveUninitialized: false,
//     resave: false,
//     cookie: {
//         maxAge: (20000 * 60 * 100)
//     },
//     store: new MongoStore({
//         mongooseConnection: db,
//         autoRemove: 'disabled'

//     }, function(err) {
//         if (err) {
//             console.log('Error in MongoStore');
//         }
//     })

// }));

app.listen(port, function(err) {
    if (err) {
        console.log('Error', err);
        return;
    }

    console.log('Server is running on port ', port);
})