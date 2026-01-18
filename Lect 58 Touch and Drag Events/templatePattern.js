// template pattern 
// there are pre-defined steps in the parent class
// some steps are in parent class, and some are left for the child class to implement

class AuthService{
  login(){
    this.validate();
    this.processCredentials();
    this.createSession();
  }

  validate(){
    console.log("Logic related to validation");
  }

  processCredentials(){
    throw new Error("Processing needs to be implemented");
  }

  createSession(){
    console.log("Logic related to session creation");
  }

}


class GoogleAuthService extends AuthService{
  processCredentials(){
    console.log("Implementation for credentials processing -- Google...");
  }
}


class YahooEmailAuthSerivce extends AuthService{
  processCredentials(){
    console.log("Implementation for credentials processing -- Yahoo...");
  }
}


const googleService = new GoogleAuthService();
googleService.login();

console.log("\n");

const yahooService = new YahooEmailAuthSerivce();
yahooService.login();