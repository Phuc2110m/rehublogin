var msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>Systeam Maintenance</h2>;
msg +=    'Our server are being updated between 3 and 4 a.m.';
msg +='During this time, there may be minor disruptions to service.</div>';
    ver elNote= document.createElement('div');
elNote.setAttribute('id','note');
elNote.innerHTML =msg;
document.body.appendChild(elNote);

function dismissNote(){
    document.body.appendChild(elNote);
}
var elClose= document.getElementById('Close');
elClose.addEventListener('click',dismissNote,False);