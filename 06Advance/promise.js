function asynFun(){
    return new Promise(
        function(resolve, reject){
            resolve(result);
            reject(error);
        }
        )
    }

    asynFun()
    .then(result =>{888888888})
    .catch(error =>{222222222});