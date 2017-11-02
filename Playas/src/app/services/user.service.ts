import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL }	from './global';

@Injectable()
export class UserService{

	public url: string;
	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}
	signup(user_to_login, gethash = true){
		
		//console.log(user_to_login);
		
		//console.log(gethash);

		if(gethash != null){
			user_to_login.gethash = gethash;
		}

		let json = JSON.stringify(user_to_login);
		
		let params = json;
	
		let headers = new Headers({'Content-Type':'application/json'});
		console.log(this.url+'login');
		return this._http.post(this.url+'login', params, {headers: headers}).map(res => res.json());
	}
	readToken(Token_pro){
		//var str = '{ token:' + ' "' + Token_pro + '"'+ ' }'
		//console.log(str);
		//console.log(Token_pro);
		let token = JSON.stringify(Token_pro);
		//let params = token.replace(/['"]+/g,'');
		let params = token;
		//console.log("parametros ");
		//console.log(params);
		let headers = new Headers({'Content-Type':'application/json'});
		//console.log(this._http.post(this.url+'decode', params, {headers: headers}).map(res => res.json()));
		return this._http.post(this.url+'decode', params, {headers: headers}).map(res => res.json());

	}
	 
}