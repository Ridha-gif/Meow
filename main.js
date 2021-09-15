function Sound_identify(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3BPfORaBv/model.json',modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;
    
        document.getElementById("result_label").innerHTML='I  can Hear - '+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy :"+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color ="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color ="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    
    img = document.getElementById("https://images.squarespace-cdn.com/content/v1/5c631675e5f7d11c36e3f7b7/1601321099080-55YMUMDWQKRKNA4ATPHW/Dog2.png");
    img1 = document.getElementById("https://images.unsplash.com/photo-1568307970720-a8c50b644a7c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2NhcmVkJTIwY2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80");
    img2 = document.getElementById("https://media.istockphoto.com/photos/grass-snake-picture-id183094791?k=20&m=183094791&s=612x612&w=0&h=uqDkksqi1GXVGBe4xDu2LBLY_gw1Sxeg_Yu8hZcI4Po=");
    img3 = document.getElementById("https://cdn.download.ams.birds.cornell.edu/api/v1/asset/302412991/1800");

    
    if(results[0].label=="Barking"){
       document.getElementById("hearing").src="https://images.squarespace-cdn.com/content/v1/5c631675e5f7d11c36e3f7b7/1601321099080-55YMUMDWQKRKNA4ATPHW/Dog2.png"
    }else if(results[0].label=="Meowing"){
    
        document.getElementById("hearing").src="https://images.unsplash.com/photo-1568307970720-a8c50b644a7c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2NhcmVkJTIwY2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
   
    }
        else if(results[0].label=="Snake sound"){
            document.getElementById("hearing").src="https://media.istockphoto.com/photos/grass-snake-picture-id183094791?k=20&m=183094791&s=612x612&w=0&h=uqDkksqi1GXVGBe4xDu2LBLY_gw1Sxeg_Yu8hZcI4Po="
        }
    else if(results[0].label=="crow"){
        document.getElementById("hearing").src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/302412991/1800"
    }
    
    }
    
    }
