'use strict';

module.exports = function(Matches) {

    Matches.afterRemote('find',function(ctx,res,next){
        for(var index in ctx.result){
            ctx.result[index].password = "";
        }
        next();
    });

};
