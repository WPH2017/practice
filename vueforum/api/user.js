var data={};

data.get=function (usr,pwd) {
    var mongoose=require('mongoose');
    mongoose.connect('mongodb://localhost:27017/test');

    var db=mongoose.connection;
    db.once('open',function (cb) {
        console.log('数据库连接成功');
    });

    var userSchema=mongoose.Schema({
        username:String,
        password:String
    });
    userSchema.methods.say=function () {
        var greeting=this.username
                ?'我的名字是'+this.username
                :'我没有名字';
        console.log(greeting);
    };

    var User=mongoose.model('user',userSchema);

    var user=new User({username:usr,password:pwd});

    user.save(function (err,data) {
        data.say();
    });

    mongoose.disconnect();
    return Date.parse(new Date())/1000;
};

module.exports= data;