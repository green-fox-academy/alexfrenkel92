'use strict';

const select = document.getElementById('select');

select.addEventListener('submit', e => {
  e.preventDefault();
  console.log(document.getElementById('pet-select').value);
  select.reset();
});

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('submit', e => {
  e.preventDefault();
  document.querySelectorAll('input[type="checkbox"]').forEach(item => {
    if(item.checked) {
      console.log(item.value);
    }
  });
});

const radio = document.getElementById('radio');

radio.addEventListener('submit', e =>{
  e.preventDefault();
  document.querySelectorAll('input[type="radio"]').forEach(item => {
    if(item.checked) {
      console.log(item.value);
    }
  });
});

<body>
  <main>
    <h1>Cat News</h1>
    <form action="/send" method='POST'>
      <div class="fav_pet">
        <p class="fav_pet_p">What is you favorite pet?</p>
        <input type="radio" id="dog" class="fav_pet" value="dog">
        <label for="">Dog</label>
        <input type="radio" id="cat" class="fav_pet" value="cat">
        <label for="cat">Cat</label>
        <input type="radio" id="goldfish" class="fav_pet" value="goldfish">
        <label for="goldfish">Viktor the goldfish</label>
      </div>
      <div class="cat_news">
        <p class="cat_news_p">Do you want to sign up for cat facts?</p>
        <input type="radio" id="yes" name="cat_facts" value="yes">
        <label for="">Yes</label>
        <input type="radio" id="no" name="cat_facts" value="no">
        <label for="cat">No</label>
      </div>
      <div class="buttons">
        <button type="submit" disabled="true">I love cats</button>
        <button type="submit" disabled="true">Sign up</button>
      </div>
    </form>
  </main>
  <script src="main.js"></script>
</body>
