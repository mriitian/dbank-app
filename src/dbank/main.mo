import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Int "mo:base/Int";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank{
  stable var currentValue: Float = 300;
  // currentValue := 300;
  stable var startTime = Time.now();
  // startTime := Time.now();
  Debug.print(debug_show(startTime));
  public func topUp(amout: Float){
    currentValue += amout;
    Debug.print(debug_show(currentValue));
  };

  public func Withdraw(amount: Float){
    let tempValue: Float = currentValue - amount;
    if(tempValue >= 0){
          currentValue -= amount;
          Debug.print(debug_show(currentValue));
    }else{
      Debug.print("Amount not available")
    }
    
  };

  public query func CheckBalance() : async Float{
    return currentValue;
  };

  public func Compound(){
    let CurrentTime = Time.now();
    let TimeElapsedNS = CurrentTime - startTime;
    let TimeElapsedS = TimeElapsedNS / 1000000000000;

    currentValue := currentValue * (1.01 ** Float.fromInt(TimeElapsedS));
    startTime := CurrentTime;
  }

}