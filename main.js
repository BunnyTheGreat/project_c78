var image = 
["IMG-20200810-WA0068 (1).jpg",
"IMG-20190804-WA0001.jpg",
"IMG-20190508-WA0022.jpg",
"20210312_080428.jpg"
];

var names=["Aishani Uddaraju","Prasad Uddaraju", "Sunita Uddaraju", "Anwita Uddaraju"];

var i=0;
function update() {
    i++;
    var number_of_fam_members_in_array = 4;
if (i>number_of_fam_members_in_array)

{i=0;}

var updated_img= image[i];
var updated_names=names[i];

document.getElementById("fam_img").src="updated_img"
document.getElementById("fam_name").innerHTML="updated_names"
}

