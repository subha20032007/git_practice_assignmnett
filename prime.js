
function primecheck(N){
    let count =0;
    
    for(let i=1; i<=N; i++)
    {
        
            if(N%i==0)
            {
                count++
            }
        }
    
        if(count==2)
        {
        console.log(N, "is Prime");
        }
        else
        {
        console.log(N, "is not Prime");
        }
    
    }
        
    primecheck(13)
    
