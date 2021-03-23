let i = 1;
function a() {
  let j = 2;
  b();
  function b(){
    {
      let k = 3;
      console.log(k);
      console.log(i);
    }
    let l = 4;
    console.log(l);
    
  }
}
a();
console.log(k);

// Contexte d'exécution global 
//  variables : i
//  functions : a()

// Contexte d'exécution de a()
//  variables : j
//  functions : b()

// Contexte d'exécution de b()
//  variables : l

// Contexte d'exécution de bloc de code de b()
//  variables : k
