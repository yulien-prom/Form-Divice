class Product {
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }

}

class UI{
    addProducr(product){
      const productList = document.getElementById('product-list');
      const element = document.createElement('div');
      element.innerHTML = `
      <div class="card text-center mb-4">
        <div class="card-body">
            <strong>Product Name</strong>: ${product.name}
            <strong>Product Price</strong>: ${product.price}
            <strong>Product Year</strong>: ${product.year}
            <a href="#" class="btn btn-danger" name="Delete">Delete</a>
        </div>
      </div>
      `;
      productList.appendChild(element);

    }

    resetFrom(){
        document.getElementById('product-form').reset();

    }

    DeleteProduct(element){
        if(element.name ==='Delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('🖕🖕🖕SU DISPOSITOV MOVIL A SIDO ELIMINADO (ಠ_ಠ) 🖕🖕🖕🖕', 'danger');
        }

    }

    showMessage(message, cssClass) {
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container");
        const app = document.querySelector("#App");
        container.insertBefore(div, app);
        setTimeout(function () {
        document.querySelector('.alert').remove();
        },5000);
    
    }
}

//Dom Events
document.getElementById('product-form')
.addEventListener('submit', function(event){
   const name = document.getElementById('name').value;
   const price = document.getElementById('price').value;
   const year = document.getElementById('year').value;
      
   console.log ( name, price, year);

   const product = new Product(name, price, year);

   const ui = new UI();
   ui.addProducr(product);
   ui.resetFrom()
   ui.showMessage(' ✌🤝✌SU DISPOSIIVO AH SIDO AGREGADO,👨‍⚖️ GRACIAS POR ELEGIRNOS!✌🤝✌📱📱📱💵', 'success');

   event.preventDefault();

});

document.getElementById('product-list').addEventListener('click', function(event){
console.log(event.target)
const ui = new UI
ui.DeleteProduct(event.target);

})