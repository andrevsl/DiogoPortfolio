import { IAuthenticationDetailsData, CognitoUserPool,CognitoUser,
       CognitoUserAttribute, ICognitoUserAttributeData, AuthenticationDetails } from "amazon-cognito-identity-js";
import { Injectable, Injector } from '@angular/core';
import { Observable,from } from 'rxjs';
import * as AWS from 'aws-sdk/global';
import { NotificationService } from '../../shared/ModalNotification/notification.service';

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

 constructor(private injector:Injector){   }


 onLogin(username, password):Observable<any> {

   const authenticationData = {
      Username : username,
      Password : password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username : username,
      Pool : userPool
    };
    const cognitoUser = new CognitoUser(userData);
    //console.log(authenticationDetails)
    return Observable.create(observer => {


      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          const accessToken = result.getAccessToken().getJwtToken();
          //console.log(result);
          console.log(username+" is logged")

          observer.next(result);
          observer.complete();
        },
        onFailure: function(err) {
          //console.log(err);
          observer.error(err);
        },
      });
    });


 }
/*
 onLogin(username:string, password:string){

        const authenticationData = {
        	Username: username,
        	Password: password,
        };
        const authenticationDetails = new AuthenticationDetails(
        	authenticationData
        );
        const poolData = {
        	UserPoolId: 'us-east-1_5EH4p8vJs', // Your user pool id here
        	ClientId: '1r87ubahei96m8t5pvm7at05ec', // Your client id here
        };
        const userPool = new CognitoUserPool(poolData);
        const userData = {
        	Username: username,
        	Pool: userPool,
        };
        const cognitoUser = new CognitoUser(userData);

        cognitoUser.authenticateUser(authenticationDetails, {
        	onSuccess: function(result) {

           console.log(username+" is logged")
           console.log(result)

           return result
          },
          onFailure: function(err) {
              alert(err.message || JSON.stringify(err));
              return err
           },
        })

  }
*/


  signUp(SignData:any):Observable<any>{
    const attributeList=[]

    const dataEmail = {
           Name: 'email',
           Value: SignData.email,
          };
    const dataName = {
        	Name: 'name',
        	Value: SignData.name,
        };
    const dataGivenName = {
          Name: 'given_name',
        	Value: SignData.gname,
        };

    const attributeEmail = new CognitoUserAttribute(dataEmail);
    const attributeName = new CognitoUserAttribute(dataName);
    const attributeGivenName = new CognitoUserAttribute(dataGivenName);


    attributeList.push(attributeEmail);
    attributeList.push(attributeName);
    attributeList.push(attributeGivenName);

    return Observable.create(observer =>{
              userPool.signUp(SignData.username, SignData.password,
                              attributeList, null, 	(err,result)=> {
        	if (err) {
        		//alert(err.message || JSON.stringify(err));
            console.log(err.message || JSON.stringify(err))
        		return;
        	}
        	this.cognitoUser = result.user;
          console.log(result);
        	console.log('user name is ' + this.cognitoUser.getUsername());
          observer.next(result);
          observer.complete();
        })
      });
  }


  confirmAuthCode(code) {
    const user = {
      Username : this.cognitoUser.username,
      Pool : userPool
    };
    return Observable.create(observer => {
      const cognitoUser = new CognitoUser(user);
      cognitoUser.confirmRegistration(code, true, function(err, result) {
        if (err) {
          console.log(err);
          observer.error(err);
        }
        console.log("confirmAuthCode() success", result);
        observer.next(result);
        observer.complete();
      });
    });
  }

  isLoggedIn() {
    return userPool.getCurrentUser() != null;
  }
  getUserAttributes(){

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
