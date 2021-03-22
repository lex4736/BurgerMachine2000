document.getElementById("addBtn").addEventListener("click", function (e) {
    e.preventDefault();
    let burger = document.getElementById("burger-input");
    let newBurger = { burger_name: burger.value, devoured: false }
  
  
    fetch('/api/burgers', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
  
      // make sure to serialize the JSON body
      body: JSON.stringify(newBurger),
    }).then(() => {
      // Empty the form
      burger.value = '';
      // Reload the page so the user can see the new quote
      console.log('Created a new Burger!');
      location.reload();
    });
  });
  
  const changeBurgerBtns = document.querySelectorAll('.devour-btn');
  changeBurgerBtns.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const id = e.target.getAttribute('data-id');
      console.log(id);
      const devouredBurger = {
        devoured: 1,
      };
      console.log(devouredBurger);
      
  
      // check this part 
      fetch(`/api/burgers/${id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
  
        // make sure to serialize the JSON body
        body: JSON.stringify(devouredBurger),
      }).then((response) => {
        // Check that the response is all good
        // Reload the page so the user can see the new quote
        if (response.ok) {
          console.log(`changed burgerStatus to: ${devouredBurger}`);
          location.reload('/');
        } else {
          alert('something went wrong!');
        }
      });
  
    })
  
  })