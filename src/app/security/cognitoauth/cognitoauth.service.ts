import { IAuthenticationDetailsData, CognitoUserPool,CognitoUser,
       CognitoUserAttribute, ICognitoUserAttributeData, AuthenticationDetails } from "amazon-cognito-identity-js";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const poolData = {
       	UserPoolId: 'us-east-1_5EH4p8vJs', // Your user pool id here
       	ClientId: '1r87ubahei96m8t5pvm7at05ec', // Your client id here
  };

const userPool = new CognitoUserPool(poolData);


@Injectable({
  providedIn:'root'

})

export class CognitoAuthService{
 cognitoUser:any

 constructor(){

 }

 onLogin(email:string, password:string) {

    const authenticationData = {
      Username : email,
      Password : password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);
    //console.log(email+" e "+password)
    const userData = {
      Username : email,
      Pool : userPool
    };
    const cognitoUser = new CognitoUser(userData);

    return Observable.create(observer => {
       console.log(observer)
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          console.log(result);
          observer.next(result);
          observer.complete();
        },
        onFailure: function(err) {
          console.log(err);
          observer.error(err);
        },
      });
    });
  }

  signUp(username,password){
    const attributeList=[]

    const dataEmail = {
           Name: 'email',
           Value: 'email@mydomain.com',
          };
    const dataName = {
        	Name: 'name',
        	Value: 'Lages',
        };
    const dataGivenName = {
          Name: 'given_name',
        	Value: 'Lages',
        };
    const attributeEmail = new CognitoUserAttribute(dataEmail);
    const attributeName = new CognitoUserAttribute(dataName);
    const attributeGivenName = new CognitoUserAttribute(dataGivenName);


    attributeList.push(attributeEmail);
    attributeList.push(attributeName);
    attributeList.push(attributeGivenName);
    userPool.signUp(username, password, attributeList, null, function(
        	err,
        	result
        ) {
        	if (err) {
        		alert(err.message || JSON.stringify(err));
        		return;
        	}
        	var cognitoUser = result.user;
        	console.log('user name is ' + cognitoUser.getUsername());
        });
  }
  isLoggedIn() {
    return userPool.getCurrentUser() != null;
  }

  getAuthenticatedUser() {
  // gets the current user from the local storage
    return userPool.getCurrentUser();
  }

  logOut() {
    this.getAuthenticatedUser().signOut();
    this.cognitoUser = null;
  }




}
