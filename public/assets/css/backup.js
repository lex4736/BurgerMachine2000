<h2><img src="/assets/img/burger01.png" alt="burger" class="img02"> Your Order is Ready.</h2>
<span class="text"> Select the burger you want to eat </span>
  <br> <br>
    
            <ul id= "burger-list">
                {{#each burgers}}
                {{#unless this.devoured}}
                    <p class="burgers-toEat ">
                        <form class="update col-xl-9 col-lg-11 col-md-12 col-sm-12 card-body" id="devour">
                {{this.id}}. {{this.burger_name}}
                            <button type="submit" data-id="{{this.id}}" class="devour-btn" id="devour"><img class="imgb" src="/assets/img/burger02.png"><br>EAT THIS BURGER</button>
                        </form>
                {{/unless}}
                {{/each}}
            </ul>
<hr>

===========</hr>

#devour{
  background-color: rgb(99, 53, 0); 
  
  padding: 10px 35px;
  border: none;
 width:20%; 
 float:left;
}
.devour-btn{
  background-color: rgb(99, 53, 0); 
  border: none;
 text-align: center;
  text-decoration: none;
  font-size: 11px;
  color: rgb(255, 222, 152);
}
.imgb
{
 width: 120px;
  height: 90px; 
}
#burger-list {
  color: rgb(255, 222, 152);
  display: inline-block;
  text-align:center;
  list-style: none;
  width: 100%;