 function greet(name: string) {
    console.log(name.toUpperCase());
 }

 greet(null);


 function greetv1(name: string | null) {
    if(name){
        console.log(name.toUpperCase());

    }else {
        console.log('ดี');
    }
 }

 greetv1(null);