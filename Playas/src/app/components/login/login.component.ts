import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]

})
export class LoginComponent implements OnInit {
  public title = 'Playas';
  public user: User;
  public identity;
  public token;
  public errorMessage;

  constructor(private _userService:UserService) 
  { 
  	this.user = new User('','','','','','','');}

  ngOnInit() {

    localStorage.clear();
  }

    public onSubmit(){
  	//console.log(this.user);
  	this._userService.signup(this.user).subscribe(
            		response =>{
                //console.log(response);
                let identity = response.token;
                this.token = response;
                //console.log(this.token);
            		//localStorage[''] = this.token;
                localStorage.setItem('mean-token', identity);
              
              
                      if((identity).length <= 0) {
                      
                       alert("El token no se ah generado bien");
                      }
                      else{
                        /*localStorage.setItem("token", "efra");
                         var nombre = localStorage.getItem("token");
                         console.log(nombre);*/
                     
                      this._userService.readToken(this.token).subscribe(
                          response =>{
                            //let SeeToken = response;
                            //console.log(response);
                            this.identity = response.user.role;
                            if (this.identity >=1 && this.identity <=4){
                                localStorage.clear();
                                window.location.href ="/coordinador";
                            }
                            else{
                               this.errorMessage = "Nivel de acceso no valido";
                               localStorage.clear();
                            }

                          },
                          error =>{  
                          console.log(response);                          
                          console.log("Error de jwt");
                          }
                      );
                      //elemento en localstorage para tener el token
                      
                      //console.log(identity);
                      

                      }
                },
     
  		error =>{

  			var errorMessage = <any>error;
  			if(errorMessage != null){
  				var body = JSON.parse(error._body);
          
          console.log(body.message);
          this.errorMessage = body.message;

  			}
  		}

  		);

  }
public getToken(){
  console.log("estas entrando aqui");
}
}








