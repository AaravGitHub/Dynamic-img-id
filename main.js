img="";
status="";
objects=[];



function setup()
{
canvas=createCanvas(380,380);
canvas.center();
video=createCapture(VIDEO);
video.hide();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status:detecting objects";
}

function modelLoaded()
{
    console.log("cocossd has loaded!!");
status=true;
}

function gotResult(error,results)
{
if(error)
{
    console.log(error);
}
else{console.log(results);
objects=results;
}

}

function draw()
{
image(video,0,0,380,380);
if(status !="")
{objectDetector.detect(video,gotResult);
for(i=0;i<objects.length;i++)
{
    r=random(255);
    g=random(255);
    b=random(255);
document.getElementById("status").innerHTML="status:object detected";
document.getElementById("numberOfObjects").innerHTML="Number of objects"+objects.length;
fill(r,g,b);
percent=floor(objects[i].confidence*100);
text(objects[i].label+"  "+percent+"%",objects[i].x,objects[i].y,);
stroke(r,g,b);
noFill();
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}




}
}


