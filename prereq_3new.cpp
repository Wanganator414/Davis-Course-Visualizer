#include <iostream>
#include <fstream>
#include <sstream>
#include <regex>
using namespace std;


int main(){
  ifstream inFile("prereq_3.txt");
  ofstream prereq_output;
  prereq_output.open("prereq_output.txt");
  int prereq_count = 0;

  regex classes("[A-Z][A-Z][A-Z]");
  regex numbers("[0-9][0-9][0-9]");
  smatch m;
  smatch i;
  int marker = 0;

  for(int i = 0; i < 7393; i++){
    string line = "";
    getline(inFile, line); //gets line

    if(islower(line[0])){ //first letter
      prereq_output << endl;
    } else if(islower(line[1])){ // second letter
      prereq_output << endl;
    } else {
      /*
      if(regex_search(line, m, classes)){
        for(auto x : m){
          prereq_output << x;
        }

        line = line.substr(line.find(x), line.size());
      }

      prereq_output << " ";

      if(regex_search(line, m, numbers)){
        for(auto x : m){
          prereq_output << x;
        }
      }


      prereq_output << endl;
      */

     bool wasNum = false;
     for(int i = 0; i < line.size() - 2; i++){
        char a = line[i]; 
        char b = line[i + 1];
        char c = line[i + 2];

        if(isupper(a) && isupper(b) && isupper(c)){
          prereq_output << " " << a << b << c;
          wasNum = false;
          
        }

        if(isdigit(a) && isdigit(b) && isdigit(c)){
          prereq_output << a << b << c << " ";
          wasNum = true;
        }

        if((a == 'o') && (b == 'r')){

          if(wasNum){
            prereq_output << "or ";
            wasNum = false;
          }
          
        }

        

        
        
     }

     prereq_output << endl;
    }
    
  }

  prereq_output.close();
  return 0;
  

}