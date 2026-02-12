function check_storage(){
    if(typeof(Storage) !== "undefined") {
        return true;
    } else {
        throw "Browser Not Supported.";
    }
}

function check_storage_key(key){
    try{
        check_storage();
        if(sessionStorage.getItem(key)){
            return true;
        } else {
            throw "Empty Storage.";
        }
    } catch(err) {
        console.log(err);
    }
}

function set_session_storage(key, value){
    try{
        check_storage();
        sessionStorage.setItem(key,value);    
    } catch(err){
        console.log(err);
    }
}

function get_session_storage(key){
    try{
        check_storage();
        check_storage_key(key);
        
        return sessionStorage.getItem(key);
    } catch(err) {
        console.log(err);
    }
}

function add_gclid_to_zopim(gclid = ""){
    $(document).ready(function() {
        setTimeout(function(){ 
        if(gclid != "") {
            var exist_gclid = (gclid != "" ? " - GCLID: " + gclid : "");
            set_session_storage("gclid", gclid);
            $zopim(function() {
                $zopim.livechat.addTags("SEM Click " + exist_gclid);
                console.log("SEM Click " + exist_gclid);
            });
            console.log("SEM Click " + exist_gclid);
        } else {
            try {
                var gclid = get_session_storage("gclid");
                console.log(gclid);
                $zopim(function() {
                    $zopim.livechat.addTags("SEM Click - GCLID: " + gclid);
                });
            } catch (err) {
                console.log("Empty");
            }
        }
        }, 5000);
    });
}



function add_fbclid_to_zopim(fbclid = ""){
    $(document).ready(function() {
        setTimeout(function(){ 
        if(fbclid != "") {
            var exist_fbclid = (fbclid != "" ? " - fbclid: " + fbclid : "");
            set_session_storage("fbclid", fbclid);
            $zopim(function() {
                $zopim.livechat.addTags("SEM Click " + exist_fbclid);
                console.log("SEM Click " + exist_fbclid);
            });
            console.log("SEM Click " + exist_fbclid);
        } else {
            try {
                var fbclid = get_session_storage("fbclid");
                console.log(fbclid);
                $zopim(function() {
                    $zopim.livechat.addTags("SEM Click - FBclid: " + fbclid);
                });
            } catch (err) {
                console.log("Empty");
            }
        }
        }, 5000);
    });
}


function add_igclid_to_zopim(igclid = ""){
    $(document).ready(function() {
        setTimeout(function(){ 
        if(igclid != "") {
            var exist_igclid = (igclid != "" ? " - igclid: " + igclid : "");
            set_session_storage("igclid", igclid);
            $zopim(function() {
                $zopim.livechat.addTags("SEM Click " + exist_igclid);
                console.log("SEM Click " + exist_igclid);
            });
            console.log("SEM Click " + exist_igclid);
        } else {
            try {
                var igclid = get_session_storage("igclid");
                console.log(igclid);
                $zopim(function() {
                    $zopim.livechat.addTags("SEM Click - IGclid: " + igclid);
                });
            } catch (err) {
                console.log("Empty");
            }
        }
        }, 5000);
    });
}



 function remove_session_storage(keys) {
    try {
        keys.forEach(key => sessionStorage.removeItem(key));
    } catch (err) {
        console.log(err);
    }
}

