// store the values :
const submitChange = document.getElementById('submit-f');
const form = document.querySelector('.input-group');
const root = document.getElementById('root');
const toolbar = document.getElementById('toor');
const calculation = async () => {
  let uri = 'http://localhost:3000/djezzy';
  const res = await fetch(uri);
  const posts = await res.json();
  let sum = 0;
  for (var i in posts){
    sum += parseInt(posts[i].val2);
  }
  let fees = 0;
  for (var i in posts){
    fees += parseInt(posts[i].val1);
  }
  let templateCalculate = `
  <button type="button" class="btn btn-secondary">
  Total Price without fees : <span class="badge text-bg-danger">
    ${sum}.00 DA.
  </span>
  </button>
  <button type="button" class="btn btn-secondary">
  Total Price with fees : <span class="badge text-bg-danger">
    ${sum + fees}.00 DA.
  </span>
  </button>
  <button type="button" class="btn btn-secondary">
  Total fees : <span class="badge text-bg-danger">
    ${fees}.00 DA.
  </span>
  </button>
  `;
  toolbar.innerHTML = templateCalculate;
 
 /*  posts.forEach(post =>{
    templateCalculate += 
    `
    <span>
      ${post.val2}
    </span>
    `
  }) */

}
calculation();

submitChange.addEventListener('click', (e)=>{
    e.preventDefault();
    var sel = document.querySelector('.form-select');
    var value1 = parseInt(sel.options[sel.selectedIndex].value);
    var number = parseInt(document.querySelector('#numbers').value);
    const value2 = parseInt(document.querySelector('#val').value);
    const date = new Date();
    const doc = {
       val1 : value1,
       val2: value2,
       val3: number,
       val4: date
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
        <th scope="col">Number</th>
        <th scope="col">Date and Time</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">${post.id}</th>
        <td>${post.val2}.00</td>
        <td>${post.val1}.00</td>
        <td>${post.val1 + post.val2}.00</td>
        <td>0${post.val3}</td>
        <td>${post.val4}</td>
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
 /* const id = new URLSearchParams(window.location.search).get('id');
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
 */
