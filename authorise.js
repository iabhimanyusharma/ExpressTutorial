const authorise = (req, res, next) => {
    const {user} = req.query;
    if(user === 'Abhi'){
        req.user = {name:'Abhi', ID: 3}
        next ();
    }

    else {
        res.status(401).send('Unauthorised')
    }
}

module.exports = authorise