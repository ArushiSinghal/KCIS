const router=require('express').Router();

router.route('/on').get((req,res)=>{
    // console.log(__dirname)
    path=__dirname
    var myscript=path+'/on.py'
    // console.log(myscript)
    var {PythonShell}=require('python-shell')
    var pyshell=new PythonShell(myscript)
    pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        console.log(message);
    });
    pyshell.end(function (err) {
        if (err){
            throw err;
        };
    
        console.log('finished');
});
});
router.route('/off').get((req,res)=>{
    path=__dirname
    var myscript=path+'/off.py'
    

    var {PythonShell}=require('python-shell')
    var pyshell=new PythonShell(myscript)
    pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        console.log(message);
    });
    pyshell.end(function (err) {
        if (err){
            throw err;
        };
    
        console.log('finished');
});
});
router.route('/change').post((req,res)=>{
    var temp=req.body.temp
    console.log(temp)
    x=[temp]
    console.log(x)
    path=__dirname
    var myscript=path+'/changetemp.py'

    var {PythonShell} = require('python-shell');
    var pyshell = new PythonShell(myscript);

    pyshell.send(JSON.stringify(x));

    pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        console.log(message);
    });

// end the input stream and allow the process to exit
    pyshell.end(function (err) {
        if (err){
            throw err;
        };

        console.log('finished');
    });

});

module.exports=router;