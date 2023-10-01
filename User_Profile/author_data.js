var ham = document.querySelector('.ico2');
var cross = document.querySelector('.ico3');
var blog_data = document.querySelector('.blog_data');
var follower_data = document.querySelector('.followers_data');
var blogs = document.querySelector('.blogs');
var followers = document.querySelector('.followers');
var edit = document.querySelector('.edit_button');
var presscount = 0;
var slug = document.querySelector('#slug');
var bio = document.querySelector('#bio');
var link = document.querySelector('#link');
var profile = document.querySelector('.profile')

var userhandle = document.querySelector('#name_input');

var profile_edit = document.querySelector('#profilePictureEdit');

blog_data.classList.add('expand');
follower_data.classList.add('collapse');

slug.disabled=true;
bio.disabled=true;
link.disabled=true;
userhandle.disabled=true;
profile.disabled=true;
edit.addEventListener('click', (event) => {
    event.preventDefault;

    if (presscount == 0) {
        edit.textContent = "Save";
        event.target.style.cssText = "background-color:#383838;color:#ffc700"
       presscount = 1;
       slug.disabled=false;
       bio.disabled=false;
       link.disabled=false;
profile.disabled=false;

       userhandle.disabled=false;
       profile_edit.style.visibility="visible";
    }
    else if (presscount == 1) {
        alert(" you really want to save ?")
        edit.textContent = "Edit";
        event.target.style.cssText = "background-color:#ffc700;color:black"
        presscount = 0;
        slug.disabled=true;
        bio.disabled=true;
        link.disabled=true;
        userhandle.disabled=true;
profile.disabled=true;

        profile_edit.style.visibility="hidden";
    }
})
function expand()
{
    follower_data.classList.toggle('collapse');
    follower_data.classList.toggle('expand');
    blog_data.classList.toggle('collapse');
    blog_data.classList.toggle('expand');
}
blogs.addEventListener('click',()=>
{
    if(!blog_data.classList.contains('expand'))
    {
        expand();
        active_button();
    }
});
followers.addEventListener('click',()=>
{
    if(!follower_data.classList.contains('expand'))
    {
        expand();
        active_button();
    }
});
blogs.classList.add('active_button');
function active_button()
{
  followers.classList.toggle('active_button')
  blogs.classList.toggle('active_button')
}


function switches()
{

    var ham = document.querySelector('.ico2');
    var cross = document.querySelector('.ico3');
    ham.classList.toggle('wrap');
    cross.classList.toggle('wrap');
   hide_nav();
}
function hide_nav()
{
    document.querySelector('.vertical_navbar').classList.toggle('visible_verticle_navbar');
}
// ham.addEventListener('click',switches);
// cross.addEventListener('click',switches);



