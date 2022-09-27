// store the values :
const submitChange = document.getElementById('submit-f');
const form = document.querySelector('.input-group');
const root = document.getElementById('root');


submitChange.addEventListener('click', (e)=>{
    e.preventDefault();
    var sel = document.querySelector('.form-select');
    var value1 = parseInt(sel.options[sel.selectedIndex].value);
    const value2 = parseInt(document.querySelector('.form-control').value);
    const doc = {
       val1 : value1,
       val2: value2
      }
    fetch('http://localhost:3000/djezzy', {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' }
  })
  window.location.replace('/');
});

// show all values :


const renderPosts = async (term) => {
  let uri = 'http://localhost:3000/djezzy';

  const res = await fetch(uri);
  const posts = await res.json();

  let template = '';
  posts.forEach(post => {
    template += `
    <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">Index</th>
        <th scope="col">Price</th>
        <th scope="col">Fees</th>
        <th scope="col">Totals</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">${post.id}</th>
        <td>${post.val2}.00</td>
        <td>${post.val1}.00</td>
        <td>${post.val1 + post.val2}.00</td>
        <td>
          
          <button class="btn delete">
            Delete
          </button>

        </td>
      </tr>
    </tbody>
</table>
    `
  }); 
  root.innerHTML = template;
}
window.addEventListener('DOMContentLoaded', (e) =>{
    renderPosts();
});

 // delete flexy :
 const id = new URLSearchParams(window.location.search).get('id');
 const  deleteBtn = document.querySelector('.delete');

async function myFunction() {
     e.preventDefault();
     console.log('test')
     const res = await fetch(`http://localhost:3000/djezzy/${post.id}`, {
       method: 'DELETE'
     });
     window.location.replace("/");
 }
deleteBtn.addEventListener('click', myFunction());
