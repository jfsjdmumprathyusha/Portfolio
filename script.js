const btn= document.getElementById('bt1')
btn.addEventListener('click', data);

function data()
{
const name1= document.getElementById('name').value;
const email= document.getElementById('email').value;
const message= document.getElementById('message').value;






const source = document.getElementById('view').innerHTML;

const template = Handlebars.compile(source);

const context = {};
  context.name=name1;
  context.email=email;
  context.message=message;


    const compiledHtml = template(context);

    const information = document.getElementById('finalmessage');
    information.innerHTML = compiledHtml;
}