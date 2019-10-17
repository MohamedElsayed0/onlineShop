import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/Services/orders.service';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from 'src/app/inter-faces.user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {
  orders$;
  brod=[];

  constructor(
    private orderServ:OrdersService,
    private authserv:AuthService,
    private router:Router
  ) { }

  async ngOnInit() {
    this.authserv.user.subscribe(async user =>{
      if (user) { 
        this.orders$ = await this.orderServ.getAllOrders(user.uid);
     
        
   
        this.orders$.subscribe((order:any)=>{
         
           console.log(order);
    
           for(let k in order.order)
           { 
            
             //
             let myRow = document.getElementById('allMyOrders');
             //
             let parent = document.createElement('div');
             parent.classList.add('col-12','row','border','background')
             //
             let child0 = document.createElement('div');
             child0.classList.add('col-lg-6','col-12','text-primary');
            
             let child01 = document.createElement('div');
             child01.classList.add('col-lg-6','col-12');
   
             //
             let child1 = document.createElement('div');
             child1.textContent = `Order placed on : ${order.order[k].orderDate}`;
             //
             let child2 = document.createElement('div');
             child2.textContent = `Order ID : ${k}`;
             //
             let child3 = document.createElement('div');
             this.orderServ.getUser(user.uid).subscribe((user:User)=>{
               child3.textContent = `Recipient: ${user.displayName}`;
             })
             //
             let child4 = document.createElement('div');
             child4.textContent = `Payment method: Cash On Delivery`
             //
             //
             child0.append(child1,child2);
             child01.append(child3,child4);
             parent.append(child0,child01);
             
              
             if(myRow !== null) myRow.append(parent);
   
             for(let b in order.order[k].item)
             { 
               let parent2 = document.createElement('div');
               parent2.classList.add('col-12','row','p-2' , 'shadow-sm' ,'bg-white','mb-3');
               let element0 = document.createElement('div');
               element0.classList.add('col-3');
               element0.style.maxHeight='120px';
               element0.style.maxWidth='80px';
               let element1 = document.createElement('img');
               element1.classList.add('img-fluid');
               element1.style.maxHeight='100px';
               element1.setAttribute('src',order.order[k].item[b].product.imageUrl)
               element0.append(element1);
               parent2.append(element0);
   
   
               let element3 = document.createElement('div');
               element3.classList.add('col','font-weight-bold','align-items-center','row');
               element3.style.fontSize='12px';
               let link = document.createElement('a');
               //let router = document.createAttribute('data-routerLink');
               link.classList.add('nav-link');
               //link.setAttribute('href',`#`);
               link.addEventListener('click',()=>{
               this.router.navigate(['/products-detail/',b]) 
              })
               
               link.textContent = 
                        order.order[k].item[b].product.title + ' ' + 
                        order.order[k].item[b].product.Brand;
               element3.append(link);
               parent2.append(element3)
               console.log(link)
               if(myRow !== null) myRow.append(parent2);
               //parent.appendChild(creat)
              // parent.appendChild(creat2)
              
               this.brod.push(order.order[k].item[b]);
              // console.log(this.brod);
             }
           }
   
         //this.ides = order.productIds;
         //this.keys = order.keys;
         //console.log(this.ides);
         
        //console.log(this.keys);
         
      
        })
       
       }
    })
    
  }

}
